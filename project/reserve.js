function timeToMinutes(timeText) {
    const parts = timeText.split(":");
    return Number(parts[0]) * 60 + Number(parts[1]);
}

function getStatus(train) {

    const remain = train.seats.total - train.seats.reserved;

    if (remain === 0) {
        return "full";
    }

    if (remain <= 5) {
        return "few";
    }

    return "ok";
}

function getStatusLabel(status) {
    if (status === "ok") {
        return "○";
    }

    if (status === "few") {
        return "△";
    }

    return "×";
}

function getStatusClass(status) {
    if (status === "ok") {
        return "vacancy-ok";
    }

    if (status === "few") {
        return "vacancy-few";
    }

    return "vacancy-full";
}

// =====================
// 空席照会ページ（celeste-reserve.html）
// =====================

const fromSelect = document.getElementById("from-station");
const toSelect = document.getElementById("to-station");
const form = document.getElementById("reserve-search-form");

if (fromSelect && toSelect && form) {

    for (const id in stationNames) {

        fromSelect.innerHTML +=
            `<option value="${id}">${stationNames[id]}</option>`;

        toSelect.innerHTML +=
            `<option value="${id}">${stationNames[id]}</option>`;
    }

    const resultList = document.getElementById("train-result-list");
    const resultNote = document.querySelector(".result-note");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const date = document.getElementById("ride-date").value;
        const time = document.getElementById("ride-time").value;
        const fromStation = document.getElementById("from-station").value;
        const toStation = document.getElementById("to-station").value;
        const adult = document.getElementById("adult-count").value;
        const child = document.getElementById("child-count").value;

        if (!date || !time || !fromStation || !toStation) {
            resultNote.textContent = "乗車日、発駅、着駅、出発時刻を選択してください。";
            resultList.innerHTML = "";
            return;
        }

        if (fromStation === toStation) {
            resultNote.textContent = "発駅と着駅には異なる駅を選択してください。";
            resultList.innerHTML = "";
            return;
        }

        const selectedMinutes = timeToMinutes(time);

        const matchedTrains = trains.filter(function (train) {
            const fromTime = train.times[fromStation];
            const toTime = train.times[toStation];

            if (!fromTime || !toTime) {
                return false;
            }

            const fromMinutes = timeToMinutes(fromTime);
            const toMinutes = timeToMinutes(toTime);

            return fromMinutes >= selectedMinutes &&
                   fromMinutes <= selectedMinutes + 180 &&
                   toMinutes > fromMinutes;
        });

        matchedTrains.sort(function (a, b) {
            return timeToMinutes(a.times[fromStation]) - timeToMinutes(b.times[fromStation]);
        });

        const totalMatched = matchedTrains.length;
        const displayTrains = matchedTrains.slice(0, 10);

        resultNote.textContent =
            date + " " +
            stationNames[fromStation] + " → " +
            stationNames[toStation] + " の列車を表示しています。" +
            (totalMatched > displayTrains.length
                ? "（全" + totalMatched + "件中 " + displayTrains.length + "件を表示しています）"
                : "");

        resultList.innerHTML = "";

        displayTrains.forEach(function (train) {
            const fromTime = train.times[fromStation];
            const toTime = train.times[toStation];

            const status = getStatus(train);

            const card = document.createElement("div");
            card.className = "train-result-card";

            const disabledClass = status === "full" ? " disabled" : "";

            const href = "celeste-seat.html?train=" + encodeURIComponent(train.name) +
                "&id=" + encodeURIComponent(train.id) +
                "&date=" + encodeURIComponent(date) +
                "&from=" + encodeURIComponent(fromStation) +
                "&to=" + encodeURIComponent(toStation) +
                "&fromTime=" + encodeURIComponent(fromTime) +
                "&toTime=" + encodeURIComponent(toTime) +
                "&adult=" + encodeURIComponent(adult) +
                "&child=" + encodeURIComponent(child);

            card.innerHTML =
                '<div class="train-name">' + train.name + '</div>' +
                '<div class="train-time">' +
                    stationNames[fromStation] + ' ' + fromTime + '発 → ' +
                    stationNames[toStation] + ' ' + toTime + '着' +
                '</div>' +
                '<div><span class="vacancy-mark ' + getStatusClass(status) + '">' + getStatusLabel(status) + '</span></div>' +
                '<a class="select-train-button' + disabledClass + '" href="' + href + '">' +
                    (status === "full" ? "満席" : "選択する") +
                '</a>';

            resultList.appendChild(card);
        });

        if (matchedTrains.length === 0) {
            resultNote.textContent = "条件に合う列車がありません。";
        }
    });
}

// =====================
// 座席選択ページ（celeste-seat.html）
// =====================

const rooms = document.querySelectorAll(".room");

if (rooms.length > 0) {

    const roomName = document.getElementById("room-name");
    const nextButton = document.getElementById("nextButton");
    const doneNote = document.getElementById("reserve-done");
    const summary = document.getElementById("booking-summary");

    // 空席照会ページから引き継いだ予約内容を表示する
    const params = new URLSearchParams(location.search);

    if (summary && params.get("train")) {

        const fromName = stationNames[params.get("from")] || params.get("from");
        const toName = stationNames[params.get("to")] || params.get("to");

        summary.textContent =
            params.get("train") + "　" +
            (params.get("date") || "") + "　" +
            fromName + " " + (params.get("fromTime") || "") + "発 → " +
            toName + " " + (params.get("toTime") || "") + "着　" +
            "大人" + (params.get("adult") || "1") + "名・こども" + (params.get("child") || "0") + "名";
    }

    // 列車ごとの予約済み個室を座席マップに反映する
    const trainId = params.get("id");

    if (trainId && typeof trains !== "undefined") {

        const train = trains.find(function (t) { return t.id === trainId; });

        if (train && train.reservedRooms) {

            rooms.forEach(function (room) {
                const isReserved = train.reservedRooms.includes(room.dataset.room);
                room.classList.toggle("reserved", isReserved);
                room.classList.toggle("available", !isReserved);
            });

        }

    }

    let selectedRoom = "";

    rooms.forEach(function(room){

        room.addEventListener("click", function(){

            if (room.classList.contains("reserved")) {
                return;
            }

            rooms.forEach(function(r){
                r.classList.remove("selected");
            });

            room.classList.add("selected");

            selectedRoom = room.dataset.room;

            if (roomName) {
                roomName.textContent =
                    selectedRoom + " 個室";
            }

            if (nextButton) {
                nextButton.disabled = false;
            }

        });

    });

    if (nextButton) {

        nextButton.addEventListener("click", function(){

            if (!selectedRoom) {
                return;
            }

            nextButton.disabled = true;
            nextButton.textContent = "予約済み";

            if (doneNote) {
                doneNote.textContent =
                    "（デモ）" + selectedRoom + " 個室でご予約を受け付けました。";
            }

        });

    }

}
