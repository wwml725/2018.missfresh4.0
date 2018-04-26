import * as types from "../../store/action-types";
let initState={
   userInfo:[]
};
export default function (state=initState, action) {
    switch (action.type){
        //所有订单
        case types.GET_ORDERLIST:
            return {
                ...state,
                ...initState.userInfo,
            };
        case types.GET_ORDERLIST_SUCCESS:
            // console.log(action,'wangwei');
            return{
                ...state,
                userInfo:[...action.payload.data]
            };
        default:
            return state;

    }
}