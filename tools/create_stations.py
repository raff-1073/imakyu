from pathlib import Path
import json

project = Path(__file__).parent.parent

json_folder = project / "data" / "json"


files = [
    "中央線.json",
    "黒崎小岩ライン.json",
    "松代線.json",
    "今宮本線.json"
]


stations = {}


for file in files:

    line_name = file.replace(".json", "")

    with open(json_folder / file, encoding="utf-8") as f:

        data = json.load(f)


    if isinstance(data, list):
        trains = data

    elif isinstance(data, dict):
        trains = data["trains"]

    else:
        trains = []


    print(file, type(trains), len(trains))


    for train in trains:

        for stop in train["stops"]:

            name = stop["station"]


            if name not in stations:
                stations[name] = []


            if line_name not in stations[name]:
                stations[name].append(line_name)



result = []


for name, lines in stations.items():

    result.append({

        "name": name,

        "lines": lines

    })


with open(
    json_folder / "stations.json",
    "w",
    encoding="utf-8"
) as f:

    json.dump(
        result,
        f,
        ensure_ascii=False,
        indent=2
    )


print("駅データ作成完了")
print("駅数:", len(result))