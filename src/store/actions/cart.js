import * as types from "../action-types";
export default {
    alert(opt){
        return {type:types.UPDATE_CART,payload:opt}
    }


}