export interface IGoods {
    goods: IGood[];
}

export interface IGood {
    brand:         string;
    brand_quality: boolean;
    count:         number;
    defect:        boolean;
    goodsID:       string;
    name:          string;
    notRefund:     boolean;
    number:        string;
    price:         number;
    rate:          number;
    sale?:          string[];
    warehouses:    IWarehouse[];
}



export interface IWarehouse {
    code:              string;
    id:                string;
    notRefund:         boolean;
    own:               boolean;
    price:             number;
    shipmentDate:      string;
    stock:             number;
    warehouseShipping: string;
}


export const data: IGoods = {
    "goods": [
        {
            "brand": "OSSCA",
            "brand_quality": false,
            "count": 7,
            "defect": false,
            "goodsID": "84DF819C-9220-11E2-8716-0015179B1A7D",
            "name": "Стеклоподъемник задний левый",
            "notRefund": false,
            "number": "01089",
            "price": 748.66,
            "rate": 1,
            "sale": [
                "pora-deystvovat-s-favorit"
            ],
            "warehouses": [
                {
                    "code": "МСК РС",
                    "id": "969F7D51-7193-11EE-A7CA-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 748.66,
                    "shipmentDate": "2024-02-02T15:30:00+03:00",
                    "stock": 7,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                }
            ]
        },
        {
            "brand": "AP",
            "brand_quality": false,
            "count": 0,
            "defect": false,
            "goodsID": "2B6BB13A-3A1E-4A7E-A2D4-3A8123E7C221",
            "name": "Колодки тормозные барабанные",
            "notRefund": false,
            "number": "01089",
            "price": 1505.8,
            "rate": 1,
            "sale": [
                "pora-deystvovat-s-favorit"
            ],
            "warehouses": []
        },
        {
            "brand": "ASAM",
            "brand_quality": false,
            "count": 0,
            "defect": false,
            "goodsID": "5BB27C91-FAF7-4CED-ABB7-A267C6F98AFE",
            "name": "Фильтр топливный renault 19",
            "notRefund": false,
            "number": "01089",
            "price": 0,
            "rate": 1,
            "sale": [
                "pora-deystvovat-s-favorit"
            ],
            "warehouses": []
        },
        {
            "brand": "Meat & Doria",
            "brand_quality": false,
            "count": 8,
            "defect": false,
            "goodsID": "D8CDF5ED-014E-44EE-B71D-0AB6F23E3688",
            "name": "Прокладка",
            "notRefund": false,
            "number": "01089",
            "price": 370,
            "rate": 1,
            "sale": [
                "legendarnaya-novogodnyaya-aktsiya",
                "pora-deystvovat-s-favorit"
            ],
            "warehouses": [
                {
                    "code": "МЦС",
                    "id": "23F7657D-FA9D-11E7-812E-0050568E1762",
                    "notRefund": false,
                    "own": true,
                    "price": 370,
                    "shipmentDate": "2024-02-01T20:00:00+03:00",
                    "stock": 8,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                }
            ]
        },
        {
            "brand": "FEBI",
            "brand_quality": false,
            "count": 673,
            "defect": false,
            "goodsID": "B4BE9EEB-8139-11DB-BF1F-505054503030",
            "name": "Антифриз (синий) 1,5 л. G11",
            "notRefund": true,
            "number": "01089",
            "price": 828.08,
            "rate": 1,
            "sale": [
                "pora-deystvovat-s-favorit"
            ],
            "warehouses": [
                {
                    "code": "МСК РС",
                    "id": "23A41396-69C7-11EE-A7C9-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 949.27,
                    "shipmentDate": "2024-02-02T14:30:00+03:00",
                    "stock": 7,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                },
                {
                    "code": "МСК РС",
                    "id": "BC186572-6FE0-11ED-A7BB-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 828.08,
                    "shipmentDate": "2024-02-03T16:20:00+03:00",
                    "stock": 1,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                },
                {
                    "code": "МСК РС",
                    "id": "EB384773-E30D-11EC-A7B6-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 2134.5,
                    "shipmentDate": "2024-02-07T08:30:00+03:00",
                    "stock": 25,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                },
                {
                    "code": "МСК РС",
                    "id": "E09CF743-3205-11EE-A7C6-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 814.32,
                    "shipmentDate": "2024-02-05T13:30:00+03:00",
                    "stock": 9,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                },
                {
                    "code": "МСК РС",
                    "id": "F48D5279-21F0-11EC-A361-005056802F4C",
                    "notRefund": false,
                    "own": false,
                    "price": 828.08,
                    "shipmentDate": "2024-02-03T14:30:00+03:00",
                    "stock": 450,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                },
                {
                    "code": "МСК РС",
                    "id": "64E3D0CF-2908-11ED-A7B7-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 828.08,
                    "shipmentDate": "2024-02-03T12:30:00+03:00",
                    "stock": 49,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                },
                {
                    "code": "МСК РС",
                    "id": "6894334B-719F-11EE-A7CA-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 922.15,
                    "shipmentDate": "2024-02-02T15:30:00+03:00",
                    "stock": 132,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                }
            ]
        },
        {
            "brand": "GLASER",
            "brand_quality": false,
            "count": 57,
            "defect": false,
            "goodsID": "8CD44D7E-813C-11DB-BF1F-505054503030",
            "name": "Прокладка ГБЦ",
            "notRefund": false,
            "number": "H01089-00",
            "price": 924.07,
            "rate": 1,
            "sale": [
                "pora-deystvovat-s-favorit"
            ],
            "warehouses": [
                {
                    "code": "МСК РС",
                    "id": "64E3D0CF-2908-11ED-A7B7-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 1115.65,
                    "shipmentDate": "2024-02-03T12:30:00+03:00",
                    "stock": 19,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                },
                {
                    "code": "МСК РС",
                    "id": "312D417F-719E-11EE-A7CA-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 914.19,
                    "shipmentDate": "2024-02-02T11:30:00+03:00",
                    "stock": 4,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                },
                {
                    "code": "МСК РС",
                    "id": "EB384773-E30D-11EC-A7B6-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 1987.76,
                    "shipmentDate": "2024-02-07T08:30:00+03:00",
                    "stock": 3,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                },
                {
                    "code": "МСК РС",
                    "id": "C91D6D34-719F-11EE-A7CA-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 924.07,
                    "shipmentDate": "2024-02-02T15:30:00+03:00",
                    "stock": 20,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                },
                {
                    "code": "МСК РС",
                    "id": "E09CF743-3205-11EE-A7C6-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 1152.45,
                    "shipmentDate": "2024-02-05T13:30:00+03:00",
                    "stock": 11,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                }
            ]
        },
        {
            "brand": "HOFFER",
            "brand_quality": false,
            "count": 0,
            "defect": false,
            "goodsID": "0BE3A1F0-DA56-4AA0-B63B-969957A0DB7C",
            "name": "Прокладка",
            "notRefund": false,
            "number": "01089",
            "price": 377.95,
            "rate": 1,
            "sale": [
                "pora-deystvovat-s-favorit"
            ],
            "warehouses": []
        },
        {
            "brand": "Seintex",
            "brand_quality": false,
            "count": 2,
            "defect": false,
            "goodsID": "39DA9214-0B1F-4D5E-A718-3CB87D38DC02",
            "name": "Коврики салона к-кт",
            "notRefund": false,
            "number": "01089",
            "price": 3758.34,
            "rate": 1,
            "sale": [
                "pora-deystvovat-s-favorit"
            ],
            "warehouses": [
                {
                    "code": "МСК РС",
                    "id": "1633C561-3120-11EE-A7C6-00155D1F6C08",
                    "notRefund": false,
                    "own": false,
                    "price": 3758.34,
                    "shipmentDate": "2024-02-03T06:30:00+03:00",
                    "stock": 2,
                    "warehouseShipping": "9506B522-2875-11E4-9621-0050568E0E34"
                }
            ]
        },
        {
            "brand": "SUPLEX",
            "brand_quality": false,
            "count": 0,
            "defect": false,
            "goodsID": "97FCFAC5-AD6F-4A84-AEED-094EB672B82A",
            "name": "Пружина подвески передняя",
            "notRefund": false,
            "number": "01089",
            "price": 0,
            "rate": 1,
            "sale": [
                "pora-deystvovat-s-favorit"
            ],
            "warehouses": []
        }
    ]
}