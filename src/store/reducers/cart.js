import  * as types from "../action-types"
let initSate={
    cartList:{
        count:0,
        cartsProducts:[
            {
                "gid": 1,
                "goodsName": "红果肉里藏有无数甜蜜炸弹",
                "goodsIcon": "https://image.missfresh.cn/8ceb3ee9990e46f891ecb6dd478db2d5.jpg?iopcmd=thumbnail&type=4&width=200",
                "goodsImgs": [
                    "https://image.missfresh.cn/2e5e73e519934503b04d496d5784d930.jpg?iopcmd=thumbnail&type=4&width=640",
                    "https://image.missfresh.cn/d52fb73c1f9141f4a332a39dca8f227c.jpg?iopcmd=thumbnail&type=4&width=640"
                ],
                "description": "福建平和红肉蜜柚2.4-3斤*1个",
                "price": 15.9,
                "cartNum": 1,
                "isSelected": false,
                "sales": 999,
                "inventory": 9999,
                "detail": {
                    "weight": "2.4-3斤",
                    "shelfLife": "立即食用",
                    "pack": "普装"
                },
                "quality": "http://missfresh-asvip-develop-common.ufile.ucloud.cn/wms_1513415782863448399.png?iopcmd=convert&dst=jpg&q=80"
            },
            {
                "gid": 2,
                "goodsName": "来自蜜柚之乡的香甜问候",
                "goodsIcon": "https://image.missfresh.cn/7ee27c7707364e289deecb68520b6852.jpg?iopcmd=thumbnail&type=4&width=200",
                "goodsImgs": [
                    "https://image.missfresh.cn/d9fd57736a6d4fe599f0a7342d5844d6.jpg?iopcmd=thumbnail&type=4&width=640"
                ],
                "description": "福建平和白肉蜜柚2.4-3斤*1个",
                "price": 8.9,
                "cartNum": 1,
                "isSelected": false,
                "sales": 888,
                "inventory": 9999,
                "detail": {
                    "weight": "2.4-3斤",
                    "shelfLife": "立即食用",
                    "pack": "普装"
                },
                "quality": "http://missfresh-asvip-develop-common.ufile.ucloud.cn/wms_1513415782863448399.png?iopcmd=convert&dst=jpg&q=80"
            },
            {
                "gid": 3,
                "goodsName": "一手能掌握的红肉心",
                "goodsIcon": "https://image.missfresh.cn/716f805a085147aa86565f0f83a3cf7c.jpg?iopcmd=thumbnail&type=4&width=200",
                "goodsImgs": [
                    "https://image.missfresh.cn/31de349e400247a8b331fb7bbf61b9fa.jpg?iopcmd=thumbnail&type=4&width=640",
                    "https://image.missfresh.cn/78bd4e99b95a4d4dbf991eb0d4dc757d.jpg?iopcmd=thumbnail&type=4&width=640"
                ],
                "description": "越南红肉mini火龙果320g*1个",
                "price": 10.9,
                "cartNum": 1,
                "isSelected": false,
                "sales": 777,
                "inventory": 9999,
                "detail": {
                    "weight": "320g",
                    "shelfLife": "立即食用",
                    "pack": "普装"
                },
                "quality": "http://missfresh-asvip-develop-common.ufile.ucloud.cn/wms_1513594506363104319.png?iopcmd=convert&dst=jpg&q=80"
            },
            {
                "gid": 4,
                "goodsName": "这么好的蓝莓  都想留给你吃",
                "goodsIcon": "https://image.missfresh.cn/a6fa48abeb974c2c9b9ee45797408ffa.jpg?iopcmd=thumbnail&type=4&width=200",
                "goodsImgs": [
                    "https://image.missfresh.cn/dc5d8ad54a20489ea0870437a5472f02.jpg?iopcmd=thumbnail&type=4&width=640",
                    "https://image.missfresh.cn/9648bb55704a4ebc9d724a99b8b3454f.jpg?iopcmd=thumbnail&type=4&width=640",
                    "https://image.missfresh.cn/3c78a063bb2e48e2b30eff0191ada16b.jpg?iopcmd=thumbnail&type=4&width=640",
                    "https://image.missfresh.cn/d0a36ebc0fee4a2caa116f91b31a3eb3.jpg?iopcmd=thumbnail&type=4&width=640"
                ],
                "description": "智利蓝莓125g*1盒",
                "price": 21.9,
                "cartNum": 1,
                "isSelected": false,
                "sales": 666,
                "inventory": 9999,
                "detail": {
                    "weight": "125g",
                    "shelfLife": "立即食用",
                    "pack": "盒装"
                },
                "quality": "http://missfresh-asvip-develop-common.ufile.ucloud.cn/wms_1513592406458776549.png?iopcmd=convert&dst=jpg&q=80"
            },
            {
                "gid": 5,
                "goodsName": "口感像乳酪   营养不简单",
                "goodsIcon": "https://image.missfresh.cn/f9a2fcae73f442b1b9961613b0d7d966.jpg?iopcmd=thumbnail&type=4&width=200",
                "goodsImgs": [
                    "https://image.missfresh.cn/6fae4efbae8544589f2468ae17601917.jpg?iopcmd=thumbnail&type=4&width=640",
                    "https://image.missfresh.cn/a4f7302782914dc280f45bf97446aa6b.jpg?iopcmd=thumbnail&type=4&width=640"
                ],
                "description": "进口牛油果125g起*2个",
                "price": 15.9,
                "cartNum": 1,
                "isSelected": false,
                "sales": 666,
                "inventory": 9999,
                "detail": {
                    "weight": "250g",
                    "shelfLife": "立即食用",
                    "pack": "袋装"
                },
                "quality": "http://missfresh-asvip-develop-common.ufile.ucloud.cn/wms_1513592064787883412.png?iopcmd=convert&dst=jpg&q=80"
            },
        ]
    },
}
export default function reducer(state=initSate,action) {
    switch (action.type){
        case types.ADD_CART:
            return {...state};
        case types.UPDATE_CART:
            return {...state,cartList:{...state.cartList,...action.payload}}

        default:
            return {...state}

    }

}