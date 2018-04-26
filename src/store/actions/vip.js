import * as types from '../action-types';
import {getHotList} from "../../api/vip";

export default {
    getVipHotList(){
        return function (dispatch,getState) {
            dispatch({
                type:types.GET_HOT_LIST
            });
            dispatch({
                type:types.GET_HOT_LIST_SUCCESS,
                payload:getHotList()
            })
        }
    },
    addGoodsNum(goodsId){
        return function (dispatch,getState) {
            dispatch({
                type:types.ADD_GOODS_NUM,
                payload:goodsId
            })
        }
    },
    remGoodsNum(goodsId){
        return function (dispatch,getState) {
            dispatch({
                type:types.REM_GOODS_NUM,
                payload:goodsId
            })
        }
    }
}