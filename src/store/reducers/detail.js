import * as types from '../action-types';
let initState={
    data:[]
};

export default function (state=initState,action) {
    switch (action.type){
        case types.GET_DETAIL_LIST:
            return {
                ...state
            };
        case types.GET_DETAIL_LIST_SUCCESS:
            return{
                ...state,
                ...action.payload
            };
        default:
            return state
    }

}