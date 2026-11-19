from pathlib import Path
import json

from parser import load_csv, get_trains

project = Path(__file__).parent.parent

csv_folder = project / "data" / "csv"
json_folder = project / "data" / "json"


# 各路線をどの区間でつなぐか
sections = {

    "中央線": [
        ("有坂", "新熱川")
    ],

    "今宮本線": [
        ("今宮", "松浦"),
        ("松浦", "新熱川")
    ],

    "松代線": [
        ("新松原", "平城山")
    ]

}


km_data = {}


for line, line_sections in sections.items():

    csv_file = csv_folder / (line + "上り.csv")

    if not csv_file.exists():
        print("なし:", csv_file.name)
        continue

    data = load_csv(csv_file)

    trains = get_trains(data)

    stations = {}

    total_km = 0

    for start, goal in line_sections:

        target_train = None

        # 条件に合う各停を探す
        for train in trains:

            if train["type"] != "各停":
                continue

            names = [
                stop["station"]
                for stop in train["stops"]
            ]

            if start in names and goal in names:

                s = names.index(start)
                g = names.index(goal)

                if s < g:
                    target_train = train
                    break

        if target_train is None:

            print(line, start, "→", goal, "列車なし")
            continue


        first_minutes = None

        names = [
            stop["station"]
            for stop in target_train["stops"]
        ]

        s = names.index(start)
        g = names.index(goal)

        prev_minutes = None
        day_offset = 0

        for stop in target_train["stops"][s:g+1]:

            if stop["kind"] not in ["発", "着"]:
                continue

            time = stop["time"]

if len(time) != 5:
    continue

if time[2] != ":":
    continue

h, m = map(int, time.split(":"))

            current = h * 60 + m

            # 日付をまたいだら24時間追加
            if prev_minutes is not None and current < prev_minutes:
                day_offset += 1440

            current += day_offset

            if first_minutes is None:
                first_minutes = current

            km = total_km + (current - first_minutes)

            stations[stop["station"]] = km

            prev_minutes = current

        total_km = stations[goal]

    km_data[line] = stations

    print(line, "駅数", len(stations))


with open(
    json_folder / "km.json",
    "w",
    encoding="utf-8"
) as f:

    json.dump(
        km_data,
        f,
        ensure_ascii=False,
        indent=2
    )

print("営業キロJSON作成完了！")