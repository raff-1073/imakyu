console.log("乗換検索JS起動！");

let trains = [];

// 運転日（臨時列車・運休）の設定。同梱の operations.json と、この端末で
// 管理ページから追加した分（localStorage）を合わせて使う。
let baseTrains = [];
let OPS = { rules: [], extraTrains: [] };
const LINE_CODE_MAP = {};

function todayStr(){
    const d = new Date();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
}

let currentTravelDate = todayStr();

function opsDateMatch(dates, dateStr){
    for(const d of dates || []){
        if(typeof d !== "string"){
            continue;
        }
        if(d.includes("/")){
            const parts = d.split("/");
            if(dateStr >= parts[0] && dateStr <= parts[1]){
                return true;
            }
        }
        else if(d === dateStr){
            return true;
        }
    }
    return false;
}

function opsRuleMatches(rule, train){
    if(rule.line && rule.line !== train.line){
        return false;
    }
    if(rule.id && String(train.id) !== String(rule.id)){
        return false;
    }
    if(rule.name && train.name !== rule.name){
        return false;
    }
    if(rule.type && train.type !== rule.type){
        return false;
    }
    if(!rule.id && !rule.name && !rule.type){
        return false;
    }
    return true;
}

// その列車が dateStr に運転するかどうか
function trainRunsOn(train, dateStr){
    let onlyDates = null;
    for(const rule of OPS.rules || []){
        if(!opsRuleMatches(rule, train)){
            continue;
        }
        if(rule.mode === "except"){
            if(opsDateMatch(rule.dates, dateStr)){
                return false;
            }
        }
        else{
            onlyDates = (onlyDates || []).concat(rule.dates || []);
        }
    }
    if(onlyDates){
        return opsDateMatch(onlyDates, dateStr);
    }
    return true;
}

async function loadOperations(){
    try{
        const response =
            await fetch("../data/json/operations.json");
        const data =
            await response.json();
        if(data && (data.rules || data.extraTrains)){
            OPS = {
                rules: data.rules || [],
                extraTrains: data.extraTrains || []
            };
        }
    }
    catch(error){
        try{
            await loadDataScript(
                "../data/js/operations.js"
            );
            const data =
                window.IMAKYU_OPERATIONS;
            if(data){
                OPS = {
                    rules: data.rules || [],
                    extraTrains: data.extraTrains || []
                };
            }
        }
        catch(fallbackError){
            // 運転日データが無くても通常検索はできる
        }
    }
    // 管理ページでこの端末に追加した分を重ねる
    try{
        const local =
            JSON.parse(localStorage.getItem("imakyu_ops_local") || "null");
        if(local){
            OPS.rules =
                OPS.rules.concat(local.rules || []);
            OPS.extraTrains =
                OPS.extraTrains.concat(local.extraTrains || []);
        }
    }
    catch(storageError){
        // localStorage が使えない環境では同梱分のみ
    }
}

// 選択中の日付で運転する列車だけに trains を組み替える
function applyOpsDate(dateStr){
    currentTravelDate =
        dateStr;
    const extras = [];
    (OPS.extraTrains || []).forEach((extra, i)=>{
        if(!opsDateMatch(extra.dates, dateStr)){
            return;
        }
        const train = {
            id: "ops-" + i,
            line: extra.line,
            lineCode: LINE_CODE_MAP[extra.line] || "",
            type: extra.type || "",
            name: extra.name || "",
            direction: extra.direction || "",
            stops: extra.stops || []
        };
        train.destination =
            getDestination(train);
        extras.push(train);
    });
    trains =
        baseTrains.filter(train=>trainRunsOn(train, dateStr))
            .concat(extras);
    buildDepartureIndex();
    throughNextKey = null;
    throughPrevKey = null;
}


let kmData = {};

let departureIndex = {};

let stationData = [];


// =====================
// JS形式データの読み込み（file://用フォールバック）
// =====================

function loadDataScript(src){

    return new Promise((resolve, reject)=>{

        if(window.__loadedDataScripts &&
           window.__loadedDataScripts[src]){
            resolve();
            return;
        }

        const s =
            document.createElement("script");

        s.src = src;

        s.onload = ()=>{

            window.__loadedDataScripts =
                window.__loadedDataScripts || {};

            window.__loadedDataScripts[src] = true;

            resolve();

        };

        s.onerror = ()=>
            reject(new Error("load failed: " + src));

        document.head.appendChild(s);

    });

}

// =====================
// 駅データ読み込み
// =====================

async function loadStations() {

    try{

        const response =
            await fetch("../data/json/stations.json");

        stationData =
            await response.json();

        if(stationData && stationData.length){
            return;
        }

        throw new Error("stations empty");

    }

    catch(error){

        // file:// では fetch が使えないため、JS形式のデータを読み込む
        try{

            await loadDataScript(
                "../data/js/stations.js"
            );

            stationData =
                window.IMAKYU_STATIONS || [];

        }

        catch(fallbackError){

            console.error(fallbackError);

        }

    }

}

// =====================
// 列車データ読み込み
// =====================

async function loadTrains(){

    const files = [

        {
            file:"中央線.json",
            name:"中央線",
            code:"IC"
        },

        {
            file:"黒崎小岩ライン.json",
            name:"黒崎小岩ライン",
            code:"IK"
        },

        {
            file:"今宮本線.json",
            name:"今宮本線",
            code:"IM"
        },

        {
            file:"松代線.json",
            name:"松代線",
            code:"MS"
        }
,
        {
            file:"中央高速線.json",
            name:"中央高速線",
            code:"CK"
        },

        {
            file:"今宮高速線.json",
            name:"今宮高速線",
            code:"MK"
        },

        {
            file:"吉田線.json",
            name:"吉田線",
            code:"IY"
        },

        {
            file:"吉野線.json",
            name:"吉野線",
            code:"YN"
        },

        {
            file:"大川線.json",
            name:"大川線",
            code:"OK"
        },

        {
            file:"大野線.json",
            name:"大野線",
            code:"IO"
        },

        {
            file:"朝日線・小出線.json",
            name:"朝日線・小出線",
            code:"IA"
        },

        {
            file:"横倉空港線・河合本線・横倉スカイアクセス線.json",
            name:"横倉空港線・河合本線・横倉スカイアクセス線",
            code:"YS"
        },

        {
            file:"水上線・西田線.json",
            name:"水上線・西田線",
            code:"MZ"
        },

        {
            file:"青山線.json",
            name:"青山線",
            code:"AO"
        }

        ,{
            file:"秋川本線.json",
            name:"秋川本線",
            code:"AW"
        }

        ,{
            file:"田原線.json",
            name:"田原線",
            code:"TA"
        }

        ,{
            file:"北倉線.json",
            name:"北倉線",
            code:"KI"
        }

        ,{
            file:"多田本線.json",
            name:"多田本線",
            code:"TH"
        }

        ,{
            file:"山北線.json",
            name:"山北線",
            code:"KY"
        }

        ,{
            file:"新沢線.json",
            name:"新沢線",
            code:"KN"
        }

        ,{
            file:"河田線.json",
            name:"河田線",
            code:"KD"
        }

        ,{
            file:"和阪線.json",
            name:"和阪線",
            code:"WS"
        }

        ,{
            file:"浜田本線.json",
            name:"浜田本線",
            code:"HH"
        }

        ,{
            file:"扶桑本線.json",
            name:"扶桑本線",
            code:"FS"
        }

        ,{
            file:"浜見線.json",
            name:"浜見線",
            code:"HM"
        }

        ,{
            file:"森浜線.json",
            name:"森浜線",
            code:"MH"
        }

        ,{
            file:"赤倉本線.json",
            name:"赤倉本線",
            code:"AH"
        }

        ,{
            file:"赤倉港線.json",
            name:"赤倉港線",
            code:"AK"
        }

        ,{
            file:"新拠点線.json",
            name:"新拠点線",
            code:"SY"
        }

        ,{
            file:"小岩線・小阪線.json",
            name:"小岩線・小阪線",
            code:"KW"
        }

        ,{
            file:"拠点本線.json",
            name:"拠点本線",
            code:"KH"
        }

        ,{
            file:"都心環状線.json",
            name:"都心環状線",
            code:"TL"
        }

        ,{
            file:"吹雪環状線.json",
            name:"吹雪環状線",
            code:"FL"
        }

        ,{
            file:"赤津線.json",
            name:"赤津線",
            code:"KT"
        }

        ,{
            file:"河津高速線・拠点高速線.json",
            name:"河津高速線・拠点高速線",
            code:"WK"
        }

        ,{
            file:"横倉空港線（横倉）.json",
            name:"横倉空港線（横倉）",
            code:"YK"
        }

        ,{
            file:"磯電線・技輪ドーム線・拠点小岩ライン.json",
            name:"磯電線・技輪ドーム線・拠点小岩ライン",
            code:"TK"
        }
        ,{
            file:"臨海線.json",
            name:"臨海線",
            code:"R"
        }

    ];

    for(const line of files){

        let data = null;

        try{

            const response =
                await fetch("../data/json/" + line.file);

            data =
                await response.json();

        }

        catch(fetchError){

            // file:// では fetch が使えないため、JS形式のデータを読み込む
            try{

                await loadDataScript(
                    "../data/js/trains.js"
                );

                data =
                    (window.IMAKYU_TRAINS || {})[line.file] || null;

            }

            catch(fallbackError){

                console.error(fallbackError);

            }

        }

        if(!data){
            continue;
        }

        let lineTrains;

        if(Array.isArray(data)){

            lineTrains = data;

        }

        else{

            lineTrains = data.trains;

        }

        lineTrains.forEach(train=>{

            LINE_CODE_MAP[line.name] =
                line.code;

            train.line =
                line.name;

            train.lineCode =
                line.code;

            train.destination =
                getDestination(train);

            trains.push(train);

        });

    }

    console.log("列車数",trains.length);

    baseTrains =
        trains.slice();

    buildDepartureIndex();

}

function buildDepartureIndex(){

    // 駅別の発車列車インデックスを構築（乗換検索の高速化）
    departureIndex = {};

    trains.forEach(train=>{

        train.stops.forEach(stop=>{

            if(
                stop.kind==="発" &&
                isValidTime(stop.time)
            ){

                if(!departureIndex[stop.station]){
                    departureIndex[stop.station] = [];
                }

                departureIndex[stop.station].push({

                    train:train,

                    depart:stop.time

                });

            }

        });

    });

    Object.values(departureIndex).forEach(list=>{

        list.sort((a,b)=>
            a.depart.localeCompare(b.depart)
        );

    });

}

// =====================
// 運賃計算
// =====================

// [最大キロ, 運賃] の表（2026-11-16 悠征提示の運賃表）
const FARE_TABLE = [
    [3,150],[6,180],[10,210],[15,250],[20,330],[25,420],[30,500],
    [35,580],[40,660],[45,740],[50,820],[60,940],[70,1060],[80,1180],
    [90,1300],[100,1420],[120,1640],[140,1860],[160,2080],[180,2300],
    [200,2520],[220,2740],[240,2960],[260,3180],[280,3400],[300,3620],
    [320,3900],[340,4180],[360,4460],[380,4740],[400,5020],[420,5300],
    [440,5580],[460,5860],[480,6140],[500,6420],[520,6740],[540,7060],
    [560,7380],[580,7700],[600,8020],[620,8340],[640,8660],[650,8980],
    [700,9780],[750,10580],[800,11380],[850,12180],[900,12980],[950,13780],[1000,14580]
];

// IC運賃の端数処理（切り捨て・2026-11-16 悠征決定）
const IC_FARE_ROUNDING = "floor";

async function loadKm(){

    try{

        const response =
            await fetch(
                "../data/json/km.json"
            );

        kmData =
            await response.json();

        if(kmData && Object.keys(kmData).length){
            return;
        }

        throw new Error("km empty");

    }

    catch(error){

        // file:// では fetch が使えないため、JS形式のデータを読み込む
        try{

            await loadDataScript(
                "../data/js/km.js"
            );

            kmData =
                window.IMAKYU_KM || {};

        }

        catch(fallbackError){

            console.error(fallbackError);

        }

    }

}

function getDistanceKm(line, from, to){

    const lineKm =
        kmData[line];

    if(!lineKm){
        return null;
    }

    if(
        lineKm[from]===undefined ||
        lineKm[to]===undefined
    ){
        return null;
    }

    return Math.abs(
        lineKm[from] - lineKm[to]
    );

}

function getFare(distanceKm){

    if(
        distanceKm===null ||
        distanceKm<=0
    ){
        return null;
    }

    for(const [maxKm, fare] of FARE_TABLE){

        if(distanceKm<=maxKm){
            return fare;
        }

    }

    // 表の上限を超えたら最上位の運賃
    return FARE_TABLE[
        FARE_TABLE.length - 1
    ][1];

}


// =====================
// 会社別運賃（2026-11-19 悠征の決定）
// 会社が変わるごとに、その会社の距離で運賃表を引き直して合算する。
// IC運賃も会社ごとに ×0.99 して合算する。
// =====================
const LINE_COMPANY = {
    "中央線":"今急","今宮本線":"今急","松代線":"今急","中央高速線":"今急",
    "今宮高速線":"今急","吉田線":"今急","吉野線":"今急","大川線":"今急",
    "大野線":"今急","朝日線・小出線":"今急","水上線・西田線":"今急","青山線":"今急",
    "秋川本線":"今急","横倉空港線・河合本線・横倉スカイアクセス線":"今急",
    "黒崎小岩ライン":"今急",
    "田原線":"西中","北倉線":"西中","多田本線":"西中","新沢線":"西中",
    "河田線":"西中","山北線":"西中",
    "和阪線":"横倉","浜田本線":"横倉","扶桑本線":"横倉","浜見線":"横倉",
    "森浜線":"横倉","赤倉本線":"横倉","赤倉港線":"横倉","新拠点線":"横倉",
    "小岩線・小阪線":"横倉","拠点本線":"横倉","都心環状線":"横倉","吹雪環状線":"横倉",
    "赤津線":"横倉","河津高速線・拠点高速線":"横倉","横倉空港線（横倉）":"横倉",
    "磯電線・技輪ドーム線・拠点小岩ライン":"磯急",
    "臨海線":"臨海"
};

// 路線の中に会社境界がある路線。
// sideKm未満（田原線は以下）の駅側が sideCompany、境界駅より先が otherCompany。
// boundary は距離の分割点になる駅。
const COMPANY_SPLIT = {
    // 赤倉都市線区間（新赤倉〜有坂）は横倉電鉄。有坂のkm=59が境界
    "黒崎小岩ライン": { boundary:"有坂", sideKm:59, sideInclusive:false, sideCompany:"横倉", otherCompany:"今急" },
    // 田原線（水谷〜田原市）は西中電鉄。田原市より先（吉田線・中央線方面）は今急
    "田原線": { boundary:"田原市", sideKm:23, sideInclusive:true, sideCompany:"西中", otherCompany:"今急" }
};

function companySideOf(split, km){
    return (split.sideInclusive ? km <= split.sideKm : km < split.sideKm)
        ? split.sideCompany : split.otherCompany;
}

// 区間 [from, to]（路線のkm軸）を会社別の距離に分解する
function rangeCompanyKm(line, from, to){
    const lineKm = kmData[line];
    if(!lineKm || lineKm[from]===undefined || lineKm[to]===undefined) return null;
    const split = COMPANY_SPLIT[line];
    const d = Math.abs(lineKm[to] - lineKm[from]);
    if(!split) return [{ company: LINE_COMPANY[line] || "今急", km: d }];
    const fromSide = companySideOf(split, lineKm[from]);
    const toSide = companySideOf(split, lineKm[to]);
    if(fromSide === toSide) return [{ company: fromSide, km: d }];
    const dFrom = Math.abs(lineKm[from] - lineKm[split.boundary]);
    return [
        { company: fromSide, km: dFrom },
        { company: toSide, km: d - dFrom }
    ];
}

// 列車の1レグを会社別の距離に分解する（経路依存距離の路線は全て単一会社）
function legCompanyKm(leg){
    const line = leg.train.line;
    const d = legDistanceKm(leg);
    if(d===null) return null;
    if(!COMPANY_SPLIT[line]){
        return [{ company: LINE_COMPANY[line] || "今急", km: d }];
    }
    const parts = rangeCompanyKm(line, leg.from, leg.to);
    if(!parts) return null;
    // km軸の分解合計がレグ距離とずれる場合（田原線の軸の折り返し等）は
    // レグ距離に合わせて按分せず、境界までの距離を優先して残りをもう一方にする
    const sum = parts.reduce((acc, x) => acc + x.km, 0);
    if(sum !== d && parts.length === 2){
        parts[1].km = d - parts[0].km;
    }
    return parts;
}

// 会社別kmの合計 → 会社別運賃の内訳 [{company, km, fare, icFare}]
function companyFares(companyKm){
    const out = [];
    for(const company of Object.keys(companyKm)){
        const km = companyKm[company];
        if(km <= 0) continue;
        const fare = getFare(km);
        if(fare === null) return null;
        out.push({ company:company, km:km, fare:fare, icFare:getIcFare(fare) });
    }
    return out.length ? out : null;
}

function getIcFare(fare){

    const raw =
        fare * 0.99;

    if(IC_FARE_ROUNDING==="ceil"){
        return Math.ceil(raw);
    }

    if(IC_FARE_ROUNDING==="round"){
        return Math.round(raw);
    }

    return Math.floor(raw);

}

// legs: [[路線名, 出発駅, 到着駅], ...] を通算して運賃チップのHTMLを返す
function fareChips(legs){

    const companyKm = {};

    for(const [line, from, to] of legs){

        const parts =
            rangeCompanyKm(line, from, to);

        if(!parts){

            return `<span class="summary-chip">
💴 ---
</span>`;

        }

        for(const part of parts){

            companyKm[part.company] =
                (companyKm[part.company] || 0) + part.km;

        }

    }

    const breakdown =
        companyFares(companyKm);

    if(!breakdown){

        return `<span class="summary-chip">
💴 ---
</span>`;

    }

    const fare =
        breakdown.reduce((acc, b) => acc + b.fare, 0);

    const icFare =
        breakdown.reduce((acc, b) => acc + b.icFare, 0);

    return `<span class="summary-chip">
💴 ${fare.toLocaleString()}円
</span>

<span class="summary-chip">
IC ${icFare.toLocaleString()}円
</span>`;

}

// =====================
// 高速線料金（2026-11-16 悠征提示の料金表）
// =====================

// 横倉電鉄の特急の上級車両は「グリーン車」（料金はノーブルカーと同じ・悠征）
const GREEN_CAR_LINES = ["和阪線", "浜田本線", "浜見線", "扶桑本線", "赤倉本線", "赤津線", "拠点本線", "横倉空港線（横倉）", "河津高速線・拠点高速線"];

const HIGH_SPEED_LINES = [
    "中央高速線",
    "今宮高速線",
    "河津高速線・拠点高速線"
];

// [最大キロ, 自由席, 指定席]
const EXPRESS_FARE_TABLE = [
    [50,800,1100],[100,1200,1600],[150,1600,2100],[200,2000,2500],
    [250,2400,2900],[300,2800,3300],[400,3200,3700],[500,3600,4100],
    [600,4000,4500],[650,4300,4800],
    [750,4700,5200],[850,5100,5600],[950,5500,6000],[1000,5800,6300]
];

// [最大キロ, 追加料金]
const NOBLE_FARE_TABLE = [
    [100,1500],[200,2000],[300,2500],[400,3000],
    [500,3500],[600,4000],[650,4300],
    [750,4800],[850,5300],[950,5800],[1000,6100]
];

const CELESTE_FARE_TABLE = [
    [100,4000],[200,5000],[300,6000],[400,7000],
    [500,8000],[600,9000],[650,9500],
    [750,10500],[850,11500],[950,12500],[1000,13000]
];

function tierRow(table, km){

    for(const row of table){

        if(km<=row[0]){
            return row;
        }

    }

    return table[table.length - 1];

}

// 1区間分の高速線料金（高速線でなければ null）
function legExpress(leg){

    if(!HIGH_SPEED_LINES.includes(leg.train.line)){
        return null;
    }

    const km =
        legDistanceKm(leg);

    if(km===null || km<=0){
        return null;
    }

    const express =
        tierRow(EXPRESS_FARE_TABLE, km);

    return {

        km:km,

        unreserved:express[1],

        reserved:express[2],

        noble:tierRow(NOBLE_FARE_TABLE, km)[1],

        // 河津高速線・拠点高速線にセレストクラスはない（悠征の設定）
        celeste: leg.train.line === "河津高速線・拠点高速線"
            ? null : tierRow(CELESTE_FARE_TABLE, km)[1]

    };

}

// =====================
// 特急料金・ライナー・特別列車（2026-11-17 悠征提示の料金表）
// =====================

// 特急料金がかかる種別（高速線以外）
const LIMITED_EXPRESS_TYPES = [
    "特急", "臨特急", "寝特", "臨寝特"
];

// 自由席特急券 [最大キロ, 料金] ※300kmまで。
// これを超える区間は自由席の設定がないものとして指定席料金で計算する
const LIMITED_UNRESERVED_TABLE = [
    [50,500],[100,800],[150,1100],[200,1400],[250,1700],[300,2000]
];

// 指定席特急券 [最大キロ, 料金]
const LIMITED_RESERVED_TABLE = [
    [50,800],[100,1200],[150,1600],[200,1900],[250,2200],
    [300,2500],[400,2800],[500,3000],[600,3200],[650,3400],
    [750,3600],[850,3800],[950,4000],[1000,4200]
];

// 特急のノーブルカー [最大キロ, 追加料金] ※300kmまで
const LIMITED_NOBLE_TABLE = [
    [100,800],[200,1200],[300,1500]
];

// 普通列車ノーブルカー（黒崎小岩ラインの準急・急行・通勤急行・快速急行）
// [最大キロ, 追加料金]
// ※101km以上は距離によらず一律1,000円（2026-11-17 悠征指定。当初の表は～150kmまでだった）
const ORDINARY_NOBLE_TABLE = [
    [50,500],[100,800],[9999,1000]
];

const ORDINARY_NOBLE_TYPES = [
    "準急", "急行", "通急", "快急"
];

// ライナー（黒崎ライナー・Mライナー）は一律料金
const LINER_NAMES = [
    "黒崎ライナー", "Mライナー", "拠点ライナー"
];

const LINER_FARE = 600;

// 特別列車の個室料金（区間欄にメモとして表示）
// 個室料金は寝台料金として特急料金に上乗せする（2026-11-17 悠征確認）
const SPECIAL_TRAIN_NOTES = {

    "ナイトエクスプレス乙島":
        "個室料金（寝台料金・特急料金別）：B個室 +6,000円／A個室 +9,000円（SUYARINは特急券のみ）",

    "ナイトエクスプレス秋川":
        "個室料金（寝台料金・特急料金別）：B個室 +6,000円／A個室 +9,000円（SUYARINは特急券のみ）",

    "銀鳥":
        "個室料金（寝台料金・特急料金別）：B個室 +8,000円／A個室 +13,000円／S個室 +20,000円",

    "天空":
        "個室料金（寝台料金・特急料金別）：B個室 +9,000円／A個室 +15,000円／S個室 +23,000円"

};

// 表の範囲内なら行を返し、範囲外なら null（tierRow と違い最終行で打ち止めにしない）
// 正式には複数路線で構成されるデータ路線の区間定義（悠征の設定）。
// 黒崎小岩ラインのデータは 今宮〜東秋津＝今宮線、東秋津〜有坂＝黒崎小岩ライン、有坂〜新赤倉＝横倉電鉄赤倉都市線。
const FORMAL_SEGMENTS = {
    "黒崎小岩ライン": [
        { name: "横倉電鉄赤倉都市線", fromStation: "新赤倉", toStation: "有坂" },
        { name: "黒崎小岩ライン", fromStation: "有坂", toStation: "東秋津" },
        { name: "今宮線", fromStation: "東秋津", toStation: "今宮" }
    ],
    // 水上線・西田線のデータは 新金川〜東出＝水上線、東出〜新川山＝西田線（悠征の設定）。
    "水上線・西田線": [
        { name: "水上線", fromStation: "新金川", toStation: "東出" },
        { name: "西田線", fromStation: "東出", toStation: "新川山" }
    ],
    // 和阪線・浜田本線のデータには直通列車が混ざる（悠征の正式区間：
    // 新赤倉〜鎌中＝和阪線、鎌中〜亀坂＝浜田本線、浜田〜朝日＝扶桑本線）。
    "和阪線": [
        { name: "和阪線", fromStation: "新赤倉", toStation: "鎌中" },
        { name: "浜田本線", fromStation: "鎌中", toStation: "浜田" }
    ],
    "浜田本線": [
        { name: "和阪線", fromStation: "新赤倉", toStation: "鎌中" },
        { name: "浜田本線", fromStation: "鎌中", toStation: "浜田" },
        { name: "扶桑本線", fromStation: "浜田", toStation: "朝日" }
    ],
};

// 朝日線・小出線は小出を2回通るループ状の線形でkmが単調にならないため、
// 駅間のペアで正式路線を判定する。小出線＝小出〜新長井（悠征の設定）で、
// 小出線の列車は新長井を出て長井・岩島経由で小出に至り、朝日線に合流して朝日まで直通する。
// それ以外の駅間は朝日線（東秋津〜朝日）。
const FORMAL_SEGMENT_PAIRS = {
    "小岩線・小阪線": {
        defaultLine: "小岩線",
        specialLine: "小阪線",
        pairs: [["横電小岩", "小岩競馬場前"], ["小岩競馬場前", "浅川"], ["浅川", "見上"],
                ["見上", "横倉動物園前"], ["横倉動物園前", "階上"], ["階上", "焼津川"],
                ["焼津川", "拠点遊園地"], ["拠点遊園地", "横倉電鉄博物館"], ["横倉電鉄博物館", "和阪"]]
    },
    "朝日線・小出線": {
        defaultLine: "朝日線",
        specialLine: "小出線",
        pairs: [["小出", "新長井"], ["新長井", "長井"], ["長井", "枚岡"], ["枚岡", "鶴野"],
                ["鶴野", "石津"], ["石津", "川口"], ["川口", "古井"], ["古井", "岩島"], ["岩島", "小出"]]
    }
};

// 路線コードの表示。水上線・西田線は正式コードが別（水上線=MZ／西田線=IN）ため、
// 乗車開始駅が属する正式路線のコードを出す。それ以外はデータ路線のコード。
const KAWAZU_PAIR_LIST = [["河合", "第一拠点"], ["横倉", "横倉空港"], ["横倉空港", "山下"],
    ["山下", "大井山"], ["大井山", "秋津"], ["秋津", "東秋津"]];
const KYOTEN_PAIR_LIST = [["東京", "品川"], ["品川", "羽田空港"], ["羽田空港", "新赤倉"],
    ["新赤倉", "赤倉市"], ["赤倉市", "第一拠点"], ["横倉", "三澤"], ["三澤", "鎌中"], ["東秋津", "横倉"]];
const pairKey = (a, b) => a < b ? a + "|" + b : b + "|" + a;
const KAWAZU_PAIRS = new Set(KAWAZU_PAIR_LIST.map(([a, b]) => pairKey(a, b)));
const KYOTEN_PAIRS = new Set(KYOTEN_PAIR_LIST.map(([a, b]) => pairKey(a, b)));

// 河津高速線・拠点高速線データセットのレグを駅間ごとに WK/KK へ分類する。
// 共用区間（第一拠点〜横倉）は前後の区間の分類で決める。
function kawazuSegClass(leg) {
    const names = leg.train.stops.map(x => x.station);
    const fi = names.indexOf(leg.from), ti = names.indexOf(leg.to);
    if (fi === -1 || ti === -1 || fi >= ti) return [];
    const cls = [];
    for (let i = fi; i < ti; i++) {
        const k = pairKey(names[i], names[i + 1]);
        if (KAWAZU_PAIRS.has(k)) cls.push("WK");
        else if (KYOTEN_PAIRS.has(k)) cls.push("KK");
        else cls.push("?");
    }
    for (let i = 0; i < cls.length; i++) {
        if (cls[i] !== "?") continue;
        const near = cls.slice(i + 1).find(c => c !== "?") ||
            cls.slice(0, i).reverse().find(c => c !== "?");
        cls[i] = near || (names.includes("横倉空港") ? "WK" : "KK");
    }
    return cls;
}

const ISO_DOME_PAIRS = new Set([["技輪ゲート前", "技輪スタジアム"], ["技輪スタジアム", "技輪映画館"],
    ["技輪映画館", "技輪博物館前"], ["技輪博物館前", "技輪ドーム"]].map(([a, b]) => pairKey(a, b)));
const ISO_KYOTEN_PAIRS = new Set([["本小岩", "朝日ヶ丘"], ["朝日ヶ丘", "新白根"], ["新白根", "松川橋"],
    ["松川橋", "山中"], ["山中", "有坂"], ["有坂", "砂界"], ["砂界", "適が丘"], ["適が丘", "第一拠点"],
    ["第一拠点", "所川"], ["所川", "横倉"], ["横倉", "いすみ中央"], ["いすみ中央", "山並"],
    ["山並", "三澤"], ["三澤", "鎌中"], ["第一拠点", "葉山"], ["葉山", "月奈"], ["月奈", "河合"]]
    .map(([a, b]) => pairKey(a, b)));

// 磯急データセットのレグを駅間ごとに 磯電線/技輪ドーム線/拠点小岩ライン へ分類する
function isoSegClass(leg) {
    const names = leg.train.stops.map(x => x.station);
    const fi = names.indexOf(leg.from), ti = names.indexOf(leg.to);
    if (fi === -1 || ti === -1 || fi >= ti) return [];
    const cls = [];
    for (let i = fi; i < ti; i++) {
        const k = pairKey(names[i], names[i + 1]);
        if (ISO_DOME_PAIRS.has(k)) cls.push("GD");
        else if (ISO_KYOTEN_PAIRS.has(k)) cls.push("TK-K");
        else cls.push("TK-I");
    }
    return cls;
}

function legLineCode(leg) {
    if (leg.train.line === "磯電線・技輪ドーム線・拠点小岩ライン") {
        const cls = isoSegClass(leg);
        return cls.length && cls[0] === "GD" ? "GD" : "TK";
    }
    if (leg.train.line === "河津高速線・拠点高速線") {
        const cls = kawazuSegClass(leg);
        return cls.length ? cls[0] : "WK";
    }
    if (leg.train.line === "黒崎小岩ライン") {
        // 新赤倉〜有坂は横倉電鉄赤倉都市線（コードAT）
        const table = kmData["黒崎小岩ライン"];
        if (table && table[leg.from] !== undefined && table[leg.to] !== undefined &&
            table["有坂"] !== undefined &&
            Math.max(table[leg.from], table[leg.to]) <= table["有坂"]) {
            return "AT";
        }
    }
    if (leg.train.line === "小岩線・小阪線") {
        // 小阪線の枝（横電小岩〜和阪）にかかる区間はKS、それ以外はKW
        const pairConf = FORMAL_SEGMENT_PAIRS["小岩線・小阪線"];
        const names = leg.train.stops.map(x => x.station);
        const fi = names.indexOf(leg.from), ti = names.indexOf(leg.to);
        if (pairConf && fi !== -1 && ti !== -1 && fi < ti) {
            for (let i = fi; i < ti; i++) {
                const a = names[i], b = names[i + 1];
                if (pairConf.pairs.some(pr =>
                    (pr[0] === a && pr[1] === b) || (pr[0] === b && pr[1] === a))) {
                    return "KS";
                }
            }
        }
        return "KW";
    }
    if (leg.train.line === "水上線・西田線") {
        const table = kmData["水上線・西田線"];
        if (table && table[leg.from] !== undefined && table["東出"] !== undefined) {
            return table[leg.from] >= table["東出"] ? "IN" : "MZ";
        }
    }
    return leg.train.lineCode;
}

// 乗車区間が跨ぐ正式路線名を進行方向順に返す。複数なら末尾に「直通」を付ける。
function legLineLabel(leg) {
    if (leg.train.line === "磯電線・技輪ドーム線・拠点小岩ライン") {
        const cls = isoSegClass(leg);
        const names = [];
        for (const c of cls) {
            const n = c === "GD" ? "技輪ドーム線" : c === "TK-K" ? "拠点小岩ライン" : "磯電線";
            if (names[names.length - 1] !== n) names.push(n);
        }
        const uniq = [...new Set(names)];
        if (uniq.length === 0) return leg.train.line;
        return uniq.length === 1 ? uniq[0] : uniq.join("・") + " 直通";
    }
    if (leg.train.line === "河津高速線・拠点高速線") {
        const cls = kawazuSegClass(leg);
        const names = [];
        for (const c of cls) {
            const n = c === "WK" ? "河津高速線" : "拠点高速線";
            if (names[names.length - 1] !== n) names.push(n);
        }
        const uniq = [...new Set(names)];
        if (uniq.length === 0) return leg.train.line;
        return uniq.length === 1 ? uniq[0] : uniq.join("・") + " 直通";
    }
    const pairConf = FORMAL_SEGMENT_PAIRS[leg.train.line];
    if (pairConf) {
        const names = leg.train.stops.map(s => s.station);
        const fi = names.indexOf(leg.from), ti = names.indexOf(leg.to);
        if (fi !== -1 && ti !== -1 && fi < ti) {
            const seq = [];
            for (let i = fi; i < ti; i++) {
                const a = names[i], b = names[i + 1];
                const isSpecial = pairConf.pairs.some(p =>
                    (p[0] === a && p[1] === b) || (p[0] === b && p[1] === a));
                const ln = isSpecial ? pairConf.specialLine : pairConf.defaultLine;
                if (seq[seq.length - 1] !== ln) seq.push(ln);
            }
            const uniq = [...new Set(seq)];
            if (uniq.length === 0) return leg.train.line;
            return uniq.length === 1 ? uniq[0] : uniq.join("・") + " 直通";
        }
        return leg.train.line;
    }
    const segments = FORMAL_SEGMENTS[leg.train.line];
    if (!segments) return leg.train.line;
    const table = kmData[leg.train.line];
    if (!table) return leg.train.line;
    const a = table[leg.from], b = table[leg.to];
    if (a === undefined || b === undefined) return leg.train.line;
    const lo = Math.min(a, b), hi = Math.max(a, b);
    const hit = segments.filter(s => {
        const sFrom = table[s.fromStation], sTo = table[s.toStation];
        if (sFrom === undefined || sTo === undefined) return false;
        return hi > Math.min(sFrom, sTo) && lo < Math.max(sFrom, sTo);
    });
    if (hit.length === 0) return leg.train.line;
    if (a > b) hit.reverse();
    // 同じ路線名が区間を挟んで再び現れる場合（朝日線→小出線→朝日線）は重複を除く
    const names = [...new Set(hit.map(s => s.name))];
    return names.length === 1 ? names[0] : names.join("・") + " 直通";
}

function tierRowStrict(table, km){

    for(const row of table){

        if(km<=row[0]){
            return row;
        }

    }

    return null;

}

// 1区間分の特急料金など（高速線は legExpress が担当）
function legLimited(leg){

    const train = leg.train;

    if(HIGH_SPEED_LINES.includes(train.line)){
        return null;
    }

    const km =
        legDistanceKm(leg);

    if(km===null || km<=0){
        return null;
    }

    const out = {

        km:km,

        unreserved:null,

        reserved:null,

        unreservedMissing:false,

        noble:null,

        ordinaryNoble:null,

        liner:0,

        specialNote:null

    };

    if(LINER_NAMES.includes(train.name)){

        out.liner = LINER_FARE;

    }

    if(LIMITED_EXPRESS_TYPES.includes(train.type)){

        const u =
            tierRowStrict(LIMITED_UNRESERVED_TABLE, km);

        const r =
            tierRowStrict(LIMITED_RESERVED_TABLE, km);

        out.unreserved =
            u ? u[1] : null;

        out.reserved =
            r ? r[1] : null;

        if(out.unreserved===null && out.reserved!==null){

            out.unreservedMissing = true;

        }

        const n =
            tierRowStrict(LIMITED_NOBLE_TABLE, km);

        out.noble =
            n ? n[1] : null;

    }

    if(
        train.line==="黒崎小岩ライン" &&
        ORDINARY_NOBLE_TYPES.includes(train.type)
    ){

        const n =
            tierRowStrict(ORDINARY_NOBLE_TABLE, km);

        out.ordinaryNoble =
            n ? n[1] : null;

    }

    if(SPECIAL_TRAIN_NOTES[train.name]){

        out.specialNote =
            SPECIAL_TRAIN_NOTES[train.name];

    }

    if(
        out.unreserved===null &&
        out.reserved===null &&
        out.liner===0 &&
        out.noble===null &&
        out.ordinaryNoble===null &&
        out.specialNote===null
    ){
        return null;
    }

    return out;

}

// ループ・分岐のある路線は km の単純な差では実経路の距離にならないため、
// 列車が実際にたどる停車順に沿って駅間の所要時間（＝km）を合計する。
// 朝日線・小出線：小出を2回通る線形で、幹（東秋津〜小出）と枝（新長井〜小出）が
// km 上で重なってしまう（例：横川と長井が同じ40kmになり距離0と計算されていた）。
const PATH_DISTANCE_LINES = ["朝日線・小出線", "浜田本線", "都心環状線", "吹雪環状線", "小岩線・小阪線", "河津高速線・拠点高速線", "磯電線・技輪ドーム線・拠点小岩ライン"];

// 河津高速線・拠点高速線の区間距離（km）。並行在来線がある区間はその距離、
// 無い区間は表定速度275km/hと最速所要時間からの推定（悠征の指示で並行在来線方式）。
const PATH_SEGMENT_KM = {
    "河津高速線・拠点高速線": {
        "東京|品川": 32, "品川|羽田空港": 28, "羽田空港|新赤倉": 165,
        "新赤倉|赤倉市": 14, "赤倉市|第一拠点": 15,
        "第一拠点|河合": 39, "第一拠点|横倉": 19, "横倉|横倉空港": 14,
        "横倉空港|山下": 21, "山下|大井山": 18, "大井山|秋津": 25,
        "秋津|東秋津": 8, "横倉|三澤": 19, "三澤|鎌中": 13
    }
};
let segmentMinutesCache = null;

function timeToMin(t) {
    const m = /^(\d{1,2}):(\d{2})$/.exec(t || "");
    return m ? (+m[1]) * 60 + (+m[2]) : null;
}

function buildSegmentMinutes() {
    segmentMinutesCache = {};
    for (const train of trains) {
        if (!PATH_DISTANCE_LINES.includes(train.line)) continue;
        const stops = train.stops;
        for (let i = 0; i < stops.length - 1; i++) {
            const a = stops[i], b = stops[i + 1];
            if (a.station === b.station) continue;
            const ta = timeToMin(a.time || a.departure);
            const tb = timeToMin(b.time || b.departure);
            if (ta === null || tb === null) continue;
            const d = Math.abs(tb - ta);
            if (d === 0) continue;
            const key = train.line + "|" + a.station + "|" + b.station;
            const rkey = train.line + "|" + b.station + "|" + a.station;
            if (segmentMinutesCache[key] === undefined || d < segmentMinutesCache[key]) {
                segmentMinutesCache[key] = d;
                segmentMinutesCache[rkey] = d;
            }
        }
    }
}

function legDistanceKm(leg) {
    if (PATH_DISTANCE_LINES.includes(leg.train.line)) {
        if (!segmentMinutesCache) buildSegmentMinutes();
        const stops = leg.train.stops;
        const stopTime = s => s.time || s.departure;
        let fi = -1, ti = -1;
        for (let i = 0; i < stops.length; i++) {
            if (fi === -1 && stops[i].station === leg.from && stopTime(stops[i]) === leg.depart) {
                fi = i;
            } else if (fi !== -1 && stops[i].station === leg.to && stopTime(stops[i]) === leg.arrive) {
                ti = i;
                break;
            }
        }
        if (fi !== -1 && ti !== -1) {
            let km = 0;
            for (let i = fi; i < ti; i++) {
                const a = stops[i], b = stops[i + 1];
                if (a.station === b.station) continue;
                // 経由なし（||）に触れる区間は列車が実際に通らないので加算しない。
                // 通過（ﾚ）は時刻が無くても列車は通るので、駅間の最速所要時間（＝km）を加算する
                // （以前は ﾚ 区間も丸ごと加算されず、特急の距離が大幅に短く計算されていた）
                if (stopTime(a) === "||" || stopTime(b) === "||") continue;
                const kmMap = PATH_SEGMENT_KM[leg.train.line];
                if (kmMap) {
                    const kv = kmMap[a.station + "|" + b.station] ??
                        kmMap[b.station + "|" + a.station];
                    if (kv !== undefined) { km += kv; continue; }
                }
                const seg = segmentMinutesCache[leg.train.line + "|" + a.station + "|" + b.station];
                if (seg !== undefined) { km += seg; continue; }
                const ta = timeToMin(stopTime(a)), tb = timeToMin(stopTime(b));
                if (ta !== null && tb !== null) km += Math.abs(tb - ta);
            }
            return km;
        }
    }
    return getDistanceKm(leg.train.line, leg.from, leg.to);
}

// 全区間の料金サマリー
function fareSummary(legs){

    let totalKm = 0;

    const companyKm = {};

    for(const leg of legs){

        const d =
            legDistanceKm(leg);

        if(d===null){
            return null;
        }

        totalKm += d;

        const parts =
            legCompanyKm(leg);

        if(!parts){
            return null;
        }

        for(const part of parts){

            companyKm[part.company] =
                (companyKm[part.company] || 0) + part.km;

        }

    }

    const fareBreakdown =
        companyFares(companyKm);

    if(!fareBreakdown){
        return null;
    }

    const fare =
        fareBreakdown.reduce((acc, b) => acc + b.fare, 0);

    let expressUnreserved = 0;
    let expressReserved = 0;
    let hasExpress = false;

    let limitedUnreserved = 0;
    let limitedReserved = 0;
    let hasLimited = false;
    let limitedPartial = false;
    let linerFee = 0;

    legs.forEach((leg, i)=>{

        const ex =
            legExpress(leg);

        if(ex){

            hasExpress = true;

            expressUnreserved +=
                ex.unreserved;

            expressReserved +=
                ex.reserved;

        }

        const li =
            legLimited(leg);

        if(li){

            if(li.reserved!==null){

                hasLimited = true;

                limitedReserved +=
                    li.reserved;

            }

            if(li.unreserved!==null){

                limitedUnreserved +=
                    li.unreserved;

            }
            else if(li.reserved!==null){

                // 自由席の設定がない区間は指定席料金で計算
                limitedUnreserved +=
                    li.reserved;

                limitedPartial = true;

            }

            // 直通列車の続きの区間は同じ列車の1回の乗車なので、ライナー料金を重ねて数えない
            if(i>0 && isThroughPair(legs[i - 1], leg)){

            }
            else{

                linerFee +=
                    li.liner;

            }

        }

    });

    return {

        totalKm:totalKm,

        fare:fare,

        icFare:fareBreakdown.reduce((acc, b) => acc + b.icFare, 0),

        fareBreakdown:fareBreakdown,

        hasExpress:hasExpress,

        expressUnreserved:expressUnreserved,

        expressReserved:expressReserved,

        hasLimited:hasLimited,

        limitedUnreserved:limitedUnreserved,

        limitedReserved:limitedReserved,

        limitedPartial:limitedPartial,

        linerFee:linerFee

    };

}

function formatDuration(minutes){

    if(minutes>=60){

        return Math.floor(minutes / 60) +
            "時間" +
            (minutes % 60) +
            "分";

    }

    return minutes + "分";

}

function trainLabel(train){

    if(train.name){

        if(train.name.startsWith(train.type)){
            return train.name;
        }

        return train.type + " " + train.name;

    }

    return train.type;

}

// =====================
// 同名の別駅
// =====================

// 同じ駅名でも別の駅として扱う駅と、同じ駅になる路線のグループ。
// 上田は黒崎小岩ライン・吉田線ではそれぞれ別の駅だが、
// 今宮本線と大川線の上田は同じ駅（2026-11-17 悠征確認）。
// 乗り換えは同じグループの路線同士でのみ可能。
const SPLIT_STATION_GROUPS = {
    "上田": [["黒崎小岩ライン"], ["今宮本線", "大川線"], ["吉田線"], ["浜田本線"]],
    "高田": [["松代線"], ["吉田線"]],
    "石川": [["吉田線"], ["水上線・西田線"]],
    "西吉田": [["大川線"], ["水上線・西田線"]],
    "小島": [["朝日線・小出線"], ["水上線・西田線"]],
    "飯田": [["中央線"], ["中央高速線"], ["浜田本線"]],
    "亀山": [["今宮本線"], ["新沢線"]],
    "中野": [["水上線・西田線"], ["吹雪環状線"]],
    "川内": [["中央線"], ["扶桑本線", "浜田本線"]],
    "倉田": [["中央線"], ["小岩線・小阪線"]],
    "小川町": [["中央線"], ["拠点本線"]],
    "森山": [["水上線・西田線"], ["横倉空港線（横倉）"]],
    "森田": [["水上線・西田線"], ["浜田本線"]],
    "多田": [["今宮本線"], ["浜田本線"]],
    "村山": [["今宮本線"], ["浜田本線"]],
    "塩浜": [["秋川本線"], ["浜田本線", "浜見線"]],
    "田崎": [["青山線"], ["扶桑本線"]],
    "羽島": [["今宮本線"], ["吹雪環状線"]],
    "上原": [["北倉線"], ["扶桑本線", "浜田本線"]],
    "山下": [["北倉線"], ["河津高速線・拠点高速線", "赤津線"]],
    "新川": [["多田本線"], ["吹雪環状線"]],
    "田中": [["河田線"], ["赤津線"]],
    "関原": [["中央線"], ["今宮本線"]]
};

const SPLIT_STATIONS =
    new Set(Object.keys(SPLIT_STATION_GROUPS));

function canTransferAt(station, lineA, lineB){

    if(lineA===lineB){
        return true;
    }

    const groups =
        SPLIT_STATION_GROUPS[station];

    if(!groups){
        return true;
    }

    return groups.some(
        group=>
            group.includes(lineA) &&
            group.includes(lineB)
    );

}

// =====================
// 直通列車の対応付け
// =====================

// 路線をまたいで運行される同一列車（直通列車）の対応付け。
// 判定ルール：(1) 名前付き列車は、同名で同じ駅に接続し、時刻差が最小（30分以内）で一意な相手
//             (2) 今宮本線⇔黒崎小岩ラインの普通同士は、今宮で同時刻に接続するものだけ
//             （それ以外の普通・各停は別列車として扱う）
let throughNextKey = null;
let throughPrevKey = null;

function throughTrainKey(train){

    const evs =
        train.stops.filter(s=>isValidTime(s.time));

    if(evs.length<2){
        return null;
    }

    return train.line + "|" + (train.id || "") + "|" + train.direction + "|" + evs[0].time;

}

function ensureThroughMaps(){

    if(throughNextKey){
        return;
    }

    throughNextKey = new Map();
    throughPrevKey = new Map();

    const items = [];

    for(const train of trains){

        const evs =
            train.stops.filter(s=>isValidTime(s.time));

        if(evs.length<2){
            continue;
        }

        if(train.line==="和阪線" && train.name==="天空"){
            continue;
        }

        items.push({
            train:train,
            key:throughTrainKey(train),
            fs:evs[0].station,
            fm:timeToMinutes(evs[0].time),
            ls:evs[evs.length - 1].station,
            lm:timeToMinutes(evs[evs.length - 1].time)
        });

    }

    const byFirst = new Map();

    for(const it of items){

        const k = it.fs + "|" + it.fm;

        if(!byFirst.has(k)){
            byFirst.set(k, []);
        }

        byFirst.get(k).push(it);

    }

    const link = (a,b)=>{
        throughNextKey.set(a.key, b.key);
        throughPrevKey.set(b.key, a.key);
    };

    for(const a of items){

        const nm = a.train.name;

        if(!nm || throughNextKey.has(a.key)){
            continue;
        }

        let best = [];

        const maxGap = nm==="天空" ? 90 : 30;

        for(let gap=0; gap<=maxGap; gap++){

            const cs =
                (byFirst.get(a.ls + "|" + ((a.lm + gap) % 1440)) || [])
                    .filter(b=>b.train.line!==a.train.line && b.train.name===nm && !throughPrevKey.has(b.key));

            if(cs.length){
                best = cs;
                break;
            }

        }

        if(best.length===1){
            link(a, best[0]);
        }

    }

    for(const a of items){

        if(a.train.name || a.ls!=="今宮" || a.train.type!=="普通" || throughNextKey.has(a.key)){
            continue;
        }

        if(a.train.line!=="今宮本線" && a.train.line!=="黒崎小岩ライン"){
            continue;
        }

        const other =
            a.train.line==="今宮本線" ? "黒崎小岩ライン" : "今宮本線";

        const cs =
            (byFirst.get("今宮|" + a.lm) || [])
                .filter(b=>b.train.line===other && !b.train.name && b.train.type==="普通" && !throughPrevKey.has(b.key));

        if(cs.length===1){
            link(a, cs[0]);
        }

    }

    window.IMAKYU_THROUGH = { next: throughNextKey, prev: throughPrevKey };

}

// 2つの区間が直通列車の続き同士かどうか
function isThroughPair(legA, legB){

    ensureThroughMaps();

    if(legA.to!==legB.from){
        return false;
    }

    const ka = throughTrainKey(legA.train);
    const kb = throughTrainKey(legB.train);

    if(!ka || !kb){
        return false;
    }

    return throughNextKey.get(ka)===kb;

}

// 表示用に直通区間を1区間にまとめる（料金計算は元の区間のまま）
function mergeDisplayLegs(legs){

    const out = [];

    for(const leg of legs){

        const prev = out[out.length - 1];

        if(prev && prev.merged && isThroughPair(prev.parts[prev.parts.length - 1], leg)){

            prev.parts.push(leg);
            prev.to = leg.to;
            prev.arrive = leg.arrive;

        }
        else if(prev && isThroughPair(prev, leg)){

            out[out.length - 1] = {
                merged:true,
                parts:[prev, leg],
                train:prev.train,
                from:prev.from,
                depart:prev.depart,
                via:prev.to,
                viaArrive:prev.arrive,
                to:leg.to,
                arrive:leg.arrive
            };

        }
        else{

            out.push(leg);

        }

    }

    return out;

}

// オートコンプリートで選択された駅（同名駅の判別用）
let selectedStations = { from: null, to: null };

function selectedLines(key, name){

    const sel = selectedStations[key];

    if(sel && sel.name===name){
        return sel.lines;
    }

    return null;

}

// =====================
// 直通列車検索
// =====================

// 停車駅の位置を探す。経由なし（||）のグリッド行に同名駅があっても、
// 実際に時刻のある停車位置を返す（黒崎小岩ラインの自作データは運行区間外の駅も
// グリッドとして含むため、単純な indexOf では区間外の行を拾ってしまう）
function stopIndexOf(train, station, afterIndex = -1){

    for(let i=afterIndex + 1; i<train.stops.length; i++){

        if(
            train.stops[i].station===station &&
            isValidTime(train.stops[i].time)
        ){
            return i;
        }

    }

    return -1;

}

function findDirectTrains(
    from,
    to,
    departTime,
    fromLines,
    toLines
){

    const results = [];

    trains.forEach(train=>{

        if(fromLines && !fromLines.includes(train.line)){
            return;
        }

        if(toLines && !toLines.includes(train.line)){
            return;
        }

        let fromIndex =
            stopIndexOf(train, from);

        if(fromIndex===-1){
            return;
        }

        // 途中駅では「着→発」の2エントリがあり、stopIndexOfは着に当たる。
        // そのままでは kind チェックで弾かれて途中駅から直通列車に乗れないため、
        // 同じ駅の「発」エントリに進める（2026-11-18 修正）。
        if(
            train.stops[fromIndex].kind==="着" &&
            train.stops[fromIndex + 1] &&
            train.stops[fromIndex + 1].station===from &&
            train.stops[fromIndex + 1].kind==="発" &&
            isValidTime(train.stops[fromIndex + 1].time)
        ){
            fromIndex++;
        }

        const toIndex =
            stopIndexOf(train, to, fromIndex);

        if(
            toIndex===-1 ||
            fromIndex>=toIndex
        ){
            return;
        }

        const fromStop =
            train.stops[fromIndex];
            if(
    departTime &&
    fromStop.time < departTime
){
    return;
}

        const toStop =
            train.stops[toIndex];

        if(
            fromStop.kind!=="発"
        ){
            return;
        }

        if(
            toStop.kind!=="着" &&
            toStop.kind!=="発"
        ){
            return;
        }

        if(
            !isValidTime(fromStop.time) ||
            !isValidTime(toStop.time)
        ){
            return;
        }

        results.push({

            train:train,

            fromIndex:fromIndex,

            toIndex:toIndex,

            depart:fromStop.time,

            arrive:toStop.time

        });

    });

    // 発車時刻順に並び替え
    results.sort((a,b)=>

        timeToMinutes(a.depart) -
        timeToMinutes(b.depart)

    );

    return results;

}

function getTransferStations(train){

    const stations = [];

    train.stops.forEach(stop=>{

        if(
            stop.kind==="発" ||
            stop.kind==="着"
        ){

            stations.push(stop.station);

        }

    });

    return stations;

}

// =====================
// 行先取得
// =====================

function getDestination(train){

    // 実際に時刻がある最後の駅が終着駅。
    // 運行区間外の駅は時刻が「||」、通過駅は「ﾚ」なので、
    // 時刻を見ずに最後の駅を拾うと路線の端の駅になってしまう
    // （今宮本線で全部「赤倉港行／西秋川行」になる問題。2026-11-17 悠征指摘）
    for(let i = train.stops.length - 1; i >= 0; i--){

        const stop = train.stops[i];

        if(isValidTime(stop.time)){
            return stop.station;
        }

    }

    // 時刻が1つも無い列車（回送など）は従来通り最後の駅
    for(let i = train.stops.length - 1; i >= 0; i--){

        const stop = train.stops[i];

        if(
            stop.kind === "着" ||
            stop.kind === "発"
        ){
            return stop.station;
        }

    }

    return "";

}

// =====================
// 検索ボタン
// =====================

function searchTrain(){

    const from =
        document.getElementById("from").value;

    const to =
        document.getElementById("to").value;

    const departTime =
        document.getElementById("departTime").value;

    if(from==="" || to===""){

        alert("出発駅・到着駅を入力してください。");

        return;

    }

    // 同名の別駅（上田など）は、候補から選ばれた路線で判別する
    const fromLines =
        selectedLines("from", from);

    const toLines =
        selectedLines("to", to);

    if(from===to){

        // 別の路線の同名駅同士なら、同じ名前でも検索できる
        const distinctSplit =
            SPLIT_STATIONS.has(from) &&
            fromLines && toLines &&
            fromLines.join("")!==toLines.join("");

        if(!distinctSplit){

            alert("出発駅と到着駅が同じです。");

            return;

        }

    }

    let results;

    if(departTime){

        // 時刻指定時は実際の乗換案内と同じ出し方にする：
        // 直通・乗換を区別せず、指定時刻以降の発車順に並べて表示する
        let merged =
            findDirectTrains(
                from,
                to,
                departTime,
                fromLines,
                toLines
            );

        const transfers1 =
            findTransferTrains(
                from,
                to,
                departTime,
                undefined,
                fromLines,
                toLines
            );

        merged =
            merged.concat(transfers1);

        // 乗換候補が無ければ、接続待ちの上限を広げて探す
        if(transfers1.length===0){

            merged =
                merged.concat(
                    findTransferTrains(
                        from,
                        to,
                        departTime,
                        240,
                        fromLines,
                        toLines
                    )
                );

        }

        // 候補が少ないときは乗換2回も混ぜる
        if(merged.length<5){

            merged =
                merged.concat(
                    findTransfer2Trains(
                        from,
                        to,
                        departTime,
                        fromLines,
                        toLines
                    )
                );

        }

        merged =
            merged.concat(
                findChainRoutes(from, to, departTime, fromLines, toLines)
            );

        results =
            mergeRoutesForDisplay(merged);

    }
    else{

        results =
            findDirectTrains(
                from,
                to,
                departTime,
                fromLines,
                toLines
            );

        if(results.length===0){

            results =
                findTransferTrains(
                    from,
                    to,
                    departTime,
                    undefined,
                    fromLines,
                    toLines
                );

        }

        // 接続待ちが長い路線向けに、待ち時間の上限を広げて再検索
        if(results.length===0){

            results =
                findTransferTrains(
                    from,
                    to,
                    departTime,
                    240,
                    fromLines,
                    toLines
                );

        }

        // それでも無ければ乗換2回まで探す
        if(results.length===0){

            results =
                findTransfer2Trains(
                    from,
                    to,
                    departTime,
                    fromLines,
                    toLines
                );

        }

    }

    if(results.length===0){

        results =
            findChainRoutes(from, to, departTime, fromLines, toLines);

    }

    const totalCount =
        results.length;

    displayResults(
        results.slice(0,5),
        totalCount
    );

}
// 直通チェーンが4区間以上ある経路（天空など）は通常の乗換探索（2回まで）では
// 見つからないため、チェーンを丸ごとたどって経路を組み立てる。
function findChainRoutes(from, to, departTime, fromLines, toLines){

    ensureThroughMaps();

    const byKey = new Map();

    for(const t of trains){
        byKey.set(throughTrainKey(t), t);
    }

    const routes = [];

    for(const head of trains){

        const headKey = throughTrainKey(head);

        if(!throughNextKey.has(headKey) || throughPrevKey.has(headKey)){
            continue;
        }

        const frags = [head];

        let cur = head;

        while(throughNextKey.has(throughTrainKey(cur))){

            cur = byKey.get(throughNextKey.get(throughTrainKey(cur)));

            if(!cur){
                break;
            }

            frags.push(cur);

        }

        if(frags.length<2){
            continue;
        }

        if(fromLines && !fromLines.includes(frags[0].line)){
            continue;
        }

        // 乗車できるフラグメントと降車できるフラグメントを探す
        let fi = -1, fj = -1;

        for(let a=0; a<frags.length; a++){

            const evsA =
                frags[a].stops.filter(x=>x.station===from && isValidTime(x.time));

            if(!evsA.some(x=>x.kind==="発")){
                continue;
            }

            for(let b=a; b<frags.length; b++){

                const evsB =
                    frags[b].stops.filter(x=>x.station===to && isValidTime(x.time));

                if(evsB.length){
                    fi = a;
                    fj = b;
                    break;
                }

            }

            if(fi!==-1){
                break;
            }

        }

        if(fi===-1 || fj===-1){
            continue;
        }

        if(toLines && !toLines.includes(frags[fj].line)){
            continue;
        }

        const legs = [];

        let ok = true;

        for(let f=fi; f<=fj; f++){

            const frag = frags[f];

            const evs =
                frag.stops.filter(x=>isValidTime(x.time));

            const legFrom =
                f===fi ? from : evs[0].station;

            const legTo =
                f===fj ? to : evs[evs.length - 1].station;

            const depEv =
                frag.stops.filter(x=>x.station===legFrom && x.kind==="発" && isValidTime(x.time))[0];

            const arrEvs =
                frag.stops.filter(x=>x.station===legTo && isValidTime(x.time));

            const arrEv =
                arrEvs.filter(x=>x.kind==="着")[0] || arrEvs[0];

            if(!depEv || !arrEv){
                ok = false;
                break;
            }

            legs.push({
                train:frag,
                from:legFrom,
                to:legTo,
                depart:depEv.time,
                arrive:arrEv.time
            });

        }

        if(!ok || legs.length<2){
            continue;
        }

        if(departTime && legs[0].depart < departTime){
            continue;
        }

        routes.push({legs:legs});

    }

    return routes;

}

// 直通・乗換の候補をまとめて、実際の乗換案内の並びにする。
// 同じ最初の列車・同じ発車時刻の候補は「最も早く着く経路」だけを残し、
// 全体を発車時刻順（同点は到着時刻順・乗換回数が少ない順）に並べる。
function mergeRoutesForDisplay(candidates){

    const bestByFirstTrain =
        new Map();

    for(const result of candidates){

        const legs =
            resultLegs(result);

        const first =
            legs[0];

        const last =
            legs[legs.length - 1];

        // 直通列車の続き同士の区間がある経路は、同じ始発列車でも乗り換え経路とは別枠で残す
        // （到着が早い乗り換え経路だけを残すと、直通経路が消えてしまうため）
        let throughCount = 0;

        for(let i=1; i<legs.length; i++){

            if(isThroughPair(legs[i - 1], legs[i])){
                throughCount++;
            }

        }

        const key =
            (first.train.id || first.train.name || "") +
            "|" + first.depart +
            "|th" + throughCount;

        const arriveMin =
            timeToMinutes(last.arrive);

        const existing =
            bestByFirstTrain.get(key);

        if(
            !existing ||
            arriveMin < existing.arriveMin ||
            (
                arriveMin===existing.arriveMin &&
                legs.length < existing.legs.length
            )
        ){

            bestByFirstTrain.set(key, {
                result:result,
                legs:legs,
                arriveMin:arriveMin,
                departMin:timeToMinutes(first.depart)
            });

        }

    }

    const merged =
        [...bestByFirstTrain.values()];

    merged.sort((a,b)=>

        a.departMin - b.departMin ||
        a.arriveMin - b.arriveMin ||
        a.legs.length - b.legs.length

    );

    return merged.map(m=>m.result);

}

function resultLegs(result){

    if(result.legs){
        return result.legs;
    }

    if(result.transfer){
        return [result.first, result.second];
    }

    return [
        {
            train:result.train,
            from:result.train.stops[result.fromIndex].station,
            to:result.train.stops[result.toIndex].station,
            depart:result.depart,
            arrive:result.arrive
        }
    ];

}

function createRouteCard(result){

    const legs =
        resultLegs(result);

    const depart =
        legs[0].depart;

    const arrive =
        legs[legs.length - 1].arrive;

    const summary =
        fareSummary(legs);

    // ---- 料金表示 ----
    let fareHtml = "";

    if(summary===null){

        fareHtml =
            `<div class="rc-fare-detail">💴 運賃は表示できません</div>`;

    }
    else if(!summary.hasExpress && !summary.hasLimited && summary.linerFee===0){

        fareHtml =
            `<div class="rc-fare-main">` +
                `<span class="rc-fare-label">運賃</span>` +
                `<span class="rc-fare-value">${summary.fare.toLocaleString()}円</span>` +
            `</div>` +
            `<div class="rc-fare-detail">ICなら ${summary.icFare.toLocaleString()}円</div>` +
            (summary.fareBreakdown && summary.fareBreakdown.length > 1
                ? `<div class="rc-fare-detail">運賃内訳 ${summary.fareBreakdown.map(b => `${b.company} ${b.fare.toLocaleString()}円`).join("＋")}</div>`
                : "");

    }
    else{

        const totalUnreserved =
            summary.fare +
            summary.expressUnreserved +
            summary.limitedUnreserved +
            summary.linerFee;

        const totalReserved =
            summary.fare +
            summary.expressReserved +
            summary.limitedReserved +
            summary.linerFee;

        let detail =
            `運賃 ${summary.fare.toLocaleString()}円（IC ${summary.icFare.toLocaleString()}円）`;

        if(summary.fareBreakdown && summary.fareBreakdown.length > 1){

            detail +=
                `<br>運賃内訳 ${summary.fareBreakdown.map(b => `${b.company} ${b.fare.toLocaleString()}円`).join("＋")}`;

        }

        if(summary.hasExpress){

            detail +=
                `<br>高速線料金 自由席 ${summary.expressUnreserved.toLocaleString()}円／指定席 ${summary.expressReserved.toLocaleString()}円`;

        }

        if(summary.hasLimited){

            detail +=
                `<br>特急料金 自由席 ${summary.limitedUnreserved.toLocaleString()}円／指定席 ${summary.limitedReserved.toLocaleString()}円` +
                (summary.limitedPartial ? "（一部区間は自由席の設定なし）" : "");

        }

        if(summary.linerFee>0){

            detail +=
                `<br>ライナー料金 ${summary.linerFee.toLocaleString()}円`;

        }

        detail +=
            `<br>指定席の合計は ${totalReserved.toLocaleString()}円`;

        fareHtml =
            `<div class="rc-fare-main">` +
                `<span class="rc-fare-label">合計（自由席）</span>` +
                `<span class="rc-fare-value">${totalUnreserved.toLocaleString()}円</span>` +
            `</div>` +
            `<div class="rc-fare-detail">` +
                detail +
            `</div>`;

    }

    // ---- 区間表示 ----
    const dlegs =
        mergeDisplayLegs(legs);

    let legsHtml = "";

    dlegs.forEach((leg, index)=>{

        if(index>0){

            const wait =
                calcTime(
                    dlegs[index - 1].arrive,
                    leg.depart
                );

            legsHtml +=
                `<div class="rc-change">` +
                    `<span class="rc-change-icon">⇅</span>` +
                    `${leg.from}で乗換（待ち時間 ${wait}分）` +
                `</div>`;

        }

        const parts =
            leg.merged ? leg.parts : [leg];

        let expressHtml = "";

        const noteLines = [];

        for(const part of parts){

            const ex =
                legExpress(part);

            const li =
                legLimited(part);

            if(ex){

                noteLines.push(
                    `高速線料金 自由席 ${ex.unreserved.toLocaleString()}円・指定席 ${ex.reserved.toLocaleString()}円`
                );

                noteLines.push(
                    ex.celeste !== null
                        ? `ノーブルカー +${ex.noble.toLocaleString()}円／セレステクラス +${ex.celeste.toLocaleString()}円（ご利用の場合）`
                        : `グリーン車 +${ex.noble.toLocaleString()}円（ご利用の場合）`
                );

            }

            if(li){

                if(li.reserved!==null){

                    noteLines.push(
                        li.unreserved!==null
                            ? `特急料金 自由席 ${li.unreserved.toLocaleString()}円・指定席 ${li.reserved.toLocaleString()}円`
                            : `特急料金 指定席 ${li.reserved.toLocaleString()}円（自由席の設定なし）`
                    );

                }

                if(li.liner>0){

                    noteLines.push(
                        `ライナー料金 ${li.liner.toLocaleString()}円`
                    );

                }

                if(li.noble!==null){

                    noteLines.push(
                        `${GREEN_CAR_LINES.includes(part.train.line) ? "グリーン車" : "ノーブルカー"} +${li.noble.toLocaleString()}円（ご利用の場合）`
                    );

                }

                if(li.ordinaryNoble!==null){

                    noteLines.push(
                        `ノーブルカー +${li.ordinaryNoble.toLocaleString()}円（ご利用の場合）`
                    );

                }

                if(li.specialNote){

                    noteLines.push(
                        li.specialNote
                    );

                }

            }

        }

        // 同じ注記は重ねない
        const uniqNotes =
            [...new Set(noteLines)];

        if(leg.merged){

            uniqNotes.unshift(
                `${leg.via} ${leg.viaArrive}着・${parts[1].depart}発（${parts[1].train.line}へ直通・乗り換え不要）`
            );

        }

        if(uniqNotes.length>0){

            expressHtml =
                `<div class="rc-express">` +
                    uniqNotes.join("<br>") +
                `</div>`;

        }

        const badges =
            parts.map(p=>`<span class="rc-badge ${legLineCode(p)}">${legLineCode(p)}</span>`).join("");

        const lineLabels =
            [...new Set(parts.map(p=>legLineLabel(p)))];

        const lineLabel =
            lineLabels.join("・") + (leg.merged ? " 直通" : "");

        const destTrain =
            parts[parts.length - 1].train;

        let stopsHtml =
            `<div class="rc-stop">` +
                `<span class="rc-stop-time">${leg.depart}</span>` +
                `<span class="rc-dot"></span>` +
                `<span class="rc-stop-name">${leg.from}</span>` +
                `<span class="rc-stop-tag">発</span>` +
            `</div>`;

        if(leg.merged){

            stopsHtml +=
                `<div class="rc-stop">` +
                    `<span class="rc-stop-time">${parts[1].depart}</span>` +
                    `<span class="rc-dot"></span>` +
                    `<span class="rc-stop-name">${leg.via}</span>` +
                    `<span class="rc-stop-tag">直通</span>` +
                `</div>`;

        }

        stopsHtml +=
            `<div class="rc-stop">` +
                `<span class="rc-stop-time">${leg.arrive}</span>` +
                `<span class="rc-dot last"></span>` +
                `<span class="rc-stop-name">${leg.to}</span>` +
                `<span class="rc-stop-tag">着</span>` +
            `</div>`;

        legsHtml +=
            `<div class="rc-leg">` +

                `<div class="rc-leg-train">` +
                    badges +
                    `<span class="rc-leg-line">${lineLabel}</span>` +
                    `<span class="rc-leg-name">${trainLabel(leg.train)} ${destTrain.destination}行</span>` +
                `</div>` +

                `<div class="rc-stops">` +
                    stopsHtml +
                `</div>` +

                expressHtml +

            `</div>`;

    });

    const transferCount =
        dlegs.length - 1;

    return `
<div class="rc-head">

    <div class="rc-times">
        <span class="rc-time-big">${depart}</span>
        <span class="rc-arrow">→</span>
        <span class="rc-time-big">${arrive}</span>
    </div>

    <div class="rc-badges">
        <span class="rc-duration">${formatDuration(calcTime(depart, arrive))}</span>
        <span class="rc-transfer-badge">${transferCount===0 ? "直通" : "乗換" + transferCount + "回"}</span>
    </div>

</div>

<div class="rc-fares">
${fareHtml}
</div>

<div class="rc-legs">
${legsHtml}
</div>
`;

}

// =====================
// 時刻を分に変換
// =====================

function isValidTime(time){

    return /^\d{1,2}:\d{2}$/.test(time);

}

function timeToMinutes(time){

    const parts =
        time.split(":");

    return (
        Number(parts[0]) * 60 +
        Number(parts[1])
    );

}

// =====================
// 所要時間
// =====================

function calcTime(depart, arrive){

    const d = depart.split(":");
    const a = arrive.split(":");

    const dMin =
        Number(d[0]) * 60 +
        Number(d[1]);

    let aMin =
        Number(a[0]) * 60 +
        Number(a[1]);

    if(aMin < dMin){
        aMin += 1440;
    }

    return aMin - dMin;

}

// =====================
// 1回乗換検索
// =====================


// 第1列車の候補を路線ごとにサンプリングする。
// 駅全体で先頭n本だけだと、中央高速線のような本数の多い路線に埋もれて
// 吉田線の銀鳥（22:19発）のような長距離列車が候補から漏れるため（2026-11-19）。
function sampleFirstTrains(allFirstTrains, departTime, withTimeN, noTimeN){

    const byLine = new Map();

    for(const item of allFirstTrains){

        if(!byLine.has(item.train.line)){
            byLine.set(item.train.line, []);
        }

        byLine.get(item.train.line).push(item);

    }

    const out = [];

    for(const list of byLine.values()){

        if(departTime){

            out.push(...list.slice(0, withTimeN));

        }
        else if(list.length<=noTimeN){

            out.push(...list);

        }
        else{

            const step = list.length / noTimeN;

            for(let i=0;i<noTimeN;i++){
                out.push(list[Math.floor(i * step)]);
            }

        }

    }

    return out;

}

function findTransferTrains(from, to, departTime, maxWait, fromLines, toLines){

    if(maxWait===undefined){
        maxWait = 60;
    }

    const results = [];

    // 出発駅を発車する列車
    const rawFirstTrains =
        getDepartingTrains(from, departTime);

    // 同名の別駅が選ばれている場合、その路線の列車だけを対象にする
    const allFirstTrains =
        fromLines
            ? rawFirstTrains.filter(
                item=>fromLines.includes(item.train.line)
            )
            : rawFirstTrains;

    // 路線ごとにサンプリング（本数の多い路線に埋もれて長距離列車が漏れるのを防ぐ）
    const firstTrains =
        sampleFirstTrains(allFirstTrains, departTime, 15, 40);

    firstTrains.forEach(item=>{

        const firstTrain = item.train;

        const fromIndex =
            stopIndexOf(firstTrain, from);

        if(fromIndex===-1){
            return;
        }

        // 第一列車の途中駅を全部調べる
        for(let i=fromIndex+1;i<firstTrain.stops.length;i++){

            const transferStation =
                firstTrain.stops[i].station;

            const firstArrive =
                firstTrain.stops[i].time;

            if(!isValidTime(firstArrive)){
                continue;
            }

            // この駅から出る列車
            const secondTrains =
                getDepartingTrains(
                    transferStation,
                    firstArrive
                );

            secondTrains.forEach(item=>{

                const secondTrain =
                    item.train;

                // 同じ列車は除外
                if(secondTrain===firstTrain){
                    return;
                }

                // 同名の別駅（上田など）では、同じ駅の路線同士でしか乗り換えられない
                if(!canTransferAt(transferStation, firstTrain.line, secondTrain.line)){
                    return;
                }

                if(toLines && !toLines.includes(secondTrain.line)){
                    return;
                }

                const transferIndex =
                    stopIndexOf(
                        secondTrain,
                        transferStation
                    );

                const toIndex =
                    stopIndexOf(
                        secondTrain,
                        to,
                        transferIndex
                    );

                if(
                    transferIndex===-1 ||
                    toIndex===-1
                ){
                    return;
                }

                const secondDepart =
                    secondTrain.stops[
                        transferIndex
                    ].time;

                const secondArrive =
                    secondTrain.stops[
                        toIndex
                    ].time;

                if(
                    !isValidTime(secondDepart) ||
                    !isValidTime(secondArrive)
                ){
                    return;
                }

                // 乗換時間
                const wait =
                    calcTime(
                        firstArrive,
                        secondDepart
                    );

                // 0分～maxWait分だけ許可（直通列車が別ファイルに分かれる今宮駅などの接続を拾うため0分から許可）
                if(
                    wait<0 ||
                    wait>maxWait
                ){
                    return;
                }

                results.push({

    transfer:true,

    first:{
        train:firstTrain,
        from:from,
        to:transferStation,
        fromIndex:fromIndex,
        toIndex:i,
        depart:firstTrain.stops[fromIndex].time,
        arrive:firstArrive
    },

    second:{
        train:secondTrain,
        from:transferStation,
        to:to,
        fromIndex:transferIndex,
        toIndex:toIndex,
        depart:secondDepart,
        arrive:secondArrive
    },

    transferStation:transferStation

});

            });

        }

    });

    // 同じ列車の組み合わせの重複を除く
    const seen =
        new Set();

    const uniqueResults =
        results.filter(result=>{

            const key =
                result.first.train.id + "|" +
                result.transferStation + "|" +
                result.second.train.id;

            if(seen.has(key)){
                return false;
            }

            seen.add(key);

            return true;

        });

    // 所要時間順（同点なら出発時刻順）に並び替え
    uniqueResults.sort((a,b)=>{

        const timeDiff =

            calcTime(
                a.first.depart,
                a.second.arrive
            ) -

            calcTime(
                b.first.depart,
                b.second.arrive
            );

        if(timeDiff!==0){
            return timeDiff;
        }

        return (

            timeToMinutes(a.first.depart) -
            timeToMinutes(b.first.depart)

        );

    });

    return uniqueResults;


}

// =====================
// 駅から出発する列車取得
// =====================

function getDepartingTrains(station, departTime){

    const list =
        departureIndex[station] || [];

    // 時刻指定なし
    if(departTime===""){

        return list;

    }

    return list.filter(item=>

        item.depart >= departTime

    );

}

// =====================
// 2回乗換検索（待ち時間5～180分）
// 乗換駅は原則として複数路線が乗り入れる駅のみ。
// ただし2回目は、同一路線での列車乗換（特急から普通列車など）に限り単一路線の駅でも可
// =====================

function findTransfer2Trains(from, to, departTime, fromLines, toLines){

    // 乗換可能な駅（2路線以上が乗り入れる駅）
    const interchange =
        new Set(

            stationData
                .filter(station=>station.lines.length>=2)
                .map(station=>station.name)

        );

    // 直通列車の接続駅も乗換可能駅に含める（石津のように、貨物線経由の
    // 銀鳥が朝日線に接続する駅は路線数だけでは乗換駅にならないため。2026-11-19）
    ensureThroughMaps();

    for(const train of trains){

        const key =
            throughTrainKey(train);

        if(!key){
            continue;
        }

        const evs =
            train.stops.filter(st=>isValidTime(st.time));

        if(throughNextKey.has(key)){
            interchange.add(evs[evs.length - 1].station);
        }

        if(throughPrevKey.has(key)){
            interchange.add(evs[0].station);
        }

    }

    const MAX_WAIT = 180;

    const results = [];

    // 1本目の候補
    const rawFirstTrains =
        getDepartingTrains(from, departTime);

    const allFirstTrains =
        fromLines
            ? rawFirstTrains.filter(
                item=>fromLines.includes(item.train.line)
            )
            : rawFirstTrains;

    const firstTrains =
        sampleFirstTrains(allFirstTrains, departTime, 12, 24);

    // 指定時刻以降の接続候補（待ち時間で絞って先頭n本）
    function connections(station, arriveTime, limit){

        return getDepartingTrains(
            station,
            arriveTime
        ).filter(item=>{

            const wait =
                calcTime(
                    arriveTime,
                    item.depart
                );

            return wait>=0 && wait<=MAX_WAIT;

        }).slice(0, limit);

    }

    firstTrains.forEach(item=>{

        const firstTrain = item.train;

        const fromIndex =
            stopIndexOf(firstTrain, from);

        if(fromIndex===-1){
            return;
        }

        const firstDepart =
            firstTrain.stops[fromIndex].time;

        if(!isValidTime(firstDepart)){
            return;
        }

        for(let i=fromIndex+1;i<firstTrain.stops.length;i++){

            const s1 =
                firstTrain.stops[i].station;

            const firstArrive =
                firstTrain.stops[i].time;

            if(
                !interchange.has(s1) ||
                !isValidTime(firstArrive)
            ){
                continue;
            }

            connections(s1, firstArrive, 5).forEach(item2=>{

                const secondTrain = item2.train;

                if(secondTrain===firstTrain){
                    return;
                }

                if(!canTransferAt(s1, firstTrain.line, secondTrain.line)){
                    return;
                }

                const s1Index =
                    stopIndexOf(secondTrain, s1);

                if(s1Index===-1){
                    return;
                }

                const secondDepart =
                    secondTrain.stops[s1Index].time;

                if(!isValidTime(secondDepart)){
                    return;
                }

                for(let j=s1Index+1;j<secondTrain.stops.length;j++){

                    const s2 =
                        secondTrain.stops[j].station;

                    const secondArrive =
                        secondTrain.stops[j].time;

                    if(
                        s2===s1 ||
                        !isValidTime(secondArrive)
                    ){
                        continue;
                    }

                    // 乗換駅（複数路線が乗り入れる駅）では路線を変える乗換も可。
                    // それ以外の駅では、同一路線での列車乗換（特急→普通など）のみ可とする
                    const isInterchange =
                        interchange.has(s2);

                    connections(s2, secondArrive, 5).forEach(item3=>{

                        if(
                            !isInterchange &&
                            item3.train.line!==secondTrain.line
                        ){
                            return;
                        }

                        const thirdTrain = item3.train;

                        if(
                            thirdTrain===firstTrain ||
                            thirdTrain===secondTrain
                        ){
                            return;
                        }

                        if(toLines && !toLines.includes(thirdTrain.line)){
                            return;
                        }

                        if(!canTransferAt(s2, secondTrain.line, thirdTrain.line)){
                            return;
                        }

                        const s2Index =
                            stopIndexOf(thirdTrain, s2);

                        const toIndex =
                            stopIndexOf(thirdTrain, to, s2Index);

                        if(
                            s2Index===-1 ||
                            toIndex===-1
                        ){
                            return;
                        }

                        const thirdDepart =
                            thirdTrain.stops[s2Index].time;

                        const thirdArrive =
                            thirdTrain.stops[toIndex].time;

                        if(
                            !isValidTime(thirdDepart) ||
                            !isValidTime(thirdArrive)
                        ){
                            return;
                        }

                        results.push({

                            transfer:true,

                            transferCount:2,

                            legs:[
                                {
                                    train:firstTrain,
                                    from:from,
                                    to:s1,
                                    fromIndex:fromIndex,
                                    toIndex:i,
                                    depart:firstDepart,
                                    arrive:firstArrive
                                },
                                {
                                    train:secondTrain,
                                    from:s1,
                                    to:s2,
                                    fromIndex:s1Index,
                                    toIndex:j,
                                    depart:secondDepart,
                                    arrive:secondArrive
                                },
                                {
                                    train:thirdTrain,
                                    from:s2,
                                    to:to,
                                    fromIndex:s2Index,
                                    toIndex:toIndex,
                                    depart:thirdDepart,
                                    arrive:thirdArrive
                                }
                            ],

                            transferStations:[s1, s2]

                        });

                    });

                }

            });

        }

    });

    // 重複除去
    const seen =
        new Set();

    const uniqueResults =
        results.filter(result=>{

            const key =
                result.legs.map(
                    leg=>leg.train.id
                ).join("|") +
                "@" +
                result.transferStations.join("|");

            if(seen.has(key)){
                return false;
            }

            seen.add(key);

            return true;

        });

    // 所要時間順（同点なら出発時刻順）
    uniqueResults.sort((a,b)=>{

        const timeDiff =

            calcTime(
                a.legs[0].depart,
                a.legs[2].arrive
            ) -

            calcTime(
                b.legs[0].depart,
                b.legs[2].arrive
            );

        if(timeDiff!==0){
            return timeDiff;
        }

        return (

            timeToMinutes(a.legs[0].depart) -
            timeToMinutes(b.legs[0].depart)

        );

    });

    return uniqueResults;

}

function displayResults(resultList, totalCount){

    const results =
        document.getElementById("results");

    results.innerHTML = "";


    if(resultList.length===0){

        results.innerHTML =
        "<p>検索結果がありません。</p>";

        return;

    }


    if(
        totalCount &&
        totalCount > resultList.length
    ){

        const note =
            document.createElement("p");

        note.textContent =
            `全${totalCount}件中 ${resultList.length}件を表示しています。`;

        results.appendChild(note);

    }


    resultList.forEach(result=>{


        const card =
            document.createElement("div");


        card.className =
            "result-card";


        card.innerHTML =
            createRouteCard(result);


        results.appendChild(card);


    });


}

// =====================
// 駅名オートコンプリート
// =====================

function findStationMatches(query){

    if(!query){
        return [];
    }

    const starts = [];
    const includes = [];

    stationData.forEach(station=>{

        if(station.name.startsWith(query)){
            starts.push(station);
        }
        else if(station.name.includes(query)){
            includes.push(station);
        }

    });

    return starts
        .concat(includes)
        .slice(0,12);

}

function setupAutocomplete(inputId, suggestId){

    const input =
        document.getElementById(inputId);

    const box =
        document.getElementById(suggestId);

    if(!input || !box){
        return;
    }

    let current = [];
    let activeIndex = -1;

    function closeBox(){

        box.innerHTML = "";
        box.style.display = "none";
        current = [];
        activeIndex = -1;

    }

    function setActive(index){

        activeIndex = index;

        const items =
            box.querySelectorAll(".suggest-item");

        items.forEach((item, i)=>{

            item.classList.toggle(
                "active",
                i===activeIndex
            );

        });

    }

    function selectStation(station){

        input.value =
            station.name;

        selectedStations[inputId] =
            station;

        closeBox();

        input.focus();

    }

    function render(){

        const query =
            input.value.trim();

        current =
            findStationMatches(query);

        if(current.length===0){
            closeBox();
            return;
        }

        box.innerHTML = "";
        activeIndex = -1;

        current.forEach((station, i)=>{

            const item =
                document.createElement("div");

            item.className =
                "suggest-item";

            const name =
                document.createElement("span");

            name.className =
                "suggest-name";

            name.textContent =
                station.name;

            const lines =
                document.createElement("span");

            lines.className =
                "suggest-lines";

            lines.textContent =
                station.lines.join("・");

            item.appendChild(name);
            item.appendChild(lines);

            item.addEventListener(
                "mousedown",
                (event)=>{

                    event.preventDefault();

                    selectStation(station);

                }
            );

            item.addEventListener(
                "mousemove",
                ()=>setActive(i)
            );

            box.appendChild(item);

        });

        box.style.display = "block";

    }

    input.addEventListener(
        "input",
        ()=>{

            const sel =
                selectedStations[inputId];

            if(sel && sel.name!==input.value.trim()){

                selectedStations[inputId] =
                    null;

            }

            render();

        }
    );

    input.addEventListener(
        "focus",
        ()=>{

            if(input.value.trim()){
                render();
            }

        }
    );

    input.addEventListener(
        "blur",
        ()=>setTimeout(closeBox, 120)
    );

    input.addEventListener(
        "keydown",
        (event)=>{

            const open =
                box.style.display==="block" &&
                current.length>0;

            if(event.key==="Enter"){

                if(open && activeIndex>=0){

                    event.preventDefault();

                    selectStation(
                        current[activeIndex]
                    );

                }
                else{

                    document
                        .getElementById("searchbtn")
                        .click();

                }

                return;

            }

            if(!open){
                return;
            }

            if(event.key==="ArrowDown"){

                event.preventDefault();

                setActive(
                    Math.min(
                        activeIndex + 1,
                        current.length - 1
                    )
                );

            }
            else if(event.key==="ArrowUp"){

                event.preventDefault();

                setActive(
                    Math.max(
                        activeIndex - 1,
                        0
                    )
                );

            }
            else if(event.key==="Escape"){

                closeBox();

            }

        }
    );

}

window.onload = async function(){

    await loadStations();

    await loadTrains();

    await loadKm();

    await loadOperations();

    applyOpsDate(currentTravelDate);

    const dateInput =
        document.getElementById("travelDate");

    if(dateInput){

        dateInput.value =
            currentTravelDate;

        dateInput.addEventListener(
            "change",
            ()=>{

                if(!dateInput.value){
                    return;
                }

                applyOpsDate(dateInput.value);

                const fromInput =
                    document.getElementById("from");

                const toInput =
                    document.getElementById("to");

                if(
                    fromInput && toInput &&
                    fromInput.value && toInput.value
                ){
                    searchTrain();
                }

            }
        );

    }

    if(stationData.length===0 || trains.length===0){

        const resultsEl =
            document.getElementById("results");

        if(resultsEl){

            resultsEl.innerHTML =
                "<p class=\"search-error\">データを読み込めませんでした。サイトのフォルダ構成（search フォルダと data フォルダが同じ場所にあること）を確認してください。</p>";

        }

    }

    setupAutocomplete("from", "fromSuggest");

    setupAutocomplete("to", "toSuggest");

    const swapBtn =
        document.getElementById("swapBtn");

    if(swapBtn){

        swapBtn.addEventListener(
            "click",
            ()=>{

                const fromInput =
                    document.getElementById("from");

                const toInput =
                    document.getElementById("to");

                const tmp =
                    fromInput.value;

                fromInput.value =
                    toInput.value;

                toInput.value =
                    tmp;

                const tmpSel =
                    selectedStations.from;

                selectedStations.from =
                    selectedStations.to;

                selectedStations.to =
                    tmpSel;

            }
        );

    }

    document
        .getElementById("searchbtn")
        .addEventListener(
            "click",
            searchTrain
        );

};