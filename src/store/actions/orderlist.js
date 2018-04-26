import * as types from "../../store/action-types";
import {getOrderList,getStateOrderList} from "../../../src/api/orderlist";
let actions={
    fetchOrderList(){
        return function (dispatch,getState) {
            dispatch({
                type:types.GET_ORDERLIST,
            });
            dispatch({
                type:types.GET_ORDERLIST_SUCCESS,
                payload:getOrderList(),
            })
        }
    },


    fetchStateOrder(state){
        return function (dispatch,getState) {
            dispatch({
                type:types.GET_STATEORDER,
            });
            dispatch({
                type:types.GET_STATEORDER_SUCCESS,
                payload:getStateOrderList(state),
            })
        }
    },


};
export default actions;