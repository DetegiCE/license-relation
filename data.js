var NETWORK_DATA = {
    "nodes": [
        {
            "id": "02. 경영·회계·사무",
            "value": 5,
            "group": "big"
        },
        {
            "id": "024. 생산관리",
            "value": 3,
            "group": "small"
        },
        {
            "id": "08. 문화·예술·디자인·방송",
            "value": 5,
            "group": "big"
        },
        {
            "id": "082. 디자인",
            "value": 3,
            "group": "small"
        },
        {
            "id": "083. 방송",
            "value": 3,
            "group": "small"
        },
        {
            "id": "09. 운전·운송",
            "value": 5,
            "group": "big"
        },
        {
            "id": "091. 운전·운송",
            "value": 3,
            "group": "small"
        }
    ],
    "links": [
        {
            "source": "02. 경영·회계·사무",
            "target": "024. 생산관리",
            "value": 2
        },
        {
            "source": "08. 문화·예술·디자인·방송",
            "target": "082. 디자인",
            "value": 2
        },
        {
            "source": "08. 문화·예술·디자인·방송",
            "target": "083. 방송",
            "value": 2
        },

        ////

        {
            "source": "024. 생산관리",
            "target": "083. 방송",
            "value": 3
        }
    ]
};