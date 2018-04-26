import * as types from '../action-types';
import {getDetail} from '../../api/detail';
export default {
    getDetailInfo(id){
        return function (dispatch, getState) {
            dispatch({
                type:types.GET_DETAIL_LIST
            });

            getDetail(id).then(result=>{
                dispatch({
                    type:types.GET_DETAIL_LIST_SUCCESS,
                    payload:result
                })
            })
        }
    }
}