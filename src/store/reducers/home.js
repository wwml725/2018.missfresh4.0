import * as types from "../../store/action-types";
let initState={
    headerList:{
        kindList:[]
    },
    homeProducts:{
        loading: false,
        products: [],
        homeSliders:[],
        offset: 1,
        limit: 5,
        hasMore: true,
        kind:1,
    },
    cartList:{
        count:0,
        cartsProducts:[]
    }
};
export default function (state=initState, action) {
    switch (action.type){
        case types.FETCH_SLIDERS:
            return {
                ...state,
                homeProducts:{
                    ...state.homeProducts,
                }
            };
        case types.FETCH_SLIDERS_SUCCESS:
            return {
                ...state,
                homeProducts:{
                    ...state.homeProducts,
                    homeSliders:[...action.payload.data],
                }
            };

        case types.GET_HOME_PRODUCTS:
            return {
                ...state,
                homeProducts:{
                    ...state.homeProducts,
                    loading:true,
                }
            };
        case types.GET_HOME_PRODUCTS_SUCCESS:
            return{
                ...state,
                homeProducts:{
                    ...state.homeProducts,
                    loading: false,
                    products:[...state.homeProducts.products,...action.payload.data],
                    offset:state.homeProducts.offset+action.payload.data.length,
                    hasMore:action.payload.hasMore
                }
            };
            /*下拉刷新中*/
        case types.REFRESH_PRODUCTS:
            return {
                ...state,
                homeProducts:{
                    ...state.homeProducts,
                    loading:true,
                    products:[]
                }
            };
        /*下拉刷新完成*/
        case types.REFRESH_PRODUCTS_SUCCESS:
            return {
                ...state,
                homeProducts:{
                    ...state.homeProducts,
                    loading:false,
                    products:[...action.payload.data],
                    offset:action.payload.data.length,
                    hasMore:action.payload.hasMore
                }
            };
        case types.UPDATE_CART:
            return {...state,cartList:{...state.cartList,...action.payload}};

        default:
            /*action.type中有ADD_TO_CART
            * 添加*/
            if(action.type.indexOf(types.ADD_TO_CART)>-1){
                let id=/\d+/.exec(action.type);
                let products=state.homeProducts.products.map((item,index)=>{
                    if(item.gid==id){//
                        item.cartNum++;
                        if(state.cartList.cartsProducts.indexOf(item)==-1){
                            state.cartList.cartsProducts.push(item);
                        }
                        return item;
                    }
                    return item
                });
                let count=state.cartList.cartsProducts.reduce((prev,next)=>{
                     return prev+next.cartNum;
                },0);
                return {
                    ...state,
                    homeProducts:{
                        ...state.homeProducts,
                        products
                    },
                    cartList:{
                        count,
                        cartsProducts:state.cartList.cartsProducts,
                    }
                }
            } else if(action.type.indexOf(types.SUB_FROM_CART)>-1){
                let id=/\d+/.exec(action.type);
                let products=state.homeProducts.products.map((item,index)=>{
                    if(item.gid==id&&state.cartList.cartsProducts.indexOf(item)>-1){
                        item.cartNum--;
                        return item;
                    }
                    return item;
                });
                state.cartList.cartsProducts=state.cartList.cartsProducts.filter(item=>item.cartNum!==0)||[];
                let count=state.cartList.cartsProducts.reduce((prev,next)=>{
                    return prev+next.cartNum;
                },0);
                return {
                    ...state,
                    products:{
                        ...state.homeProducts,
                        products
                    },
                    cartList:{
                        count,
                        cartsProducts:state.cartList.cartsProducts,
                    }
                }
            }
            else {
                return state;
            }
    }
}