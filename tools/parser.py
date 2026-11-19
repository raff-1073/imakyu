import csv


def load_csv(csv_file):
    """CSVを読み込む"""

    with open(csv_file, encoding="utf-8-sig") as f:
        reader = list(csv.reader(f))

    return reader


def get_stations(data):
    """駅一覧を取得"""

    stations = []

    for row in data:

        if len(row) >= 2:

            if row[1] == "着" or row[1] == "発":

                station = row[0]

                if station not in stations:

                    stations.append(station)

    return stations

def get_trains(data):
    """列車一覧を取得"""

    train_numbers = []
    train_types = []
    train_names = []

    for row in data:

        if row and row[0] == "列車番号":
            train_numbers = row[2:]

        elif row and row[0] == "列車種別":
            train_types = row[2:]

        elif row and row[0] == "列車名":
            train_names = row[2:]

    trains = []

    for i in range(len(train_numbers)):

        train = {
            "id": train_numbers[i],
            "type": train_types[i] if i < len(train_types) else "",
            "name": train_names[i] if i < len(train_names) else "",
            "stops": get_train_stops(data, i)
        }

        trains.append(train)

    return trains

def get_train_stops(data, train_index):
    """1本の列車の停車駅一覧"""

    stops = []

    for row in data:

        if len(row) < train_index + 3:
            continue

        if len(row) >= 2 and row[1] in ("着", "発"):

            station = row[0]
            kind = row[1]
            time = row[train_index + 2]

            if time == "":
                continue

            stops.append({
                "station": station,
                "kind": kind,
                "time": format_time(time)
            })

    return stops

def format_time(time_str):
    """OuDiaの時刻を HH:MM に変換"""

    if not time_str:
        return ""

    time_str = time_str.strip()

    # 数字以外はそのまま返す（レや||などに備える）
    if not time_str.isdigit():
        return time_str

    time_str = time_str.zfill(4)

    return f"{time_str[:2]}:{time_str[2:]}"