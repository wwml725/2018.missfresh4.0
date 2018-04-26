import React from "react";
import {Route,Redirect} from "react-router-dom";
export default function ({component:Component,...rest}) {
    return(
        <Route {...rest} render={({location,history,match})=>(
            localStorage.getItem("user")?<Component/>:<Redirect to={{pathname:"/login",state:{from:location.pathname}}}/>
        )}/>
    )

}
