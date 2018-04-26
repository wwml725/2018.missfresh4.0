import * as types from "../../store/action-types";
import {getKindSlidersImgs, getHomeGoods} from "../../../src/api/home";

let actions = {
    fetchSliders() {
        return function (dispatch, getState) {
            dispatch({
                type: types.FETCH_SLIDERS
            });
            dispatch({
                type: types.FETCH_SLIDERS_SUCCESS,
                payload: getKindSlidersImgs(),
            })
        }
    },
    /*下拉刷新*/
    refreshProducts() {
        return function (dispatch, getState) {
            let {
                homeProducts: {
                    kind,loading, offset, limit, hasMore
                }
            } = getState().home;
            console.log(getState(),"xialashuanxin xialaxhuanxin xialashuaxin ")
            if (!loading) {
                dispatch({type: types.REFRESH_PRODUCTS});
                dispatch({type: types.REFRESH_PRODUCTS_SUCCESS, payload: getHomeGoods(kind,offset)});
            }
        }
    },

    /*获取主页数据*/
    fetchHomeProducts() {
        return function (dispatch, getState) {
            let {
                homeProducts: {
                    kind,loading, offset, limit, hasMore
                }
            } = getState().home;

            if (hasMore && !loading) {
                dispatch({type: types.GET_HOME_PRODUCTS});
                dispatch({type: types.GET_HOME_PRODUCTS_SUCCESS, payload: getHomeGoods(kind, limit,offset)});
            }
        }
    },

    addCount(id) {
        return {type: types.ADD_TO_CART + `${id}`, payload: {id}}
    },
    subCount(id) {
        return {type: types.SUB_FROM_CART + `${id}`, payload: {id}}

    }
};
export default actions;