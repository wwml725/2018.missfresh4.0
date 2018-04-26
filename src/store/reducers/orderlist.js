import * as types from "../../store/action-types";
let initState={
    orderlist:[],
    // stateorder:[],
};
export default function (state=initState, action) {
    switch (action.type){
        //所有订单
        case types.GET_ORDERLIST:
            return {
                ...state,
                ...initState.orderlist,
            };
        case types.GET_ORDERLIST_SUCCESS:
            // console.log(action,'wangwei');
            return{
                ...state,
                orderlist:[...action.payload.data]
            };


        //获取状态订单
        case types.GET_STATEORDER:
            // console.log(action,'wangwei');
            return{
                ...state,
                ...initState.orderlist
            };
        case types.GET_STATEORDER_SUCCESS:
            console.log(action);
            return{
                ...state,
                orderlist:[...action.payload.data]
            };

        default:
            return state;

    }
}