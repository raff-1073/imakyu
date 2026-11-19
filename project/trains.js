const trains = [
    {
        "id": "2001",
        "name": "てんりゅう1号",
        "seats": {
            "total": 16,
            "reserved": 13
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "ida": "06:00",
            "inaoshima": "06:08",
            "komagane": "06:17",
            "inashi": "06:26",
            "shinshiojiri": "06:35",
            "shinmatsumoto": "06:41",
            "shinonoi": "06:56",
            "nagano": "07:01"
        }
    },
    {
        "id": "1003",
        "name": "すいせい3号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "4B",
            "5A",
            "6B",
            "7B",
            "8B"
        ],
        "times": {
            "hamamatsu": "06:00",
            "achihirugamionsen": "06:25",
            "ida": "06:37",
            "shinmatsumoto": "07:01",
            "nagano": "07:13"
        }
    },
    {
        "id": "1009",
        "name": "すいせい9号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "2A",
            "2B",
            "4B",
            "5A",
            "6B",
            "7B",
            "8B"
        ],
        "times": {
            "hamamatsu": "06:18",
            "ida": "06:52",
            "shinmatsumoto": "07:16",
            "nagano": "07:28"
        }
    },
    {
        "id": "2003",
        "name": "てんりゅう3号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1B",
            "2A",
            "3A",
            "3B",
            "4A",
            "4B",
            "6A",
            "8A"
        ],
        "times": {
            "hamamatsu": "06:22",
            "nishikashima": "06:30",
            "shinsakuma": "06:40",
            "tenryuhiraoka": "06:51",
            "achihirugamionsen": "07:07",
            "ida": "07:24",
            "inaoshima": "07:32",
            "komagane": "07:43",
            "inashi": "07:52",
            "shinshiojiri": "08:01",
            "shinmatsumoto": "08:07",
            "shinonoi": "08:22",
            "nagano": "08:27"
        }
    },
    {
        "id": "1015",
        "name": "すいせい15号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "5A",
            "6B",
            "7A",
            "8B"
        ],
        "times": {
            "hamamatsu": "06:38",
            "ida": "07:12",
            "shinmatsumoto": "07:36",
            "nagano": "07:48"
        }
    },
    {
        "id": "1005",
        "name": "すいせい5号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "3A",
            "3B",
            "5B",
            "6A",
            "7B",
            "8A"
        ],
        "times": {
            "yoshino": "06:02",
            "mizutani": "06:20",
            "hamamatsu": "06:58",
            "ida": "07:32",
            "shinmatsumoto": "07:56",
            "nagano": "08:08"
        }
    },
    {
        "id": "2005",
        "name": "てんりゅう5号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "8B"
        ],
        "times": {
            "mizutani": "06:30",
            "kitakuratousai": "06:38",
            "hamamatsu": "07:19",
            "nishikashima": "07:27",
            "shinsakuma": "07:37",
            "tenryuhiraoka": "07:48",
            "achihirugamionsen": "08:04",
            "ida": "08:16",
            "inaoshima": "08:24",
            "komagane": "08:43",
            "inashi": "08:52",
            "shinshiojiri": "09:01",
            "shinmatsumoto": "09:07",
            "shinonoi": "09:22",
            "nagano": "09:27"
        }
    },
    {
        "id": "1011",
        "name": "すいせい11号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "yoshino": "06:22",
            "mizutani": "06:40",
            "hamamatsu": "07:18",
            "ida": "07:52",
            "shinmatsumoto": "08:16",
            "nagano": "08:28"
        }
    },
    {
        "id": "1001",
        "name": "すいせい1号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1B",
            "2A",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6B",
            "7B",
            "8B"
        ],
        "times": {
            "arisaka": "06:00",
            "yoshino": "06:42",
            "mizutani": "07:00",
            "hamamatsu": "07:38",
            "ida": "08:12",
            "shinmatsumoto": "08:36",
            "nagano": "08:48"
        }
    },
    {
        "id": "1007",
        "name": "すいせい7号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "06:11",
            "arisaka": "06:20",
            "yoshino": "07:02",
            "mizutani": "07:20",
            "hamamatsu": "07:58",
            "ida": "08:32",
            "shinmatsumoto": "08:56",
            "nagano": "09:08"
        }
    },
    {
        "id": "2007",
        "name": "てんりゅう7号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "7B"
        ],
        "times": {
            "mizutani": "07:27",
            "kitakuratousai": "07:35",
            "hamamatsu": "08:08",
            "nishikashima": "08:16",
            "shinsakuma": "08:30",
            "tenryuhiraoka": "08:41",
            "achihirugamionsen": "08:54",
            "ida": "09:06",
            "inaoshima": "09:14",
            "komagane": "09:24",
            "inashi": "09:33",
            "shinshiojiri": "09:43",
            "shinmatsumoto": "09:49",
            "shinonoi": "10:04",
            "nagano": "10:09"
        }
    },
    {
        "id": "1013",
        "name": "すいせい13号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "06:30",
            "arisaka": "06:40",
            "yoshino": "07:22",
            "mizutani": "07:40",
            "hamamatsu": "08:18",
            "ida": "08:52",
            "shinmatsumoto": "09:16",
            "nagano": "09:28"
        }
    },
    {
        "id": "1017",
        "name": "すいせい17号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "1B",
            "3A",
            "3B",
            "4A",
            "7A",
            "7B"
        ],
        "times": {
            "daiichikyoten": "06:41",
            "arisaka": "06:50",
            "yoshino": "07:32",
            "mizutani": "07:50",
            "hamamatsu": "08:28",
            "ida": "09:02",
            "shinmatsumoto": "09:26",
            "nagano": "09:38"
        }
    },
    {
        "id": "1019",
        "name": "すいせい19号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "2B",
            "7A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "06:51",
            "arisaka": "07:00",
            "yoshino": "07:42",
            "mizutani": "08:00",
            "hamamatsu": "08:39",
            "ida": "09:14",
            "shinmatsumoto": "09:38",
            "nagano": "09:50"
        }
    },
    {
        "id": "1021",
        "name": "すいせい21号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "4B",
            "8A"
        ],
        "times": {
            "daiichikyoten": "07:01",
            "arisaka": "07:10",
            "yoshino": "07:52",
            "mizutani": "08:10",
            "hamamatsu": "08:48",
            "ida": "09:22",
            "shinmatsumoto": "09:47",
            "nagano": "09:59"
        }
    },
    {
        "id": "1023",
        "name": "すいせい23号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "2A",
            "3A",
            "4A",
            "6A",
            "7B",
            "8B"
        ],
        "times": {
            "daiichikyoten": "07:11",
            "arisaka": "07:20",
            "yoshino": "08:02",
            "mizutani": "08:20",
            "hamamatsu": "08:58",
            "ida": "09:32",
            "shinmatsumoto": "09:56",
            "nagano": "10:10"
        }
    },
    {
        "id": "1025",
        "name": "すいせい25号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "daiichikyoten": "07:21",
            "arisaka": "07:30",
            "yoshino": "08:12",
            "mizutani": "08:30",
            "hamamatsu": "09:08",
            "ida": "09:42",
            "shinmatsumoto": "10:06",
            "nagano": "10:18"
        }
    },
    {
        "id": "2009",
        "name": "てんりゅう9号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "1A",
            "7B"
        ],
        "times": {
            "mizutani": "08:31",
            "kitakuratousai": "08:39",
            "hamamatsu": "09:12",
            "nishikashima": "09:20",
            "shinsakuma": "09:30",
            "tenryuhiraoka": "09:41",
            "achihirugamionsen": "09:54",
            "ida": "10:06",
            "inaoshima": "10:14",
            "komagane": "10:24",
            "inashi": "10:33",
            "shinshiojiri": "10:43",
            "shinmatsumoto": "10:49",
            "shinonoi": "11:04",
            "nagano": "11:09"
        }
    },
    {
        "id": "1027",
        "name": "すいせい27号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "8B"
        ],
        "times": {
            "daiichikyoten": "07:31",
            "arisaka": "07:40",
            "yoshino": "08:22",
            "mizutani": "08:40",
            "hamamatsu": "09:18",
            "ida": "09:53",
            "shinmatsumoto": "10:17",
            "nagano": "10:29"
        }
    },
    {
        "id": "1029",
        "name": "すいせい29号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "07:41",
            "arisaka": "07:50",
            "yoshino": "08:32",
            "mizutani": "08:50",
            "hamamatsu": "09:28",
            "ida": "10:02",
            "shinmatsumoto": "10:26",
            "nagano": "10:38"
        }
    },
    {
        "id": "1031",
        "name": "すいせい31号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "07:51",
            "arisaka": "08:00",
            "yoshino": "08:42",
            "mizutani": "09:00",
            "hamamatsu": "09:38",
            "ida": "10:12",
            "shinmatsumoto": "10:38",
            "nagano": "10:50"
        }
    },
    {
        "id": "1033",
        "name": "すいせい33号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "08:01",
            "arisaka": "08:10",
            "yoshino": "08:52",
            "mizutani": "09:10",
            "hamamatsu": "09:48",
            "ida": "10:22",
            "shinmatsumoto": "10:46",
            "nagano": "10:58"
        }
    },
    {
        "id": "1035",
        "name": "すいせい35号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "daiichikyoten": "08:11",
            "arisaka": "08:20",
            "yoshino": "09:02",
            "mizutani": "09:20",
            "hamamatsu": "09:58",
            "ida": "10:32",
            "shinmatsumoto": "10:57",
            "nagano": "11:10"
        }
    },
    {
        "id": "1037",
        "name": "すいせい37号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "2B",
            "3A",
            "3B",
            "5B",
            "6A",
            "8A"
        ],
        "times": {
            "daiichikyoten": "08:21",
            "arisaka": "08:30",
            "yoshino": "09:12",
            "mizutani": "09:30",
            "hamamatsu": "10:08",
            "ida": "10:42",
            "shinmatsumoto": "11:06",
            "nagano": "11:18"
        }
    },
    {
        "id": "2011",
        "name": "てんりゅう11号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "2A",
            "3A",
            "5B"
        ],
        "times": {
            "mizutani": "09:31",
            "kitakuratousai": "09:39",
            "hamamatsu": "10:12",
            "nishikashima": "10:20",
            "shinsakuma": "10:30",
            "tenryuhiraoka": "10:41",
            "achihirugamionsen": "10:54",
            "ida": "11:06",
            "inaoshima": "11:14",
            "komagane": "11:24",
            "inashi": "11:33",
            "shinshiojiri": "11:43",
            "shinmatsumoto": "11:49",
            "shinonoi": "12:04",
            "nagano": "12:09"
        }
    },
    {
        "id": "1039",
        "name": "すいせい39号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "4A",
            "5A",
            "5B",
            "6A",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "08:31",
            "arisaka": "08:40",
            "yoshino": "09:22",
            "mizutani": "09:40",
            "hamamatsu": "10:18",
            "ida": "10:53",
            "shinmatsumoto": "11:17",
            "nagano": "11:29"
        }
    },
    {
        "id": "1041",
        "name": "すいせい41号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2B",
            "6B",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "daiichikyoten": "08:41",
            "arisaka": "08:50",
            "yoshino": "09:32",
            "mizutani": "09:50",
            "hamamatsu": "10:28",
            "ida": "11:02",
            "shinmatsumoto": "11:26",
            "nagano": "11:38"
        }
    },
    {
        "id": "1043",
        "name": "すいせい43号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "08:51",
            "arisaka": "09:00",
            "yoshino": "09:42",
            "mizutani": "10:00",
            "hamamatsu": "10:38",
            "ida": "11:12",
            "shinmatsumoto": "11:38",
            "nagano": "11:50"
        }
    },
    {
        "id": "1045",
        "name": "すいせい45号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "09:01",
            "arisaka": "09:10",
            "yoshino": "09:52",
            "mizutani": "10:10",
            "hamamatsu": "10:48",
            "ida": "11:22",
            "shinmatsumoto": "11:46",
            "nagano": "11:58"
        }
    },
    {
        "id": "1047",
        "name": "すいせい47号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "2A",
            "3B",
            "4A",
            "4B",
            "5A",
            "8A"
        ],
        "times": {
            "daiichikyoten": "09:11",
            "arisaka": "09:20",
            "yoshino": "10:02",
            "mizutani": "10:20",
            "hamamatsu": "10:58",
            "ida": "11:32",
            "shinmatsumoto": "11:57",
            "nagano": "12:10"
        }
    },
    {
        "id": "1049",
        "name": "すいせい49号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "09:21",
            "arisaka": "09:30",
            "yoshino": "10:12",
            "mizutani": "10:30",
            "hamamatsu": "11:08",
            "ida": "11:42",
            "shinmatsumoto": "12:06",
            "nagano": "12:18"
        }
    },
    {
        "id": "2013",
        "name": "てんりゅう13号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "mizutani": "10:31",
            "kitakuratousai": "10:39",
            "hamamatsu": "11:12",
            "nishikashima": "11:20",
            "shinsakuma": "11:30",
            "tenryuhiraoka": "11:41",
            "achihirugamionsen": "11:54",
            "ida": "12:06",
            "inaoshima": "12:14",
            "komagane": "12:24",
            "inashi": "12:33",
            "shinshiojiri": "12:43",
            "shinmatsumoto": "12:49",
            "shinonoi": "13:04",
            "nagano": "13:09"
        }
    },
    {
        "id": "1051",
        "name": "すいせい51号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "5A"
        ],
        "times": {
            "daiichikyoten": "09:31",
            "arisaka": "09:40",
            "yoshino": "10:22",
            "mizutani": "10:40",
            "hamamatsu": "11:18",
            "ida": "11:53",
            "shinmatsumoto": "12:17",
            "nagano": "12:29"
        }
    },
    {
        "id": "1053",
        "name": "すいせい53号",
        "seats": {
            "total": 16,
            "reserved": 13
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "daiichikyoten": "09:41",
            "arisaka": "09:50",
            "yoshino": "10:32",
            "mizutani": "10:50",
            "hamamatsu": "11:28",
            "ida": "12:02",
            "shinmatsumoto": "12:26",
            "nagano": "12:38"
        }
    },
    {
        "id": "1055",
        "name": "すいせい55号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "4A",
            "4B",
            "6B",
            "7A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "09:51",
            "arisaka": "10:00",
            "yoshino": "10:42",
            "mizutani": "11:00",
            "hamamatsu": "11:38",
            "ida": "12:12",
            "shinmatsumoto": "12:38",
            "nagano": "12:50"
        }
    },
    {
        "id": "1057",
        "name": "すいせい57号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "10:01",
            "arisaka": "10:10",
            "yoshino": "10:52",
            "mizutani": "11:10",
            "hamamatsu": "11:48",
            "ida": "12:22",
            "shinmatsumoto": "12:46",
            "nagano": "12:58"
        }
    },
    {
        "id": "1059",
        "name": "すいせい59号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "4B"
        ],
        "times": {
            "daiichikyoten": "10:11",
            "arisaka": "10:20",
            "yoshino": "11:02",
            "mizutani": "11:20",
            "hamamatsu": "11:58",
            "ida": "12:32",
            "shinmatsumoto": "12:57",
            "nagano": "13:10"
        }
    },
    {
        "id": "1061",
        "name": "すいせい61号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1B",
            "3A",
            "3B",
            "4A",
            "5A"
        ],
        "times": {
            "daiichikyoten": "10:21",
            "arisaka": "10:30",
            "yoshino": "11:12",
            "mizutani": "11:30",
            "hamamatsu": "12:08",
            "ida": "12:42",
            "shinmatsumoto": "13:06",
            "nagano": "13:18"
        }
    },
    {
        "id": "2015",
        "name": "てんりゅう15号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1B",
            "2A",
            "3A",
            "3B",
            "4A",
            "5A",
            "6A",
            "6B",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "mizutani": "11:31",
            "kitakuratousai": "11:39",
            "hamamatsu": "12:12",
            "nishikashima": "12:20",
            "shinsakuma": "12:30",
            "tenryuhiraoka": "12:41",
            "achihirugamionsen": "12:54",
            "ida": "13:06",
            "inaoshima": "13:14",
            "komagane": "13:24",
            "inashi": "13:33",
            "shinshiojiri": "13:43",
            "shinmatsumoto": "13:49",
            "shinonoi": "14:04",
            "nagano": "14:09"
        }
    },
    {
        "id": "1063",
        "name": "すいせい63号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "2B",
            "3B",
            "5A",
            "5B",
            "6B",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "10:31",
            "arisaka": "10:40",
            "yoshino": "11:22",
            "mizutani": "11:40",
            "hamamatsu": "12:18",
            "ida": "12:53",
            "shinmatsumoto": "13:17",
            "nagano": "13:29"
        }
    },
    {
        "id": "1065",
        "name": "すいせい65号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1B",
            "2A",
            "2B",
            "4A",
            "4B",
            "5B",
            "6A",
            "6B",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "10:41",
            "arisaka": "10:50",
            "yoshino": "11:32",
            "mizutani": "11:50",
            "hamamatsu": "12:28",
            "ida": "13:02",
            "shinmatsumoto": "13:26",
            "nagano": "13:38"
        }
    },
    {
        "id": "1067",
        "name": "すいせい67号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "3A",
            "3B",
            "4B",
            "5A",
            "6A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "10:51",
            "arisaka": "11:00",
            "yoshino": "11:42",
            "mizutani": "12:00",
            "hamamatsu": "12:38",
            "ida": "13:12",
            "shinmatsumoto": "13:38",
            "nagano": "13:50"
        }
    },
    {
        "id": "1069",
        "name": "すいせい69号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "11:01",
            "arisaka": "11:10",
            "yoshino": "11:52",
            "mizutani": "12:10",
            "hamamatsu": "12:48",
            "ida": "13:22",
            "shinmatsumoto": "13:46",
            "nagano": "13:58"
        }
    },
    {
        "id": "1071",
        "name": "すいせい71号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "1B",
            "4B",
            "5B",
            "6A",
            "7A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "11:11",
            "arisaka": "11:20",
            "yoshino": "12:02",
            "mizutani": "12:20",
            "hamamatsu": "12:58",
            "ida": "13:32",
            "shinmatsumoto": "13:57",
            "nagano": "14:10"
        }
    },
    {
        "id": "1073",
        "name": "すいせい73号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "daiichikyoten": "11:21",
            "arisaka": "11:30",
            "yoshino": "12:12",
            "mizutani": "12:30",
            "hamamatsu": "13:08",
            "ida": "13:42",
            "shinmatsumoto": "14:06",
            "nagano": "14:18"
        }
    },
    {
        "id": "2017",
        "name": "てんりゅう17号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1B",
            "2B",
            "5A",
            "6A",
            "6B"
        ],
        "times": {
            "mizutani": "12:31",
            "kitakuratousai": "12:39",
            "hamamatsu": "13:12",
            "nishikashima": "13:20",
            "shinsakuma": "13:30",
            "tenryuhiraoka": "13:41",
            "achihirugamionsen": "13:54",
            "ida": "14:06",
            "inaoshima": "14:14",
            "komagane": "14:24",
            "inashi": "14:33",
            "shinshiojiri": "14:43",
            "shinmatsumoto": "14:49",
            "shinonoi": "15:04",
            "nagano": "15:09"
        }
    },
    {
        "id": "1075",
        "name": "すいせい75号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "1B",
            "5A",
            "7A"
        ],
        "times": {
            "daiichikyoten": "11:31",
            "arisaka": "11:40",
            "yoshino": "12:22",
            "mizutani": "12:40",
            "hamamatsu": "13:18",
            "ida": "13:53",
            "shinmatsumoto": "14:17",
            "nagano": "14:29"
        }
    },
    {
        "id": "1077",
        "name": "すいせい77号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "2B",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "11:41",
            "arisaka": "11:50",
            "yoshino": "12:32",
            "mizutani": "12:50",
            "hamamatsu": "13:28",
            "ida": "14:02",
            "shinmatsumoto": "14:26",
            "nagano": "14:38"
        }
    },
    {
        "id": "1079",
        "name": "すいせい79号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1B",
            "2A",
            "5B",
            "6B",
            "7A",
            "7B",
            "8A"
        ],
        "times": {
            "daiichikyoten": "11:51",
            "arisaka": "12:00",
            "yoshino": "12:42",
            "mizutani": "13:00",
            "hamamatsu": "13:38",
            "ida": "14:12",
            "shinmatsumoto": "14:38",
            "nagano": "14:50"
        }
    },
    {
        "id": "1081",
        "name": "すいせい81号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "2A",
            "2B",
            "4B",
            "5B"
        ],
        "times": {
            "daiichikyoten": "12:01",
            "arisaka": "12:10",
            "yoshino": "12:52",
            "mizutani": "13:10",
            "hamamatsu": "13:48",
            "ida": "14:22",
            "shinmatsumoto": "14:46",
            "nagano": "14:58"
        }
    },
    {
        "id": "1083",
        "name": "すいせい83号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "2A",
            "2B",
            "3B",
            "4B",
            "6B",
            "7A",
            "8A"
        ],
        "times": {
            "daiichikyoten": "12:11",
            "arisaka": "12:20",
            "yoshino": "13:02",
            "mizutani": "13:20",
            "hamamatsu": "13:58",
            "ida": "14:32",
            "shinmatsumoto": "14:57",
            "nagano": "15:10"
        }
    },
    {
        "id": "1085",
        "name": "すいせい85号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "12:21",
            "arisaka": "12:30",
            "yoshino": "13:12",
            "mizutani": "13:30",
            "hamamatsu": "14:08",
            "ida": "14:42",
            "shinmatsumoto": "15:06",
            "nagano": "15:18"
        }
    },
    {
        "id": "2019",
        "name": "てんりゅう19号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "5A",
            "6A",
            "6B",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "mizutani": "13:31",
            "kitakuratousai": "13:39",
            "hamamatsu": "14:12",
            "nishikashima": "14:20",
            "shinsakuma": "14:30",
            "tenryuhiraoka": "14:41",
            "achihirugamionsen": "14:54",
            "ida": "15:06",
            "inaoshima": "15:14",
            "komagane": "15:24",
            "inashi": "15:33",
            "shinshiojiri": "15:43",
            "shinmatsumoto": "15:49",
            "shinonoi": "16:04",
            "nagano": "16:09"
        }
    },
    {
        "id": "1087",
        "name": "すいせい87号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "daiichikyoten": "12:31",
            "arisaka": "12:40",
            "yoshino": "13:22",
            "mizutani": "13:40",
            "hamamatsu": "14:18",
            "ida": "14:53",
            "shinmatsumoto": "15:17",
            "nagano": "15:29"
        }
    },
    {
        "id": "1089",
        "name": "すいせい89号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "3B",
            "4B",
            "6A",
            "7A"
        ],
        "times": {
            "daiichikyoten": "12:41",
            "arisaka": "12:50",
            "yoshino": "13:32",
            "mizutani": "13:50",
            "hamamatsu": "14:28",
            "ida": "15:02",
            "shinmatsumoto": "15:26",
            "nagano": "15:38"
        }
    },
    {
        "id": "1091",
        "name": "すいせい91号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "daiichikyoten": "12:51",
            "arisaka": "13:00",
            "yoshino": "13:42",
            "mizutani": "14:00",
            "hamamatsu": "14:38",
            "ida": "15:12",
            "shinmatsumoto": "15:38",
            "nagano": "15:50"
        }
    },
    {
        "id": "1093",
        "name": "すいせい93号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "1A",
            "2A",
            "4B",
            "6A",
            "6B",
            "7B"
        ],
        "times": {
            "daiichikyoten": "13:01",
            "arisaka": "13:10",
            "yoshino": "13:52",
            "mizutani": "14:10",
            "hamamatsu": "14:48",
            "ida": "15:22",
            "shinmatsumoto": "15:46",
            "nagano": "15:58"
        }
    },
    {
        "id": "1095",
        "name": "すいせい95号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "2B",
            "5B",
            "8B"
        ],
        "times": {
            "daiichikyoten": "13:11",
            "arisaka": "13:20",
            "yoshino": "14:02",
            "mizutani": "14:20",
            "hamamatsu": "14:58",
            "ida": "15:32",
            "shinmatsumoto": "15:57",
            "nagano": "16:10"
        }
    },
    {
        "id": "1097",
        "name": "すいせい97号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "daiichikyoten": "13:21",
            "arisaka": "13:30",
            "yoshino": "14:12",
            "mizutani": "14:30",
            "hamamatsu": "15:08",
            "ida": "15:42",
            "shinmatsumoto": "16:06",
            "nagano": "16:18"
        }
    },
    {
        "id": "2021",
        "name": "てんりゅう21号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A"
        ],
        "times": {
            "mizutani": "14:31",
            "kitakuratousai": "14:39",
            "hamamatsu": "15:12",
            "nishikashima": "15:20",
            "shinsakuma": "15:30",
            "tenryuhiraoka": "15:41",
            "achihirugamionsen": "15:54",
            "ida": "16:06",
            "inaoshima": "16:14",
            "komagane": "16:24",
            "inashi": "16:33",
            "shinshiojiri": "16:43",
            "shinmatsumoto": "16:49",
            "shinonoi": "17:04",
            "nagano": "17:09"
        }
    },
    {
        "id": "1099",
        "name": "すいせい99号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "3B",
            "4B",
            "8A"
        ],
        "times": {
            "daiichikyoten": "13:31",
            "arisaka": "13:40",
            "yoshino": "14:22",
            "mizutani": "14:40",
            "hamamatsu": "15:18",
            "ida": "15:53",
            "shinmatsumoto": "16:17",
            "nagano": "16:29"
        }
    },
    {
        "id": "1101",
        "name": "すいせい101号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "2A",
            "2B",
            "6A",
            "6B",
            "7A",
            "7B"
        ],
        "times": {
            "daiichikyoten": "13:41",
            "arisaka": "13:50",
            "yoshino": "14:32",
            "mizutani": "14:50",
            "hamamatsu": "15:28",
            "ida": "16:02",
            "shinmatsumoto": "16:26",
            "nagano": "16:38"
        }
    },
    {
        "id": "1103",
        "name": "すいせい103号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1B",
            "2A",
            "2B",
            "6A",
            "7A",
            "7B",
            "8A"
        ],
        "times": {
            "daiichikyoten": "13:51",
            "arisaka": "14:00",
            "yoshino": "14:42",
            "mizutani": "15:00",
            "hamamatsu": "15:38",
            "ida": "16:12",
            "shinmatsumoto": "16:38",
            "nagano": "16:50"
        }
    },
    {
        "id": "1105",
        "name": "すいせい105号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3B",
            "4A",
            "4B",
            "5A",
            "6A",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "14:01",
            "arisaka": "14:10",
            "yoshino": "14:52",
            "mizutani": "15:10",
            "hamamatsu": "15:48",
            "ida": "16:22",
            "shinmatsumoto": "16:46",
            "nagano": "16:58"
        }
    },
    {
        "id": "1107",
        "name": "すいせい107号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "3B",
            "4A",
            "5A",
            "5B",
            "6A",
            "6B",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "14:11",
            "arisaka": "14:20",
            "yoshino": "15:02",
            "mizutani": "15:20",
            "hamamatsu": "15:58",
            "ida": "16:32",
            "shinmatsumoto": "16:57",
            "nagano": "17:10"
        }
    },
    {
        "id": "1109",
        "name": "すいせい109号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "5A",
            "5B",
            "6A",
            "8A"
        ],
        "times": {
            "daiichikyoten": "14:21",
            "arisaka": "14:30",
            "yoshino": "15:12",
            "mizutani": "15:30",
            "hamamatsu": "16:08",
            "ida": "16:42",
            "shinmatsumoto": "17:06",
            "nagano": "17:18"
        }
    },
    {
        "id": "2023",
        "name": "てんりゅう23号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1B",
            "3B",
            "5B",
            "6A",
            "7A",
            "7B",
            "8A"
        ],
        "times": {
            "mizutani": "15:31",
            "kitakuratousai": "15:39",
            "hamamatsu": "16:12",
            "nishikashima": "16:20",
            "shinsakuma": "16:30",
            "tenryuhiraoka": "16:41",
            "achihirugamionsen": "16:54",
            "ida": "17:06",
            "inaoshima": "17:14",
            "komagane": "17:24",
            "inashi": "17:33",
            "shinshiojiri": "17:43",
            "shinmatsumoto": "17:49",
            "shinonoi": "18:04",
            "nagano": "18:09"
        }
    },
    {
        "id": "1111",
        "name": "すいせい111号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1B",
            "3A",
            "3B",
            "4B",
            "6B"
        ],
        "times": {
            "daiichikyoten": "14:31",
            "arisaka": "14:40",
            "yoshino": "15:22",
            "mizutani": "15:40",
            "hamamatsu": "16:18",
            "ida": "16:53",
            "shinmatsumoto": "17:17",
            "nagano": "17:29"
        }
    },
    {
        "id": "1113",
        "name": "すいせい113号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "2A",
            "6A",
            "7B"
        ],
        "times": {
            "daiichikyoten": "14:41",
            "arisaka": "14:50",
            "yoshino": "15:32",
            "mizutani": "15:50",
            "hamamatsu": "16:28",
            "ida": "17:02",
            "shinmatsumoto": "17:26",
            "nagano": "17:38"
        }
    },
    {
        "id": "1115",
        "name": "すいせい115号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "daiichikyoten": "14:51",
            "arisaka": "15:00",
            "yoshino": "15:42",
            "mizutani": "16:00",
            "hamamatsu": "16:38",
            "ida": "17:12",
            "shinmatsumoto": "17:38",
            "nagano": "17:50"
        }
    },
    {
        "id": "1117",
        "name": "すいせい117号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "daiichikyoten": "15:01",
            "arisaka": "15:10",
            "yoshino": "15:52",
            "mizutani": "16:10",
            "hamamatsu": "16:48",
            "ida": "17:22",
            "shinmatsumoto": "17:46",
            "nagano": "17:58"
        }
    },
    {
        "id": "1119",
        "name": "すいせい119号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "daiichikyoten": "15:11",
            "arisaka": "15:20",
            "yoshino": "16:02",
            "mizutani": "16:20",
            "hamamatsu": "16:58",
            "ida": "17:32",
            "shinmatsumoto": "17:57",
            "nagano": "18:10"
        }
    },
    {
        "id": "1121",
        "name": "すいせい121号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5B",
            "6A",
            "6B",
            "7B",
            "8B"
        ],
        "times": {
            "daiichikyoten": "15:21",
            "arisaka": "15:30",
            "yoshino": "16:12",
            "mizutani": "16:30",
            "hamamatsu": "17:08",
            "ida": "17:42",
            "shinmatsumoto": "18:06",
            "nagano": "18:18"
        }
    },
    {
        "id": "2025",
        "name": "てんりゅう25号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "mizutani": "16:31",
            "kitakuratousai": "16:39",
            "hamamatsu": "17:12",
            "nishikashima": "17:20",
            "shinsakuma": "17:30",
            "tenryuhiraoka": "17:41",
            "achihirugamionsen": "17:54",
            "ida": "18:06",
            "inaoshima": "18:14",
            "komagane": "18:24",
            "inashi": "18:33",
            "shinshiojiri": "18:43",
            "shinmatsumoto": "18:49",
            "shinonoi": "19:04",
            "nagano": "19:09"
        }
    },
    {
        "id": "1123",
        "name": "すいせい123号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1A",
            "1B",
            "3A",
            "4B",
            "5A",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "15:31",
            "arisaka": "15:40",
            "yoshino": "16:22",
            "mizutani": "16:40",
            "hamamatsu": "17:18",
            "ida": "17:53",
            "shinmatsumoto": "18:17",
            "nagano": "18:29"
        }
    },
    {
        "id": "1125",
        "name": "すいせい125号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1B",
            "5B",
            "6A",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "15:41",
            "arisaka": "15:50",
            "yoshino": "16:32",
            "mizutani": "16:50",
            "hamamatsu": "17:28",
            "ida": "18:02",
            "shinmatsumoto": "18:26",
            "nagano": "18:38"
        }
    },
    {
        "id": "1127",
        "name": "すいせい127号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "2A",
            "2B",
            "4A",
            "7A"
        ],
        "times": {
            "daiichikyoten": "15:51",
            "arisaka": "16:00",
            "yoshino": "16:42",
            "mizutani": "17:00",
            "hamamatsu": "17:38",
            "ida": "18:12",
            "shinmatsumoto": "18:38",
            "nagano": "18:50"
        }
    },
    {
        "id": "1129",
        "name": "すいせい129号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4B",
            "5A",
            "5B",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "16:01",
            "arisaka": "16:10",
            "yoshino": "16:52",
            "mizutani": "17:10",
            "hamamatsu": "17:48",
            "ida": "18:22",
            "shinmatsumoto": "18:46",
            "nagano": "18:58"
        }
    },
    {
        "id": "1131",
        "name": "すいせい131号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "16:11",
            "arisaka": "16:20",
            "yoshino": "17:02",
            "mizutani": "17:20",
            "hamamatsu": "17:58",
            "ida": "18:32",
            "shinmatsumoto": "18:57",
            "nagano": "19:10"
        }
    },
    {
        "id": "1133",
        "name": "すいせい133号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "2A",
            "4A",
            "5B",
            "8A"
        ],
        "times": {
            "daiichikyoten": "16:21",
            "arisaka": "16:30",
            "yoshino": "17:12",
            "mizutani": "17:30",
            "hamamatsu": "18:08",
            "ida": "18:42",
            "shinmatsumoto": "19:06",
            "nagano": "19:18"
        }
    },
    {
        "id": "2027",
        "name": "てんりゅう27号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "2A",
            "3B",
            "4A",
            "6A",
            "7B",
            "8B"
        ],
        "times": {
            "mizutani": "17:31",
            "kitakuratousai": "17:39",
            "hamamatsu": "18:12",
            "nishikashima": "18:20",
            "shinsakuma": "18:30",
            "tenryuhiraoka": "18:41",
            "achihirugamionsen": "18:54",
            "ida": "19:06",
            "inaoshima": "19:14",
            "komagane": "19:24",
            "inashi": "19:33",
            "shinshiojiri": "19:43",
            "shinmatsumoto": "19:49",
            "shinonoi": "20:04",
            "nagano": "20:09"
        }
    },
    {
        "id": "1135",
        "name": "すいせい135号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "4A",
            "5B"
        ],
        "times": {
            "daiichikyoten": "16:31",
            "arisaka": "16:40",
            "yoshino": "17:22",
            "mizutani": "17:40",
            "hamamatsu": "18:18",
            "ida": "18:53",
            "shinmatsumoto": "19:17",
            "nagano": "19:29"
        }
    },
    {
        "id": "1137",
        "name": "すいせい137号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "4B",
            "5A",
            "6A"
        ],
        "times": {
            "daiichikyoten": "16:41",
            "arisaka": "16:50",
            "yoshino": "17:32",
            "mizutani": "17:50",
            "hamamatsu": "18:28",
            "ida": "19:02",
            "shinmatsumoto": "19:26",
            "nagano": "19:38"
        }
    },
    {
        "id": "1139",
        "name": "すいせい139号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "16:51",
            "arisaka": "17:00",
            "yoshino": "17:42",
            "mizutani": "18:00",
            "hamamatsu": "18:38",
            "ida": "19:12",
            "shinmatsumoto": "19:38",
            "nagano": "19:50"
        }
    },
    {
        "id": "1141",
        "name": "すいせい141号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "8A"
        ],
        "times": {
            "daiichikyoten": "17:01",
            "arisaka": "17:10",
            "yoshino": "17:52",
            "mizutani": "18:10",
            "hamamatsu": "18:48",
            "ida": "19:22",
            "shinmatsumoto": "19:46",
            "nagano": "19:58"
        }
    },
    {
        "id": "1143",
        "name": "すいせい143号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "5B",
            "6A",
            "6B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "17:11",
            "arisaka": "17:20",
            "yoshino": "18:02",
            "mizutani": "18:20",
            "hamamatsu": "18:58",
            "ida": "19:32",
            "shinmatsumoto": "19:57",
            "nagano": "20:10"
        }
    },
    {
        "id": "1145",
        "name": "すいせい145号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "2A",
            "6A",
            "6B",
            "8A"
        ],
        "times": {
            "daiichikyoten": "17:21",
            "arisaka": "17:30",
            "yoshino": "18:12",
            "mizutani": "18:30",
            "hamamatsu": "19:08",
            "ida": "19:42",
            "shinmatsumoto": "20:06",
            "nagano": "20:18"
        }
    },
    {
        "id": "2029",
        "name": "てんりゅう29号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "mizutani": "18:31",
            "kitakuratousai": "18:39",
            "hamamatsu": "19:12",
            "nishikashima": "19:20",
            "shinsakuma": "19:30",
            "tenryuhiraoka": "19:41",
            "achihirugamionsen": "19:54",
            "ida": "20:06",
            "inaoshima": "20:14",
            "komagane": "20:24",
            "inashi": "20:33",
            "shinshiojiri": "20:43",
            "shinmatsumoto": "20:49",
            "shinonoi": "21:04",
            "nagano": "21:09"
        }
    },
    {
        "id": "1147",
        "name": "すいせい147号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "2A",
            "2B",
            "3A",
            "3B",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "17:31",
            "arisaka": "17:40",
            "yoshino": "18:22",
            "mizutani": "18:40",
            "hamamatsu": "19:18",
            "ida": "19:53",
            "shinmatsumoto": "20:17",
            "nagano": "20:29"
        }
    },
    {
        "id": "1149",
        "name": "すいせい149号",
        "seats": {
            "total": 16,
            "reserved": 13
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4B",
            "5A",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A"
        ],
        "times": {
            "daiichikyoten": "17:41",
            "arisaka": "17:50",
            "yoshino": "18:32",
            "mizutani": "18:50",
            "hamamatsu": "19:28",
            "ida": "20:02",
            "shinmatsumoto": "20:26",
            "nagano": "20:38"
        }
    },
    {
        "id": "1151",
        "name": "すいせい151号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "4A",
            "5A",
            "7B"
        ],
        "times": {
            "daiichikyoten": "17:51",
            "arisaka": "18:00",
            "yoshino": "18:42",
            "mizutani": "19:00",
            "hamamatsu": "19:38",
            "ida": "20:12",
            "shinmatsumoto": "20:38",
            "nagano": "20:50"
        }
    },
    {
        "id": "1153",
        "name": "すいせい153号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "1B",
            "4B",
            "5A",
            "5B",
            "7B",
            "8B"
        ],
        "times": {
            "daiichikyoten": "18:01",
            "arisaka": "18:10",
            "yoshino": "18:52",
            "mizutani": "19:10",
            "hamamatsu": "19:48",
            "ida": "20:22",
            "shinmatsumoto": "20:46",
            "nagano": "20:58"
        }
    },
    {
        "id": "1155",
        "name": "すいせい155号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2B",
            "5B",
            "6B",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "18:11",
            "arisaka": "18:20",
            "yoshino": "19:02",
            "mizutani": "19:20",
            "hamamatsu": "19:58",
            "ida": "20:32",
            "shinmatsumoto": "20:57",
            "nagano": "21:10"
        }
    },
    {
        "id": "1157",
        "name": "すいせい157号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "18:21",
            "arisaka": "18:30",
            "yoshino": "19:12",
            "mizutani": "19:30",
            "hamamatsu": "20:08",
            "ida": "20:42",
            "shinmatsumoto": "21:06",
            "nagano": "21:18"
        }
    },
    {
        "id": "2031",
        "name": "てんりゅう31号",
        "seats": {
            "total": 16,
            "reserved": 13
        },
        "reservedRooms": [
            "1A",
            "2A",
            "2B",
            "3A",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "mizutani": "19:31",
            "kitakuratousai": "19:39",
            "hamamatsu": "20:12",
            "nishikashima": "20:20",
            "shinsakuma": "20:30",
            "tenryuhiraoka": "20:41",
            "achihirugamionsen": "20:54",
            "ida": "21:06",
            "inaoshima": "21:14",
            "komagane": "21:24",
            "inashi": "21:33",
            "shinshiojiri": "21:43",
            "shinmatsumoto": "21:49",
            "shinonoi": "22:04",
            "nagano": "22:09"
        }
    },
    {
        "id": "1159",
        "name": "すいせい159号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "3B",
            "4A",
            "5A",
            "5B",
            "6A",
            "8A"
        ],
        "times": {
            "daiichikyoten": "18:31",
            "arisaka": "18:40",
            "yoshino": "19:22",
            "mizutani": "19:40",
            "hamamatsu": "20:18",
            "ida": "20:53",
            "shinmatsumoto": "21:17",
            "nagano": "21:29"
        }
    },
    {
        "id": "1161",
        "name": "すいせい161号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "18:41",
            "arisaka": "18:50",
            "yoshino": "19:32",
            "mizutani": "19:50",
            "hamamatsu": "20:28",
            "ida": "21:02",
            "shinmatsumoto": "21:26",
            "nagano": "21:38"
        }
    },
    {
        "id": "1163",
        "name": "すいせい163号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2B",
            "3A",
            "4A",
            "7A",
            "7B"
        ],
        "times": {
            "daiichikyoten": "18:51",
            "arisaka": "19:00",
            "yoshino": "19:42",
            "mizutani": "20:00",
            "hamamatsu": "20:38",
            "ida": "21:12",
            "shinmatsumoto": "21:38",
            "nagano": "21:50"
        }
    },
    {
        "id": "1165",
        "name": "すいせい165号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3B",
            "4B",
            "5A",
            "6A",
            "6B",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "daiichikyoten": "19:01",
            "arisaka": "19:10",
            "yoshino": "19:52",
            "mizutani": "20:10",
            "hamamatsu": "20:48",
            "ida": "21:22",
            "shinmatsumoto": "21:46",
            "nagano": "21:58"
        }
    },
    {
        "id": "1167",
        "name": "すいせい167号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "4B",
            "5B",
            "6A",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "19:11",
            "arisaka": "19:20",
            "yoshino": "20:02",
            "mizutani": "20:20",
            "hamamatsu": "20:58",
            "ida": "21:32",
            "shinmatsumoto": "21:57",
            "nagano": "22:10"
        }
    },
    {
        "id": "1169",
        "name": "すいせい169号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "19:21",
            "arisaka": "19:30",
            "yoshino": "20:12",
            "mizutani": "20:30",
            "hamamatsu": "21:08",
            "ida": "21:42",
            "shinmatsumoto": "22:06",
            "nagano": "22:18"
        }
    },
    {
        "id": "2033",
        "name": "てんりゅう33号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "7A"
        ],
        "times": {
            "mizutani": "20:31",
            "kitakuratousai": "20:39",
            "hamamatsu": "21:12",
            "nishikashima": "21:20",
            "shinsakuma": "21:30",
            "tenryuhiraoka": "21:41",
            "achihirugamionsen": "21:54",
            "ida": "22:06",
            "inaoshima": "22:14",
            "komagane": "22:24",
            "inashi": "22:33",
            "shinshiojiri": "22:43",
            "shinmatsumoto": "22:49",
            "shinonoi": "23:04",
            "nagano": "23:09"
        }
    },
    {
        "id": "1171",
        "name": "すいせい171号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "19:31",
            "arisaka": "19:40",
            "yoshino": "20:22",
            "mizutani": "20:40",
            "hamamatsu": "21:18",
            "ida": "21:53",
            "shinmatsumoto": "22:17",
            "nagano": "22:29"
        }
    },
    {
        "id": "1173",
        "name": "すいせい173号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "6B",
            "7A"
        ],
        "times": {
            "daiichikyoten": "19:41",
            "arisaka": "19:50",
            "yoshino": "20:32",
            "mizutani": "20:50",
            "hamamatsu": "21:28",
            "ida": "22:02",
            "shinmatsumoto": "22:26",
            "nagano": "22:38"
        }
    },
    {
        "id": "1175",
        "name": "すいせい175号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1A",
            "2B",
            "4B",
            "5B",
            "8A"
        ],
        "times": {
            "daiichikyoten": "19:51",
            "arisaka": "20:00",
            "yoshino": "20:42",
            "mizutani": "21:00",
            "hamamatsu": "21:38",
            "ida": "22:12",
            "shinmatsumoto": "22:38",
            "nagano": "22:50"
        }
    },
    {
        "id": "1177",
        "name": "すいせい177号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1A",
            "2A",
            "2B",
            "4A",
            "6A",
            "6B",
            "7B",
            "8B"
        ],
        "times": {
            "daiichikyoten": "20:01",
            "arisaka": "20:10",
            "yoshino": "20:52",
            "mizutani": "21:10",
            "hamamatsu": "21:48",
            "ida": "22:22",
            "shinmatsumoto": "22:46",
            "nagano": "22:58"
        }
    },
    {
        "id": "1179",
        "name": "すいせい179号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1A",
            "2A",
            "2B",
            "3A",
            "3B",
            "4B",
            "5B",
            "6A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "20:11",
            "arisaka": "20:20",
            "yoshino": "21:02",
            "mizutani": "21:20",
            "hamamatsu": "21:58",
            "ida": "22:32",
            "shinmatsumoto": "22:57",
            "nagano": "23:10"
        }
    },
    {
        "id": "1181",
        "name": "すいせい181号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1A",
            "3B",
            "4B",
            "5B",
            "6B"
        ],
        "times": {
            "daiichikyoten": "20:21",
            "arisaka": "20:30",
            "yoshino": "21:12",
            "mizutani": "21:30",
            "hamamatsu": "22:08",
            "ida": "22:42",
            "shinmatsumoto": "23:06",
            "nagano": "23:18"
        }
    },
    {
        "id": "2035",
        "name": "てんりゅう35号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "3A",
            "3B",
            "4A",
            "4B",
            "5B",
            "6A",
            "6B",
            "7B",
            "8A"
        ],
        "times": {
            "mizutani": "21:31",
            "kitakuratousai": "21:39",
            "hamamatsu": "22:12",
            "nishikashima": "22:20",
            "shinsakuma": "22:30",
            "tenryuhiraoka": "22:41",
            "achihirugamionsen": "22:54",
            "ida": "23:06",
            "inaoshima": "23:14",
            "komagane": "23:24",
            "inashi": "23:33",
            "shinshiojiri": "23:43",
            "shinmatsumoto": "23:48"
        }
    },
    {
        "id": "1183",
        "name": "すいせい183号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "daiichikyoten": "20:31",
            "arisaka": "20:40",
            "yoshino": "21:22",
            "mizutani": "21:40",
            "hamamatsu": "22:17"
        }
    },
    {
        "id": "1185",
        "name": "すいせい185号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "8B"
        ],
        "times": {
            "daiichikyoten": "20:41",
            "arisaka": "20:50",
            "yoshino": "21:32",
            "mizutani": "21:50",
            "hamamatsu": "22:28",
            "ida": "23:02",
            "shinmatsumoto": "23:26",
            "nagano": "23:38"
        }
    },
    {
        "id": "1187",
        "name": "すいせい187号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "7A",
            "7B",
            "8A"
        ],
        "times": {
            "daiichikyoten": "20:51",
            "arisaka": "21:00",
            "yoshino": "21:42",
            "mizutani": "22:00",
            "hamamatsu": "22:37"
        }
    },
    {
        "id": "1189",
        "name": "すいせい189号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "21:01",
            "arisaka": "21:10",
            "yoshino": "21:52",
            "mizutani": "22:10",
            "hamamatsu": "22:48",
            "ida": "23:22",
            "shinmatsumoto": "23:46",
            "nagano": "23:58"
        }
    },
    {
        "id": "1191",
        "name": "すいせい191号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "1B",
            "5B",
            "6A",
            "6B"
        ],
        "times": {
            "daiichikyoten": "21:11",
            "arisaka": "21:20",
            "yoshino": "22:02",
            "mizutani": "22:20",
            "hamamatsu": "22:57"
        }
    },
    {
        "id": "1193",
        "name": "すいせい193号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "3B",
            "5A",
            "5B",
            "6A",
            "7A",
            "8A"
        ],
        "times": {
            "daiichikyoten": "21:21",
            "arisaka": "21:30",
            "yoshino": "22:12",
            "mizutani": "22:30",
            "hamamatsu": "23:07"
        }
    },
    {
        "id": "2037",
        "name": "てんりゅう37号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "3A",
            "4A",
            "4B",
            "8A",
            "8B"
        ],
        "times": {
            "mizutani": "22:32",
            "kitakuratousai": "22:40",
            "hamamatsu": "23:19",
            "nishikashima": "23:27",
            "shinsakuma": "23:36",
            "tenryuhiraoka": "23:47",
            "achihirugamionsen": "23:58"
        }
    },
    {
        "id": "1195",
        "name": "すいせい195号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "1B",
            "2A",
            "3A",
            "5A"
        ],
        "times": {
            "daiichikyoten": "21:31",
            "arisaka": "21:40",
            "yoshino": "22:22",
            "mizutani": "22:40",
            "hamamatsu": "23:18",
            "ida": "23:51"
        }
    },
    {
        "id": "1197",
        "name": "すいせい197号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "21:41",
            "arisaka": "21:50",
            "yoshino": "22:32",
            "mizutani": "22:50",
            "hamamatsu": "23:27"
        }
    },
    {
        "id": "1199",
        "name": "すいせい199号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "21:51",
            "arisaka": "22:00",
            "yoshino": "22:42",
            "mizutani": "23:00",
            "hamamatsu": "23:37"
        }
    },
    {
        "id": "1201",
        "name": "すいせい201号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1A",
            "3A",
            "4A",
            "4B",
            "8A"
        ],
        "times": {
            "daiichikyoten": "22:11",
            "arisaka": "22:20",
            "yoshino": "23:02",
            "mizutani": "23:20",
            "hamamatsu": "23:57"
        }
    },
    {
        "id": "1203",
        "name": "すいせい203号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "6A",
            "6B",
            "7A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "22:31",
            "arisaka": "22:40",
            "yoshino": "23:22",
            "mizutani": "23:39"
        }
    },
    {
        "id": "1205",
        "name": "すいせい205号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "daiichikyoten": "22:51",
            "arisaka": "23:00",
            "yoshino": "23:42",
            "mizutani": "23:59"
        }
    },
    {
        "id": "1002",
        "name": "すいせい2号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "2A",
            "3A",
            "4B",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "mizutani": "06:01",
            "yoshino": "06:19",
            "arisaka": "07:01",
            "daiichikyoten": "07:09"
        }
    },
    {
        "id": "1004",
        "name": "すいせい4号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1A",
            "2A",
            "2B",
            "3B",
            "4A",
            "7A",
            "7B",
            "8A"
        ],
        "times": {
            "nagano": "06:02",
            "shinmatsumoto": "06:15",
            "ida": "06:39",
            "hamamatsu": "07:13",
            "mizutani": "07:51",
            "yoshino": "08:09",
            "arisaka": "08:51",
            "daiichikyoten": "08:59"
        }
    },
    {
        "id": "2002",
        "name": "てんりゅう2号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "achihirugamionsen": "06:02",
            "tenryuhiraoka": "06:14",
            "shinsakuma": "06:25",
            "nishikashima": "06:34",
            "hamamatsu": "06:48",
            "kitakuratousai": "07:21",
            "mizutani": "07:28"
        }
    },
    {
        "id": "1006",
        "name": "すいせい6号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "1A",
            "2B",
            "8A"
        ],
        "times": {
            "hamamatsu": "06:03",
            "mizutani": "06:41",
            "yoshino": "06:59",
            "arisaka": "07:41",
            "daiichikyoten": "07:49"
        }
    },
    {
        "id": "1008",
        "name": "すいせい8号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "6A",
            "6B",
            "7A",
            "8A"
        ],
        "times": {
            "ida": "06:09",
            "hamamatsu": "06:43",
            "mizutani": "07:21",
            "yoshino": "07:39",
            "arisaka": "08:21",
            "daiichikyoten": "08:29"
        }
    },
    {
        "id": "2004",
        "name": "てんりゅう4号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "1B",
            "6A",
            "6B"
        ],
        "times": {
            "shinmatsumoto": "06:12",
            "shinshiojiri": "06:19",
            "inashi": "06:28",
            "komagane": "06:38",
            "inaoshima": "06:46",
            "ida": "06:54",
            "achihirugamionsen": "07:07",
            "tenryuhiraoka": "07:19",
            "shinsakuma": "07:32",
            "nishikashima": "07:41",
            "hamamatsu": "07:49",
            "kitakuratousai": "08:22",
            "mizutani": "08:29"
        }
    },
    {
        "id": "1010",
        "name": "すいせい10号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "5B",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "mizutani": "06:21",
            "yoshino": "06:39",
            "arisaka": "07:21",
            "daiichikyoten": "07:29"
        }
    },
    {
        "id": "1012",
        "name": "すいせい12号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "2B",
            "7A"
        ],
        "times": {
            "nagano": "06:22",
            "shinmatsumoto": "06:35",
            "ida": "06:59",
            "hamamatsu": "07:33",
            "mizutani": "08:11",
            "yoshino": "08:29",
            "arisaka": "09:11",
            "daiichikyoten": "09:19"
        }
    },
    {
        "id": "1014",
        "name": "すいせい14号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "1A",
            "4A",
            "5A"
        ],
        "times": {
            "hamamatsu": "06:23",
            "mizutani": "07:01",
            "yoshino": "07:19",
            "arisaka": "08:01",
            "daiichikyoten": "08:09"
        }
    },
    {
        "id": "1016",
        "name": "すいせい16号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "2A",
            "5A",
            "6A",
            "6B",
            "8A",
            "8B"
        ],
        "times": {
            "hamamatsu": "06:33",
            "mizutani": "07:11",
            "yoshino": "07:29",
            "arisaka": "08:11",
            "daiichikyoten": "08:19"
        }
    },
    {
        "id": "1018",
        "name": "すいせい18号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "2B",
            "3B",
            "5B",
            "6A",
            "7A",
            "8B"
        ],
        "times": {
            "nagano": "06:42",
            "shinmatsumoto": "06:55",
            "ida": "07:19",
            "hamamatsu": "07:53",
            "mizutani": "08:31",
            "yoshino": "08:49",
            "arisaka": "09:31",
            "daiichikyoten": "09:39"
        }
    },
    {
        "id": "1020",
        "name": "すいせい20号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "2A",
            "3A",
            "5B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "06:50",
            "shinmatsumoto": "07:05",
            "ida": "07:29",
            "hamamatsu": "08:03",
            "mizutani": "08:41",
            "yoshino": "08:59",
            "arisaka": "09:41",
            "daiichikyoten": "09:49"
        }
    },
    {
        "id": "2006",
        "name": "てんりゅう6号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1B",
            "2A",
            "2B",
            "3B",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7B",
            "8B"
        ],
        "times": {
            "nagano": "06:51",
            "shinonoi": "06:57",
            "shinmatsumoto": "07:12",
            "shinshiojiri": "07:19",
            "inashi": "07:28",
            "komagane": "07:38",
            "inaoshima": "07:46",
            "ida": "07:54",
            "achihirugamionsen": "08:07",
            "tenryuhiraoka": "08:19",
            "shinsakuma": "08:32",
            "nishikashima": "08:41",
            "hamamatsu": "08:49",
            "kitakuratousai": "09:22",
            "mizutani": "09:29"
        }
    },
    {
        "id": "1022",
        "name": "すいせい22号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "2A",
            "4A",
            "5A",
            "6A",
            "7B"
        ],
        "times": {
            "hamamatsu": "06:53",
            "mizutani": "07:31",
            "yoshino": "07:49",
            "arisaka": "08:31",
            "daiichikyoten": "08:39"
        }
    },
    {
        "id": "1024",
        "name": "すいせい24号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "07:02",
            "shinmatsumoto": "07:15",
            "ida": "07:39",
            "hamamatsu": "08:13",
            "mizutani": "08:51",
            "yoshino": "09:09",
            "arisaka": "09:51",
            "daiichikyoten": "09:59"
        }
    },
    {
        "id": "1026",
        "name": "すいせい26号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "2B",
            "3A",
            "4A",
            "5A",
            "5B",
            "6B",
            "8A"
        ],
        "times": {
            "hamamatsu": "07:03",
            "mizutani": "07:41",
            "yoshino": "07:59",
            "arisaka": "08:41",
            "daiichikyoten": "08:49"
        }
    },
    {
        "id": "1028",
        "name": "すいせい28号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "2B",
            "3B",
            "4B",
            "5A",
            "7A",
            "8B"
        ],
        "times": {
            "nagano": "07:10",
            "shinmatsumoto": "07:23",
            "ida": "07:49",
            "hamamatsu": "08:23",
            "mizutani": "09:01",
            "yoshino": "09:19",
            "arisaka": "10:01",
            "daiichikyoten": "10:09"
        }
    },
    {
        "id": "1030",
        "name": "すいせい30号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "07:22",
            "shinmatsumoto": "07:35",
            "ida": "07:59",
            "hamamatsu": "08:33",
            "mizutani": "09:11",
            "yoshino": "09:29",
            "arisaka": "10:11",
            "daiichikyoten": "10:19"
        }
    },
    {
        "id": "1032",
        "name": "すいせい32号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "2A",
            "2B",
            "3A",
            "3B",
            "4B",
            "6B",
            "7A",
            "7B"
        ],
        "times": {
            "hamamatsu": "07:23",
            "mizutani": "08:01",
            "yoshino": "08:19",
            "arisaka": "09:01",
            "daiichikyoten": "09:09"
        }
    },
    {
        "id": "1034",
        "name": "すいせい34号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3B",
            "4A",
            "5A",
            "6B",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "07:30",
            "shinmatsumoto": "07:43",
            "ida": "08:07",
            "hamamatsu": "08:43",
            "mizutani": "09:21",
            "yoshino": "09:39",
            "arisaka": "10:21",
            "daiichikyoten": "10:29"
        }
    },
    {
        "id": "1036",
        "name": "すいせい36号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "2A"
        ],
        "times": {
            "nagano": "07:42",
            "shinmatsumoto": "07:55",
            "ida": "08:19",
            "hamamatsu": "08:53",
            "mizutani": "09:31",
            "yoshino": "09:49",
            "arisaka": "10:31",
            "daiichikyoten": "10:39"
        }
    },
    {
        "id": "1038",
        "name": "すいせい38号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "1B",
            "3A",
            "3B",
            "4B"
        ],
        "times": {
            "hamamatsu": "07:43",
            "mizutani": "08:21",
            "yoshino": "08:39",
            "arisaka": "09:21",
            "daiichikyoten": "09:29"
        }
    },
    {
        "id": "1040",
        "name": "すいせい40号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "6B",
            "7B",
            "8A"
        ],
        "times": {
            "nagano": "07:50",
            "shinmatsumoto": "08:05",
            "ida": "08:29",
            "hamamatsu": "09:03",
            "mizutani": "09:41",
            "yoshino": "09:59",
            "arisaka": "10:41",
            "daiichikyoten": "10:49"
        }
    },
    {
        "id": "2008",
        "name": "てんりゅう8号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "07:51",
            "shinonoi": "07:57",
            "shinmatsumoto": "08:12",
            "shinshiojiri": "08:19",
            "inashi": "08:28",
            "komagane": "08:38",
            "inaoshima": "08:46",
            "ida": "08:54",
            "achihirugamionsen": "09:07",
            "tenryuhiraoka": "09:19",
            "shinsakuma": "09:32",
            "nishikashima": "09:41",
            "hamamatsu": "09:49",
            "kitakuratousai": "10:22",
            "mizutani": "10:29"
        }
    },
    {
        "id": "1042",
        "name": "すいせい42号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1B",
            "3A",
            "3B",
            "4B",
            "8A"
        ],
        "times": {
            "nagano": "08:02",
            "shinmatsumoto": "08:15",
            "ida": "08:39",
            "hamamatsu": "09:13",
            "mizutani": "09:51",
            "yoshino": "10:09",
            "arisaka": "10:51",
            "daiichikyoten": "10:59"
        }
    },
    {
        "id": "1044",
        "name": "すいせい44号",
        "seats": {
            "total": 16,
            "reserved": 13
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "4A",
            "4B",
            "5A",
            "5B",
            "6B",
            "7A",
            "7B",
            "8A"
        ],
        "times": {
            "nagano": "08:10",
            "shinmatsumoto": "08:23",
            "ida": "08:49",
            "hamamatsu": "09:23",
            "mizutani": "10:01",
            "yoshino": "10:19",
            "arisaka": "11:01",
            "daiichikyoten": "11:09"
        }
    },
    {
        "id": "1046",
        "name": "すいせい46号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "2A",
            "2B",
            "3B",
            "6B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "08:22",
            "shinmatsumoto": "08:35",
            "ida": "08:59",
            "hamamatsu": "09:33",
            "mizutani": "10:11",
            "yoshino": "10:29",
            "arisaka": "11:11",
            "daiichikyoten": "11:19"
        }
    },
    {
        "id": "1048",
        "name": "すいせい48号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "1A",
            "4A"
        ],
        "times": {
            "nagano": "08:30",
            "shinmatsumoto": "08:43",
            "ida": "09:07",
            "hamamatsu": "09:43",
            "mizutani": "10:21",
            "yoshino": "10:39",
            "arisaka": "11:21",
            "daiichikyoten": "11:29"
        }
    },
    {
        "id": "1050",
        "name": "すいせい50号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "3B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "08:42",
            "shinmatsumoto": "08:55",
            "ida": "09:19",
            "hamamatsu": "09:53",
            "mizutani": "10:31",
            "yoshino": "10:49",
            "arisaka": "11:31",
            "daiichikyoten": "11:39"
        }
    },
    {
        "id": "1052",
        "name": "すいせい52号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "08:50",
            "shinmatsumoto": "09:05",
            "ida": "09:29",
            "hamamatsu": "10:03",
            "mizutani": "10:41",
            "yoshino": "10:59",
            "arisaka": "11:41",
            "daiichikyoten": "11:49"
        }
    },
    {
        "id": "2010",
        "name": "てんりゅう10号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "2B",
            "3A",
            "4B",
            "5A",
            "6A",
            "6B",
            "8A"
        ],
        "times": {
            "nagano": "08:51",
            "shinonoi": "08:57",
            "shinmatsumoto": "09:12",
            "shinshiojiri": "09:19",
            "inashi": "09:28",
            "komagane": "09:38",
            "inaoshima": "09:46",
            "ida": "09:54",
            "achihirugamionsen": "10:07",
            "tenryuhiraoka": "10:19",
            "shinsakuma": "10:32",
            "nishikashima": "10:41",
            "hamamatsu": "10:49",
            "kitakuratousai": "11:22",
            "mizutani": "11:29"
        }
    },
    {
        "id": "1054",
        "name": "すいせい54号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "nagano": "09:02",
            "shinmatsumoto": "09:15",
            "ida": "09:39",
            "hamamatsu": "10:13",
            "mizutani": "10:51",
            "yoshino": "11:09",
            "arisaka": "11:51",
            "daiichikyoten": "11:59"
        }
    },
    {
        "id": "1056",
        "name": "すいせい56号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "2B",
            "3B",
            "4A",
            "4B",
            "5B"
        ],
        "times": {
            "nagano": "09:10",
            "shinmatsumoto": "09:23",
            "ida": "09:49",
            "hamamatsu": "10:23",
            "mizutani": "11:01",
            "yoshino": "11:19",
            "arisaka": "12:01",
            "daiichikyoten": "12:09"
        }
    },
    {
        "id": "1058",
        "name": "すいせい58号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "4A",
            "7B"
        ],
        "times": {
            "nagano": "09:22",
            "shinmatsumoto": "09:35",
            "ida": "09:59",
            "hamamatsu": "10:33",
            "mizutani": "11:11",
            "yoshino": "11:29",
            "arisaka": "12:11",
            "daiichikyoten": "12:19"
        }
    },
    {
        "id": "1060",
        "name": "すいせい60号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "nagano": "09:30",
            "shinmatsumoto": "09:43",
            "ida": "10:07",
            "hamamatsu": "10:43",
            "mizutani": "11:21",
            "yoshino": "11:39",
            "arisaka": "12:21",
            "daiichikyoten": "12:29"
        }
    },
    {
        "id": "1062",
        "name": "すいせい62号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1A",
            "2A",
            "5A",
            "6A",
            "7B"
        ],
        "times": {
            "nagano": "09:42",
            "shinmatsumoto": "09:55",
            "ida": "10:19",
            "hamamatsu": "10:53",
            "mizutani": "11:31",
            "yoshino": "11:49",
            "arisaka": "12:31",
            "daiichikyoten": "12:39"
        }
    },
    {
        "id": "1064",
        "name": "すいせい64号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "nagano": "09:50",
            "shinmatsumoto": "10:05",
            "ida": "10:29",
            "hamamatsu": "11:03",
            "mizutani": "11:41",
            "yoshino": "11:59",
            "arisaka": "12:41",
            "daiichikyoten": "12:49"
        }
    },
    {
        "id": "2012",
        "name": "てんりゅう12号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1A",
            "3B",
            "4A",
            "5A",
            "5B"
        ],
        "times": {
            "nagano": "09:51",
            "shinonoi": "09:57",
            "shinmatsumoto": "10:12",
            "shinshiojiri": "10:19",
            "inashi": "10:28",
            "komagane": "10:38",
            "inaoshima": "10:46",
            "ida": "10:54",
            "achihirugamionsen": "11:07",
            "tenryuhiraoka": "11:19",
            "shinsakuma": "11:32",
            "nishikashima": "11:41",
            "hamamatsu": "11:49",
            "kitakuratousai": "12:22",
            "mizutani": "12:29"
        }
    },
    {
        "id": "1066",
        "name": "すいせい66号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "10:02",
            "shinmatsumoto": "10:15",
            "ida": "10:39",
            "hamamatsu": "11:13",
            "mizutani": "11:51",
            "yoshino": "12:09",
            "arisaka": "12:51",
            "daiichikyoten": "12:59"
        }
    },
    {
        "id": "1068",
        "name": "すいせい68号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "5A",
            "6A",
            "7B"
        ],
        "times": {
            "nagano": "10:10",
            "shinmatsumoto": "10:23",
            "ida": "10:49",
            "hamamatsu": "11:23",
            "mizutani": "12:01",
            "yoshino": "12:19",
            "arisaka": "13:01",
            "daiichikyoten": "13:09"
        }
    },
    {
        "id": "1070",
        "name": "すいせい70号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "8B"
        ],
        "times": {
            "nagano": "10:22",
            "shinmatsumoto": "10:35",
            "ida": "10:59",
            "hamamatsu": "11:33",
            "mizutani": "12:11",
            "yoshino": "12:29",
            "arisaka": "13:11",
            "daiichikyoten": "13:19"
        }
    },
    {
        "id": "1072",
        "name": "すいせい72号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "10:30",
            "shinmatsumoto": "10:43",
            "ida": "11:07",
            "hamamatsu": "11:43",
            "mizutani": "12:21",
            "yoshino": "12:39",
            "arisaka": "13:21",
            "daiichikyoten": "13:29"
        }
    },
    {
        "id": "1074",
        "name": "すいせい74号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "8A"
        ],
        "times": {
            "nagano": "10:42",
            "shinmatsumoto": "10:55",
            "ida": "11:19",
            "hamamatsu": "11:53",
            "mizutani": "12:31",
            "yoshino": "12:49",
            "arisaka": "13:31",
            "daiichikyoten": "13:39"
        }
    },
    {
        "id": "1076",
        "name": "すいせい76号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "nagano": "10:50",
            "shinmatsumoto": "11:05",
            "ida": "11:29",
            "hamamatsu": "12:03",
            "mizutani": "12:41",
            "yoshino": "12:59",
            "arisaka": "13:41",
            "daiichikyoten": "13:49"
        }
    },
    {
        "id": "2014",
        "name": "てんりゅう14号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "2B",
            "3B",
            "4A",
            "6B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "10:51",
            "shinonoi": "10:57",
            "shinmatsumoto": "11:12",
            "shinshiojiri": "11:19",
            "inashi": "11:28",
            "komagane": "11:38",
            "inaoshima": "11:46",
            "ida": "11:54",
            "achihirugamionsen": "12:07",
            "tenryuhiraoka": "12:19",
            "shinsakuma": "12:32",
            "nishikashima": "12:41",
            "hamamatsu": "12:49",
            "kitakuratousai": "13:22",
            "mizutani": "13:29"
        }
    },
    {
        "id": "1078",
        "name": "すいせい78号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "1B",
            "3A",
            "4B",
            "6B",
            "7A",
            "7B"
        ],
        "times": {
            "nagano": "11:02",
            "shinmatsumoto": "11:15",
            "ida": "11:39",
            "hamamatsu": "12:13",
            "mizutani": "12:51",
            "yoshino": "13:09",
            "arisaka": "13:51",
            "daiichikyoten": "13:59"
        }
    },
    {
        "id": "1080",
        "name": "すいせい80号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "11:10",
            "shinmatsumoto": "11:23",
            "ida": "11:49",
            "hamamatsu": "12:23",
            "mizutani": "13:01",
            "yoshino": "13:19",
            "arisaka": "14:01",
            "daiichikyoten": "14:09"
        }
    },
    {
        "id": "1082",
        "name": "すいせい82号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1A",
            "1B",
            "3A",
            "4B",
            "6B",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "11:22",
            "shinmatsumoto": "11:35",
            "ida": "11:59",
            "hamamatsu": "12:33",
            "mizutani": "13:11",
            "yoshino": "13:29",
            "arisaka": "14:11",
            "daiichikyoten": "14:19"
        }
    },
    {
        "id": "1084",
        "name": "すいせい84号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "11:30",
            "shinmatsumoto": "11:43",
            "ida": "12:07",
            "hamamatsu": "12:43",
            "mizutani": "13:21",
            "yoshino": "13:39",
            "arisaka": "14:21",
            "daiichikyoten": "14:29"
        }
    },
    {
        "id": "1086",
        "name": "すいせい86号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "11:42",
            "shinmatsumoto": "11:55",
            "ida": "12:19",
            "hamamatsu": "12:53",
            "mizutani": "13:31",
            "yoshino": "13:49",
            "arisaka": "14:31",
            "daiichikyoten": "14:39"
        }
    },
    {
        "id": "1088",
        "name": "すいせい88号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "2A",
            "3A",
            "3B",
            "4A",
            "6A",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "11:50",
            "shinmatsumoto": "12:05",
            "ida": "12:29",
            "hamamatsu": "13:03",
            "mizutani": "13:41",
            "yoshino": "13:59",
            "arisaka": "14:41",
            "daiichikyoten": "14:49"
        }
    },
    {
        "id": "2016",
        "name": "てんりゅう16号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "11:51",
            "shinonoi": "11:57",
            "shinmatsumoto": "12:12",
            "shinshiojiri": "12:19",
            "inashi": "12:28",
            "komagane": "12:38",
            "inaoshima": "12:46",
            "ida": "12:54",
            "achihirugamionsen": "13:07",
            "tenryuhiraoka": "13:19",
            "shinsakuma": "13:32",
            "nishikashima": "13:41",
            "hamamatsu": "13:49",
            "kitakuratousai": "14:22",
            "mizutani": "14:29"
        }
    },
    {
        "id": "1090",
        "name": "すいせい90号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "1B",
            "2B",
            "5B",
            "6A",
            "6B",
            "8B"
        ],
        "times": {
            "nagano": "12:02",
            "shinmatsumoto": "12:15",
            "ida": "12:39",
            "hamamatsu": "13:13",
            "mizutani": "13:51",
            "yoshino": "14:09",
            "arisaka": "14:51",
            "daiichikyoten": "14:59"
        }
    },
    {
        "id": "1092",
        "name": "すいせい92号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "12:10",
            "shinmatsumoto": "12:23",
            "ida": "12:49",
            "hamamatsu": "13:23",
            "mizutani": "14:01",
            "yoshino": "14:19",
            "arisaka": "15:01",
            "daiichikyoten": "15:09"
        }
    },
    {
        "id": "1094",
        "name": "すいせい94号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1A",
            "3B",
            "4A",
            "4B",
            "5A",
            "6A",
            "6B",
            "7B"
        ],
        "times": {
            "nagano": "12:22",
            "shinmatsumoto": "12:35",
            "ida": "12:59",
            "hamamatsu": "13:33",
            "mizutani": "14:11",
            "yoshino": "14:29",
            "arisaka": "15:11",
            "daiichikyoten": "15:19"
        }
    },
    {
        "id": "1096",
        "name": "すいせい96号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "4A",
            "4B",
            "5A",
            "6A",
            "6B",
            "7B"
        ],
        "times": {
            "nagano": "12:30",
            "shinmatsumoto": "12:43",
            "ida": "13:07",
            "hamamatsu": "13:43",
            "mizutani": "14:21",
            "yoshino": "14:39",
            "arisaka": "15:21",
            "daiichikyoten": "15:29"
        }
    },
    {
        "id": "1098",
        "name": "すいせい98号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1B",
            "2B",
            "4A",
            "5A",
            "5B",
            "6B",
            "7B",
            "8B"
        ],
        "times": {
            "nagano": "12:42",
            "shinmatsumoto": "12:55",
            "ida": "13:19",
            "hamamatsu": "13:53",
            "mizutani": "14:31",
            "yoshino": "14:49",
            "arisaka": "15:31",
            "daiichikyoten": "15:39"
        }
    },
    {
        "id": "1100",
        "name": "すいせい100号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "12:50",
            "shinmatsumoto": "13:05",
            "ida": "13:29",
            "hamamatsu": "14:03",
            "mizutani": "14:41",
            "yoshino": "14:59",
            "arisaka": "15:41",
            "daiichikyoten": "15:49"
        }
    },
    {
        "id": "2018",
        "name": "てんりゅう18号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "nagano": "12:51",
            "shinonoi": "12:57",
            "shinmatsumoto": "13:12",
            "shinshiojiri": "13:19",
            "inashi": "13:28",
            "komagane": "13:38",
            "inaoshima": "13:46",
            "ida": "13:54",
            "achihirugamionsen": "14:07",
            "tenryuhiraoka": "14:19",
            "shinsakuma": "14:32",
            "nishikashima": "14:41",
            "hamamatsu": "14:49",
            "kitakuratousai": "15:22",
            "mizutani": "15:29"
        }
    },
    {
        "id": "1102",
        "name": "すいせい102号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "nagano": "13:02",
            "shinmatsumoto": "13:15",
            "ida": "13:39",
            "hamamatsu": "14:13",
            "mizutani": "14:51",
            "yoshino": "15:09",
            "arisaka": "15:51",
            "daiichikyoten": "15:59"
        }
    },
    {
        "id": "1104",
        "name": "すいせい104号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1B",
            "2B",
            "3A",
            "3B",
            "7B"
        ],
        "times": {
            "nagano": "13:10",
            "shinmatsumoto": "13:23",
            "ida": "13:49",
            "hamamatsu": "14:23",
            "mizutani": "15:01",
            "yoshino": "15:19",
            "arisaka": "16:01",
            "daiichikyoten": "16:09"
        }
    },
    {
        "id": "1106",
        "name": "すいせい106号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1B",
            "2B",
            "4B",
            "5B",
            "7A"
        ],
        "times": {
            "nagano": "13:22",
            "shinmatsumoto": "13:35",
            "ida": "13:59",
            "hamamatsu": "14:33",
            "mizutani": "15:11",
            "yoshino": "15:29",
            "arisaka": "16:11",
            "daiichikyoten": "16:19"
        }
    },
    {
        "id": "1108",
        "name": "すいせい108号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1B",
            "2A",
            "3B",
            "4B",
            "5B",
            "6B",
            "7B",
            "8B"
        ],
        "times": {
            "nagano": "13:30",
            "shinmatsumoto": "13:43",
            "ida": "14:07",
            "hamamatsu": "14:43",
            "mizutani": "15:21",
            "yoshino": "15:39",
            "arisaka": "16:21",
            "daiichikyoten": "16:29"
        }
    },
    {
        "id": "1110",
        "name": "すいせい110号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "1A"
        ],
        "times": {
            "nagano": "13:42",
            "shinmatsumoto": "13:55",
            "ida": "14:19",
            "hamamatsu": "14:53",
            "mizutani": "15:31",
            "yoshino": "15:49",
            "arisaka": "16:31",
            "daiichikyoten": "16:39"
        }
    },
    {
        "id": "1112",
        "name": "すいせい112号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "1B",
            "4A",
            "7B",
            "8B"
        ],
        "times": {
            "nagano": "13:50",
            "shinmatsumoto": "14:05",
            "ida": "14:29",
            "hamamatsu": "15:03",
            "mizutani": "15:41",
            "yoshino": "15:59",
            "arisaka": "16:41",
            "daiichikyoten": "16:49"
        }
    },
    {
        "id": "2020",
        "name": "てんりゅう20号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1B",
            "2A",
            "3B",
            "4A",
            "4B",
            "5A",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "13:51",
            "shinonoi": "13:57",
            "shinmatsumoto": "14:12",
            "shinshiojiri": "14:19",
            "inashi": "14:28",
            "komagane": "14:38",
            "inaoshima": "14:46",
            "ida": "14:54",
            "achihirugamionsen": "15:07",
            "tenryuhiraoka": "15:19",
            "shinsakuma": "15:32",
            "nishikashima": "15:41",
            "hamamatsu": "15:49",
            "kitakuratousai": "16:22",
            "mizutani": "16:29"
        }
    },
    {
        "id": "1114",
        "name": "すいせい114号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "4A",
            "5A",
            "5B",
            "6A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "14:02",
            "shinmatsumoto": "14:15",
            "ida": "14:39",
            "hamamatsu": "15:13",
            "mizutani": "15:51",
            "yoshino": "16:09",
            "arisaka": "16:51",
            "daiichikyoten": "16:59"
        }
    },
    {
        "id": "1116",
        "name": "すいせい116号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "3A",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "14:10",
            "shinmatsumoto": "14:23",
            "ida": "14:49",
            "hamamatsu": "15:23",
            "mizutani": "16:01",
            "yoshino": "16:19",
            "arisaka": "17:01",
            "daiichikyoten": "17:09"
        }
    },
    {
        "id": "1118",
        "name": "すいせい118号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1B",
            "2A",
            "5A",
            "5B",
            "6A",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "14:22",
            "shinmatsumoto": "14:35",
            "ida": "14:59",
            "hamamatsu": "15:33",
            "mizutani": "16:11",
            "yoshino": "16:29",
            "arisaka": "17:11",
            "daiichikyoten": "17:19"
        }
    },
    {
        "id": "1120",
        "name": "すいせい120号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "4B",
            "5B",
            "6B",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "14:30",
            "shinmatsumoto": "14:43",
            "ida": "15:07",
            "hamamatsu": "15:43",
            "mizutani": "16:21",
            "yoshino": "16:39",
            "arisaka": "17:21",
            "daiichikyoten": "17:29"
        }
    },
    {
        "id": "1122",
        "name": "すいせい122号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "nagano": "14:42",
            "shinmatsumoto": "14:55",
            "ida": "15:19",
            "hamamatsu": "15:53",
            "mizutani": "16:31",
            "yoshino": "16:49",
            "arisaka": "17:31",
            "daiichikyoten": "17:39"
        }
    },
    {
        "id": "1124",
        "name": "すいせい124号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "14:50",
            "shinmatsumoto": "15:05",
            "ida": "15:29",
            "hamamatsu": "16:03",
            "mizutani": "16:41",
            "yoshino": "16:59",
            "arisaka": "17:41",
            "daiichikyoten": "17:49"
        }
    },
    {
        "id": "2022",
        "name": "てんりゅう22号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "3B",
            "4A",
            "5A",
            "5B",
            "6B",
            "8B"
        ],
        "times": {
            "nagano": "14:51",
            "shinonoi": "14:57",
            "shinmatsumoto": "15:12",
            "shinshiojiri": "15:19",
            "inashi": "15:28",
            "komagane": "15:38",
            "inaoshima": "15:46",
            "ida": "15:54",
            "achihirugamionsen": "16:07",
            "tenryuhiraoka": "16:19",
            "shinsakuma": "16:32",
            "nishikashima": "16:41",
            "hamamatsu": "16:49",
            "kitakuratousai": "17:22",
            "mizutani": "17:29"
        }
    },
    {
        "id": "1126",
        "name": "すいせい126号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "1A",
            "3A",
            "8A"
        ],
        "times": {
            "nagano": "15:02",
            "shinmatsumoto": "15:15",
            "ida": "15:39",
            "hamamatsu": "16:13",
            "mizutani": "16:51",
            "yoshino": "17:09",
            "arisaka": "17:51",
            "daiichikyoten": "17:59"
        }
    },
    {
        "id": "1128",
        "name": "すいせい128号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "1B",
            "7B"
        ],
        "times": {
            "nagano": "15:10",
            "shinmatsumoto": "15:23",
            "ida": "15:49",
            "hamamatsu": "16:23",
            "mizutani": "17:01",
            "yoshino": "17:19",
            "arisaka": "18:01",
            "daiichikyoten": "18:09"
        }
    },
    {
        "id": "1130",
        "name": "すいせい130号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "3A",
            "3B",
            "4A",
            "5B",
            "6B",
            "7B"
        ],
        "times": {
            "nagano": "15:22",
            "shinmatsumoto": "15:35",
            "ida": "15:59",
            "hamamatsu": "16:33",
            "mizutani": "17:11",
            "yoshino": "17:29",
            "arisaka": "18:11",
            "daiichikyoten": "18:19"
        }
    },
    {
        "id": "1132",
        "name": "すいせい132号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "2B",
            "3B"
        ],
        "times": {
            "nagano": "15:30",
            "shinmatsumoto": "15:43",
            "ida": "16:07",
            "hamamatsu": "16:43",
            "mizutani": "17:21",
            "yoshino": "17:39",
            "arisaka": "18:21",
            "daiichikyoten": "18:29"
        }
    },
    {
        "id": "1134",
        "name": "すいせい134号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "15:42",
            "shinmatsumoto": "15:55",
            "ida": "16:19",
            "hamamatsu": "16:53",
            "mizutani": "17:31",
            "yoshino": "17:49",
            "arisaka": "18:31",
            "daiichikyoten": "18:39"
        }
    },
    {
        "id": "1136",
        "name": "すいせい136号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "3B",
            "6B",
            "7B",
            "8A"
        ],
        "times": {
            "nagano": "15:50",
            "shinmatsumoto": "16:05",
            "ida": "16:29",
            "hamamatsu": "17:03",
            "mizutani": "17:41",
            "yoshino": "17:59",
            "arisaka": "18:41",
            "daiichikyoten": "18:49"
        }
    },
    {
        "id": "2024",
        "name": "てんりゅう24号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "4A",
            "6B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "15:51",
            "shinonoi": "15:57",
            "shinmatsumoto": "16:12",
            "shinshiojiri": "16:19",
            "inashi": "16:28",
            "komagane": "16:38",
            "inaoshima": "16:46",
            "ida": "16:54",
            "achihirugamionsen": "17:07",
            "tenryuhiraoka": "17:19",
            "shinsakuma": "17:32",
            "nishikashima": "17:41",
            "hamamatsu": "17:49",
            "kitakuratousai": "18:22",
            "mizutani": "18:29"
        }
    },
    {
        "id": "1138",
        "name": "すいせい138号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "2A",
            "2B",
            "4A",
            "4B",
            "5B",
            "6A",
            "6B",
            "7A"
        ],
        "times": {
            "nagano": "16:02",
            "shinmatsumoto": "16:15",
            "ida": "16:39",
            "hamamatsu": "17:13",
            "mizutani": "17:51",
            "yoshino": "18:09",
            "arisaka": "18:51",
            "daiichikyoten": "18:59"
        }
    },
    {
        "id": "1140",
        "name": "すいせい140号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "16:10",
            "shinmatsumoto": "16:23",
            "ida": "16:49",
            "hamamatsu": "17:23",
            "mizutani": "18:01",
            "yoshino": "18:19",
            "arisaka": "19:01",
            "daiichikyoten": "19:09"
        }
    },
    {
        "id": "1142",
        "name": "すいせい142号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "3A",
            "4A",
            "5B"
        ],
        "times": {
            "nagano": "16:22",
            "shinmatsumoto": "16:35",
            "ida": "16:59",
            "hamamatsu": "17:33",
            "mizutani": "18:11",
            "yoshino": "18:29",
            "arisaka": "19:11",
            "daiichikyoten": "19:19"
        }
    },
    {
        "id": "1144",
        "name": "すいせい144号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "2A",
            "4B",
            "5A",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "nagano": "16:30",
            "shinmatsumoto": "16:43",
            "ida": "17:07",
            "hamamatsu": "17:43",
            "mizutani": "18:21",
            "yoshino": "18:39",
            "arisaka": "19:21",
            "daiichikyoten": "19:29"
        }
    },
    {
        "id": "1146",
        "name": "すいせい146号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "nagano": "16:42",
            "shinmatsumoto": "16:55",
            "ida": "17:19",
            "hamamatsu": "17:53",
            "mizutani": "18:31",
            "yoshino": "18:49",
            "arisaka": "19:31",
            "daiichikyoten": "19:39"
        }
    },
    {
        "id": "1148",
        "name": "すいせい148号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "2A",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "7A",
            "7B"
        ],
        "times": {
            "nagano": "16:50",
            "shinmatsumoto": "17:05",
            "ida": "17:29",
            "hamamatsu": "18:03",
            "mizutani": "18:41",
            "yoshino": "18:59",
            "arisaka": "19:41",
            "daiichikyoten": "19:49"
        }
    },
    {
        "id": "2026",
        "name": "てんりゅう26号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "2B",
            "4A",
            "5A",
            "5B",
            "6A",
            "7A",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "16:51",
            "shinonoi": "16:57",
            "shinmatsumoto": "17:12",
            "shinshiojiri": "17:19",
            "inashi": "17:28",
            "komagane": "17:38",
            "inaoshima": "17:46",
            "ida": "17:54",
            "achihirugamionsen": "18:07",
            "tenryuhiraoka": "18:19",
            "shinsakuma": "18:32",
            "nishikashima": "18:41",
            "hamamatsu": "18:49",
            "kitakuratousai": "19:22",
            "mizutani": "19:29"
        }
    },
    {
        "id": "1150",
        "name": "すいせい150号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1A",
            "2B",
            "4B",
            "5B",
            "6B",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "17:02",
            "shinmatsumoto": "17:15",
            "ida": "17:39",
            "hamamatsu": "18:13",
            "mizutani": "18:51",
            "yoshino": "19:09",
            "arisaka": "19:51",
            "daiichikyoten": "19:59"
        }
    },
    {
        "id": "1152",
        "name": "すいせい152号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "17:10",
            "shinmatsumoto": "17:23",
            "ida": "17:49",
            "hamamatsu": "18:23",
            "mizutani": "19:01",
            "yoshino": "19:19",
            "arisaka": "20:01",
            "daiichikyoten": "20:09"
        }
    },
    {
        "id": "1154",
        "name": "すいせい154号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "17:22",
            "shinmatsumoto": "17:35",
            "ida": "17:59",
            "hamamatsu": "18:33",
            "mizutani": "19:11",
            "yoshino": "19:29",
            "arisaka": "20:11",
            "daiichikyoten": "20:19"
        }
    },
    {
        "id": "1156",
        "name": "すいせい156号",
        "seats": {
            "total": 16,
            "reserved": 14
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "17:30",
            "shinmatsumoto": "17:43",
            "ida": "18:07",
            "hamamatsu": "18:43",
            "mizutani": "19:21",
            "yoshino": "19:39",
            "arisaka": "20:21",
            "daiichikyoten": "20:29"
        }
    },
    {
        "id": "1158",
        "name": "すいせい158号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1A",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "nagano": "17:42",
            "shinmatsumoto": "17:55",
            "ida": "18:19",
            "hamamatsu": "18:53",
            "mizutani": "19:31",
            "yoshino": "19:49",
            "arisaka": "20:31",
            "daiichikyoten": "20:39"
        }
    },
    {
        "id": "1160",
        "name": "すいせい160号",
        "seats": {
            "total": 16,
            "reserved": 3
        },
        "reservedRooms": [
            "4A",
            "4B",
            "8A"
        ],
        "times": {
            "nagano": "17:50",
            "shinmatsumoto": "18:05",
            "ida": "18:29",
            "hamamatsu": "19:03",
            "mizutani": "19:41",
            "yoshino": "19:59",
            "arisaka": "20:41",
            "daiichikyoten": "20:49"
        }
    },
    {
        "id": "2028",
        "name": "てんりゅう28号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "1A",
            "3B"
        ],
        "times": {
            "nagano": "17:51",
            "shinonoi": "17:57",
            "shinmatsumoto": "18:12",
            "shinshiojiri": "18:19",
            "inashi": "18:28",
            "komagane": "18:38",
            "inaoshima": "18:46",
            "ida": "18:54",
            "achihirugamionsen": "19:07",
            "tenryuhiraoka": "19:19",
            "shinsakuma": "19:32",
            "nishikashima": "19:41",
            "hamamatsu": "19:49",
            "kitakuratousai": "20:22",
            "mizutani": "20:29"
        }
    },
    {
        "id": "1162",
        "name": "すいせい162号",
        "seats": {
            "total": 16,
            "reserved": 0
        },
        "reservedRooms": [],
        "times": {
            "nagano": "18:02",
            "shinmatsumoto": "18:15",
            "ida": "18:39",
            "hamamatsu": "19:13",
            "mizutani": "19:51",
            "yoshino": "20:09",
            "arisaka": "20:51",
            "daiichikyoten": "20:59"
        }
    },
    {
        "id": "1164",
        "name": "すいせい164号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "2B",
            "3A"
        ],
        "times": {
            "nagano": "18:10",
            "shinmatsumoto": "18:23",
            "ida": "18:49",
            "hamamatsu": "19:23",
            "mizutani": "20:01",
            "yoshino": "20:19",
            "arisaka": "21:01",
            "daiichikyoten": "21:09"
        }
    },
    {
        "id": "1166",
        "name": "すいせい166号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "18:22",
            "shinmatsumoto": "18:35",
            "ida": "18:59",
            "hamamatsu": "19:33",
            "mizutani": "20:11",
            "yoshino": "20:29",
            "arisaka": "21:11",
            "daiichikyoten": "21:19"
        }
    },
    {
        "id": "1168",
        "name": "すいせい168号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "18:30",
            "shinmatsumoto": "18:43",
            "ida": "19:07",
            "hamamatsu": "19:43",
            "mizutani": "20:21",
            "yoshino": "20:39",
            "arisaka": "21:21",
            "daiichikyoten": "21:29"
        }
    },
    {
        "id": "1170",
        "name": "すいせい170号",
        "seats": {
            "total": 16,
            "reserved": 2
        },
        "reservedRooms": [
            "4A",
            "4B"
        ],
        "times": {
            "nagano": "18:42",
            "shinmatsumoto": "18:55",
            "ida": "19:19",
            "hamamatsu": "19:53",
            "mizutani": "20:31",
            "yoshino": "20:49",
            "arisaka": "21:31",
            "daiichikyoten": "21:39"
        }
    },
    {
        "id": "1172",
        "name": "すいせい172号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "2A",
            "2B",
            "5A",
            "7A",
            "7B",
            "8B"
        ],
        "times": {
            "nagano": "18:50",
            "shinmatsumoto": "19:05",
            "ida": "19:29",
            "hamamatsu": "20:03",
            "mizutani": "20:41",
            "yoshino": "20:59",
            "arisaka": "21:41",
            "daiichikyoten": "21:49"
        }
    },
    {
        "id": "2030",
        "name": "てんりゅう30号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1A",
            "4A",
            "4B",
            "6A",
            "8A"
        ],
        "times": {
            "nagano": "18:51",
            "shinonoi": "18:57",
            "shinmatsumoto": "19:12",
            "shinshiojiri": "19:19",
            "inashi": "19:28",
            "komagane": "19:38",
            "inaoshima": "19:46",
            "ida": "19:54",
            "achihirugamionsen": "20:07",
            "tenryuhiraoka": "20:19",
            "shinsakuma": "20:32",
            "nishikashima": "20:41",
            "hamamatsu": "20:49",
            "kitakuratousai": "21:22",
            "mizutani": "21:29"
        }
    },
    {
        "id": "1174",
        "name": "すいせい174号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "1B",
            "2B",
            "3A",
            "5B"
        ],
        "times": {
            "nagano": "19:02",
            "shinmatsumoto": "19:15",
            "ida": "19:39",
            "hamamatsu": "20:13",
            "mizutani": "20:51",
            "yoshino": "21:09",
            "arisaka": "21:51",
            "daiichikyoten": "21:59"
        }
    },
    {
        "id": "1176",
        "name": "すいせい176号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5B",
            "6A",
            "6B",
            "7B",
            "8B"
        ],
        "times": {
            "nagano": "19:10",
            "shinmatsumoto": "19:23",
            "ida": "19:49",
            "hamamatsu": "20:23",
            "mizutani": "21:01",
            "yoshino": "21:19",
            "arisaka": "22:01",
            "daiichikyoten": "22:09"
        }
    },
    {
        "id": "1178",
        "name": "すいせい178号",
        "seats": {
            "total": 16,
            "reserved": 13
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B"
        ],
        "times": {
            "nagano": "19:22",
            "shinmatsumoto": "19:35",
            "ida": "19:59",
            "hamamatsu": "20:33",
            "mizutani": "21:11",
            "yoshino": "21:29",
            "arisaka": "22:11",
            "daiichikyoten": "22:19"
        }
    },
    {
        "id": "1180",
        "name": "すいせい180号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "3A",
            "3B",
            "4B",
            "5A",
            "6A",
            "7A"
        ],
        "times": {
            "nagano": "19:30",
            "shinmatsumoto": "19:43",
            "ida": "20:07",
            "hamamatsu": "20:43",
            "mizutani": "21:21",
            "yoshino": "21:39",
            "arisaka": "22:21",
            "daiichikyoten": "22:29"
        }
    },
    {
        "id": "1182",
        "name": "すいせい182号",
        "seats": {
            "total": 16,
            "reserved": 12
        },
        "reservedRooms": [
            "1B",
            "3A",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "19:42",
            "shinmatsumoto": "19:55",
            "ida": "20:19",
            "hamamatsu": "20:53",
            "mizutani": "21:31",
            "yoshino": "21:49",
            "arisaka": "22:31",
            "daiichikyoten": "22:39"
        }
    },
    {
        "id": "1184",
        "name": "すいせい184号",
        "seats": {
            "total": 16,
            "reserved": 4
        },
        "reservedRooms": [
            "1A",
            "1B",
            "3A",
            "4B"
        ],
        "times": {
            "nagano": "19:50",
            "shinmatsumoto": "20:05",
            "ida": "20:29",
            "hamamatsu": "21:03",
            "mizutani": "21:41",
            "yoshino": "21:59",
            "arisaka": "22:41",
            "daiichikyoten": "22:49"
        }
    },
    {
        "id": "2032",
        "name": "てんりゅう32号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "19:50",
            "shinonoi": "19:56",
            "shinmatsumoto": "20:11",
            "shinshiojiri": "20:18",
            "inashi": "20:27",
            "komagane": "20:38",
            "inaoshima": "20:47",
            "ida": "20:55",
            "achihirugamionsen": "21:08",
            "tenryuhiraoka": "21:20",
            "shinsakuma": "21:35",
            "nishikashima": "21:45",
            "hamamatsu": "21:53",
            "kitakuratousai": "22:26",
            "mizutani": "22:33"
        }
    },
    {
        "id": "1186",
        "name": "すいせい186号",
        "seats": {
            "total": 16,
            "reserved": 1
        },
        "reservedRooms": [
            "2B"
        ],
        "times": {
            "nagano": "20:01",
            "shinmatsumoto": "20:14",
            "ida": "20:39",
            "hamamatsu": "21:13",
            "mizutani": "21:51",
            "yoshino": "22:09",
            "arisaka": "22:51",
            "daiichikyoten": "22:59"
        }
    },
    {
        "id": "1188",
        "name": "すいせい188号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1B",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "20:10",
            "shinmatsumoto": "20:23",
            "ida": "20:48",
            "hamamatsu": "21:23",
            "mizutani": "22:01",
            "yoshino": "22:19",
            "arisaka": "23:01",
            "daiichikyoten": "23:09"
        }
    },
    {
        "id": "1190",
        "name": "すいせい190号",
        "seats": {
            "total": 16,
            "reserved": 8
        },
        "reservedRooms": [
            "1A",
            "1B",
            "3A",
            "3B",
            "5A",
            "5B",
            "6A",
            "8A"
        ],
        "times": {
            "nagano": "20:22",
            "shinmatsumoto": "20:35",
            "ida": "20:59",
            "hamamatsu": "21:33",
            "mizutani": "22:11",
            "yoshino": "22:29",
            "arisaka": "23:11",
            "daiichikyoten": "23:19"
        }
    },
    {
        "id": "1192",
        "name": "すいせい192号",
        "seats": {
            "total": 16,
            "reserved": 13
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "6A",
            "7A",
            "7B",
            "8A"
        ],
        "times": {
            "nagano": "20:32",
            "shinmatsumoto": "20:45",
            "ida": "21:09",
            "hamamatsu": "21:43",
            "mizutani": "22:21",
            "yoshino": "22:39",
            "arisaka": "23:22",
            "daiichikyoten": "23:30"
        }
    },
    {
        "id": "2034",
        "name": "てんりゅう34号",
        "seats": {
            "total": 16,
            "reserved": 5
        },
        "reservedRooms": [
            "1A",
            "1B",
            "3A",
            "5A",
            "8B"
        ],
        "times": {
            "nagano": "20:33",
            "shinonoi": "20:39",
            "shinmatsumoto": "20:54",
            "shinshiojiri": "21:00",
            "inashi": "21:09",
            "komagane": "21:28",
            "inaoshima": "21:37",
            "ida": "21:45",
            "achihirugamionsen": "22:01",
            "tenryuhiraoka": "22:13",
            "shinsakuma": "22:24",
            "nishikashima": "22:34",
            "hamamatsu": "22:50",
            "kitakuratousai": "23:23",
            "mizutani": "23:30"
        }
    },
    {
        "id": "1194",
        "name": "すいせい194号",
        "seats": {
            "total": 16,
            "reserved": 15
        },
        "reservedRooms": [
            "1A",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "20:52",
            "shinmatsumoto": "21:05",
            "ida": "21:29",
            "hamamatsu": "22:03",
            "mizutani": "22:41",
            "yoshino": "22:59",
            "arisaka": "23:41",
            "daiichikyoten": "23:49"
        }
    },
    {
        "id": "1196",
        "name": "すいせい196号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "2B",
            "4B",
            "5B",
            "6A",
            "6B",
            "8B"
        ],
        "times": {
            "nagano": "21:12",
            "shinmatsumoto": "21:25",
            "ida": "21:49",
            "hamamatsu": "22:23",
            "mizutani": "23:01",
            "yoshino": "23:19",
            "arisaka": "24:00"
        }
    },
    {
        "id": "1198",
        "name": "すいせい198号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "2A",
            "3B",
            "4A",
            "5A",
            "5B",
            "7A"
        ],
        "times": {
            "nagano": "21:32",
            "shinmatsumoto": "21:45",
            "ida": "22:09",
            "hamamatsu": "22:43",
            "mizutani": "23:21",
            "yoshino": "23:38"
        }
    },
    {
        "id": "2036",
        "name": "てんりゅう36号",
        "seats": {
            "total": 16,
            "reserved": 11
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3B",
            "4A",
            "5A",
            "6A",
            "6B",
            "7B",
            "8A"
        ],
        "times": {
            "nagano": "21:33",
            "shinonoi": "21:39",
            "shinmatsumoto": "21:54",
            "shinshiojiri": "22:00",
            "inashi": "22:09",
            "komagane": "22:20",
            "inaoshima": "22:29",
            "ida": "22:42",
            "achihirugamionsen": "22:58",
            "tenryuhiraoka": "23:10",
            "shinsakuma": "23:21",
            "nishikashima": "23:31",
            "hamamatsu": "23:38"
        }
    },
    {
        "id": "1200",
        "name": "すいせい200号",
        "seats": {
            "total": 16,
            "reserved": 16
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "3A",
            "3B",
            "4A",
            "4B",
            "5A",
            "5B",
            "6A",
            "6B",
            "7A",
            "7B",
            "8A",
            "8B"
        ],
        "times": {
            "nagano": "21:52",
            "shinmatsumoto": "22:05",
            "ida": "22:29",
            "hamamatsu": "23:03",
            "mizutani": "23:41",
            "yoshino": "23:58"
        }
    },
    {
        "id": "1202",
        "name": "すいせい202号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "2B",
            "3A",
            "4A",
            "6A",
            "7B",
            "8A"
        ],
        "times": {
            "nagano": "22:12",
            "shinmatsumoto": "22:25",
            "ida": "22:49",
            "hamamatsu": "23:22"
        }
    },
    {
        "id": "1204",
        "name": "すいせい204号",
        "seats": {
            "total": 16,
            "reserved": 6
        },
        "reservedRooms": [
            "1B",
            "2B",
            "4A",
            "5B",
            "6B",
            "7B"
        ],
        "times": {
            "nagano": "22:32",
            "shinmatsumoto": "22:45",
            "ida": "23:09",
            "hamamatsu": "23:42"
        }
    },
    {
        "id": "1206",
        "name": "すいせい206号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "3A",
            "5A",
            "5B",
            "6B",
            "7A",
            "7B"
        ],
        "times": {
            "nagano": "22:47",
            "shinmatsumoto": "23:00",
            "ida": "23:24",
            "achihirugamionsen": "23:36",
            "hamamatsu": "24:00"
        }
    },
    {
        "id": "2038",
        "name": "てんりゅう38号",
        "seats": {
            "total": 16,
            "reserved": 7
        },
        "reservedRooms": [
            "1A",
            "1B",
            "2A",
            "2B",
            "5A",
            "5B",
            "7B"
        ],
        "times": {
            "nagano": "22:59",
            "shinonoi": "23:05",
            "shinmatsumoto": "23:20",
            "shinshiojiri": "23:26",
            "inashi": "23:35",
            "komagane": "23:44",
            "inaoshima": "23:53",
            "ida": "24:00"
        }
    }
];
