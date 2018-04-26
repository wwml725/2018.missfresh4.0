
import * as types from '../action-types'
let initState={
    status:{
        msg:""
    },
    address:{
        username:"你好",
        phone:"1213",
        address:"回龙观东大街",
    }
}

export default function (state=initState,action) {
    switch (action.type){
        case types.CREATE_ORDER:
            return {...state,status:{...state.order,...action.payload}};
        case types.FETCH_ADDRESS:
            return {...state,address:{...action.payload}}
        case types.UPDATE_ADDRESS:
            return {...state,address:{...state.address,...action.payload}}
        default:
            return state;

    }
}