import * as types from '../action-types';

let initState = {
    data: [],
    count:0
};

export default function (state = initState, action) {

    let {data,count} = state;
    count=0;
    let good = data.find((item,index)=>item.gid==action.payload);

    switch (action.type) {
        case types.GET_HOT_LIST:
            return {
                ...state
            };
        case types.GET_HOT_LIST_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                ...action.payload
            };
        case types.ADD_GOODS_NUM:
            ++good.cartNum;
            data.forEach(item=>count+=item.cartNum);
            return {
                ...state,
                count: count
            };
        case types.REM_GOODS_NUM:
            --good.cartNum;
            data.forEach(item=>count+=item.cartNum);
            return {
                ...state,
                count: count
            };
        default:
            return state
    }
}