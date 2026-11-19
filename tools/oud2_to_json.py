"""OuDiaSecond (.oud2) -> 今急サイト用列車JSON 変換ツール
既存の data/json/*.json と同じ形式 {"line": ..., "trains": [...]} を出力する。
停車パターンの表記は既存JSONの慣例に合わせる:
  停車: 発 (着と発が違う場合は 着+発), 終着: 着, 通過: 発/ﾚ, 経由なし: 発/||
"""
import sys, json, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from oud2lib import parse_oud2, as_list, parse_ekijikoku, fmt_hhmm

def convert(path):
    root = parse_oud2(pathlib.Path(path).read_text(encoding="utf-8-sig"))
    rosen = root["Rosen"]
    line_name = rosen.get("Rosenmei", "")
    ekis = as_list(rosen.get("Eki"))
    station_names = [e.get("Ekimei", "") for e in ekis]
    types = as_list(rosen.get("Ressyasyubetsu"))
    type_names = [(t.get("Ryakusyou") or t.get("Syubetsumei") or "") for t in types]
    trains_out = []
    for dia in as_list(rosen.get("Dia")):
        for dirkey, dirname in (("Kudari", "下り"), ("Nobori", "上り")):
            section = dia.get(dirkey)
            if not isinstance(section, dict):
                continue
            for r in as_list(section.get("Ressya")):
                houkou = r.get("Houkou", dirkey)
                entries = parse_ekijikoku(r.get("EkiJikoku", ""), len(ekis))
                # EkiJikoku は進行方向順に格納されている (上りは駅の逆順)
                if houkou == "Nobori":
                    idx_order = list(range(len(ekis) - 1, -1, -1))
                else:
                    idx_order = list(range(len(ekis)))
                # entries[i] は idx_order[i] 番目の駅に対応
                seq = [(station_names[idx], entries[pos]) for pos, idx in enumerate(idx_order)]
                routed = [i for i, (_, (st, a, d)) in enumerate(seq) if st == 1]
                stops = []
                for i, (stname, (stype, arr, dep)) in enumerate(seq):
                    if stype == 3:
                        stops.append({"station": stname, "kind": "発", "time": "||"})
                    elif stype == 2:
                        stops.append({"station": stname, "kind": "発", "time": "ﾚ"})
                    else:
                        is_first = routed and i == routed[0]
                        is_last = routed and i == routed[-1]
                        if arr is not None and dep is not None:
                            if arr == dep:
                                stops.append({"station": stname, "kind": "発", "time": fmt_hhmm(dep)})
                            else:
                                stops.append({"station": stname, "kind": "着", "time": fmt_hhmm(arr)})
                                stops.append({"station": stname, "kind": "発", "time": fmt_hhmm(dep)})
                        elif dep is not None:
                            kind = "着" if (is_last and not is_first) else "発"
                            stops.append({"station": stname, "kind": kind, "time": fmt_hhmm(dep)})
                        elif arr is not None:
                            stops.append({"station": stname, "kind": "着", "time": fmt_hhmm(arr)})
                syubetsu_idx = int(r.get("Syubetsu", 0) or 0)
                trains_out.append({
                    "id": r.get("Ressyabangou", ""),
                    "type": type_names[syubetsu_idx] if syubetsu_idx < len(type_names) else "",
                    "name": r.get("Ressyamei", "") or "",
                    "stops": stops,
                    "direction": "上り" if houkou == "Nobori" else "下り",
                })
    return {"line": line_name, "trains": trains_out}, station_names

if __name__ == "__main__":
    data, stations = convert(sys.argv[1])
    print(json.dumps({"line": data["line"], "trains": len(data["trains"]), "stations": len(stations)}, ensure_ascii=False))
