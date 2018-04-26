import * as types from "../action-types"
let initState={
    //error:"",//错误消息
    //success:"",//成功的消息
    msg:"",
    data:{},
    user:null,//如果登录成功的话，需要给此属性赋值为登录用户
}
export default function (state=initState,action) {
    switch (action.type){
        case types.REG:
            return {
                ...action.payload
            };
        case types.LOGIN:
            return {
                ...action.payload
            };
        case types.CLEAR_MESSAGE:
            return {
                ...state,
                //error:"",
               // success:""
                msg:"",
            };
        case types.LOGOUT:///退出方法调用完成后
            return {
                ...action.payload
            };

        case types.VALIDATE:
            return {
                ...state,
                ...action.payload
            };

        default:return state;
    }
}