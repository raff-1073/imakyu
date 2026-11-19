#!/usr/bin/env python3
"""data/json の各JSONを、data/js に「JS形式のデータ」として書き出すツール。

なぜ必要か:
  乗換案内（search/）は通常 fetch() で JSON を読み込むが、HTMLファイルを
  ダブルクリックで開いた場合（file://）はブラウザが fetch をブロックするため
  データが読めない。script タグ経由なら file:// でも読み込めるので、
  script.js は fetch が失敗したときに data/js の方へ自動で切り替える。

使い方:
  python3 tools/json_to_js.py
  （data/json を更新したら、このツールで data/js も再生成すること）

生成物:
  data/js/stations.js  -> window.IMAKYU_STATIONS
  data/js/km.js        -> window.IMAKYU_KM
  data/js/trains.js    -> window.IMAKYU_TRAINS = {"路線名.json": [...], ...}
"""
import json
import pathlib

BASE = pathlib.Path(__file__).resolve().parent.parent
JSON_DIR = BASE / "data" / "json"
JS_DIR = BASE / "data" / "js"

# trains.js に含めないファイル（駅・距離データと、未使用の旧ファイル）
EXCLUDE = {"stations.json", "km.json", "routes.json", "timetable.json", "trains.json"}

LINE_SEPARATOR = chr(0x2028)
PARAGRAPH_SEPARATOR = chr(0x2029)


def dump_js(var_name: str, data) -> str:
    body = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    body = body.replace(LINE_SEPARATOR, "\\u2028")
    body = body.replace(PARAGRAPH_SEPARATOR, "\\u2029")
    return "window." + var_name + " = " + body + ";\n"


def main() -> None:
    JS_DIR.mkdir(parents=True, exist_ok=True)

    stations = json.loads((JSON_DIR / "stations.json").read_text(encoding="utf-8"))
    (JS_DIR / "stations.js").write_text(dump_js("IMAKYU_STATIONS", stations), encoding="utf-8")
    print("stations.js:", len(stations), "stations")

    km = json.loads((JSON_DIR / "km.json").read_text(encoding="utf-8"))
    (JS_DIR / "km.js").write_text(dump_js("IMAKYU_KM", km), encoding="utf-8")
    print("km.js:", len(km), "lines")

    trains = {}
    for path in sorted(JSON_DIR.glob("*.json")):
        if path.name in EXCLUDE:
            continue
        trains[path.name] = json.loads(path.read_text(encoding="utf-8"))
    ops_path = JSON_DIR / "operations.json"
    if ops_path.exists():
        ops = json.loads(ops_path.read_text(encoding="utf-8"))
        (JS_DIR / "operations.js").write_text(dump_js("IMAKYU_OPERATIONS", ops), encoding="utf-8")
        print("operations.js:", len(ops.get("rules", [])), "rules,", len(ops.get("extraTrains", [])), "extra trains")

    (JS_DIR / "trains.js").write_text(dump_js("IMAKYU_TRAINS", trains), encoding="utf-8")
    total = sum(len(v) if isinstance(v, list) else len(v.get("trains", [])) for v in trains.values())
    print("trains.js:", len(trains), "lines,", total, "trains")


if __name__ == "__main__":
    main()
