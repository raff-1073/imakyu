from pathlib import Path
import json

from parser import load_csv, get_trains


project = Path(__file__).parent.parent


csv_folder = project / "data" / "csv"
json_folder = project / "data" / "json"



lines = [
    "中央線"
]



for line in lines:


    csv_files = [
        line + "下り.csv",
        line + "上り.csv"
    ]


    all_trains = []



    for csv_name in csv_files:


        csv_file = csv_folder / csv_name


        if not csv_file.exists():
            print("なし:", csv_name)
            continue



        data = load_csv(csv_file)


        trains = get_trains(data)



        # 方向追加

        if "上り" in csv_name:
            direction = "上り"

        else:
            direction = "下り"



        for train in trains:

            train["direction"] = direction


        all_trains.extend(trains)



    output = {

        "line": line,

        "trains": all_trains

    }



    json_file = json_folder / (line + ".json")



    with open(
        json_file,
        "w",
        encoding="utf-8"
    ) as f:


        json.dump(
            output,
            f,
            ensure_ascii=False,
            indent=2
        )



    print(
        line,
        "書き出し完了！",
        "列車数:",
        len(all_trains)
    )