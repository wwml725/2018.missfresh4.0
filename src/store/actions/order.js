import * as types from "../action-types";
import {createOrder,updateAddress,getAddress} from "../../api/order"

export default {
   createOrder(opt,cb){
        return function (dispatch,getState) {
            createOrder(opt).then((result)=>{
                if(result.code==0){
                    let {msg}=result;
                    console.log(msg+"~~~");
                    dispatch({type:types.CREATE_ORDER,payload:{msg}});
                    cb();

                    // dispatch(push("/login"))
                }

            })
        }
   },
    updateAddress(opt){
        return function (dispatch,getState) {
            updateAddress(opt).then((result)=>{
                let {code,msg}=result;
                if(code==0){
                    dispatch({type:types.FETCH_ADDRESS,payload:{msg}})
                }
            })
        }
    },
    getAddress(uid,cb){
        return function (dispatch,getState) {
            getAddress(uid).then((result)=>{
                console.log(result);
                if(result.code==0){
                    let {username,phone,address}=result.data;
                    console.log(username,phone,address);
                    dispatch({type:types.FETCH_ADDRESS,payload:{username,phone,address}})
                    cb()
                }

            })
        }

    },

}
