import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';


import Home from "./containers/Home-hkc/index";
import ShopCart from "./containers/ShopCart/index";
import ConfirmOrder from "./containers/ConfirmOrder"
import ProtectedRoutes from "./ProtectedRoutes"
import createHashHistory from "history/createHashHistory";
import {ConnectedRouter} from "react-router-redux"

import Tab from "./components/Tab/index";
import './style/common.less';
import Profile from './containers/Profile'
import MyOrder from "./containers/MyOrder/index";
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";
import Vip from "./containers/Vip/index";
import VipOpen from "./containers/VipOpen/index";
import Detail from './containers/Detail/index';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Tab/>
                    <Route path="/vip" component={Vip}/>
                    <Route path="/vipOpen" component={VipOpen}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/shopCart" component={ShopCart}/>
                    <ProtectedRoutes path="/confirm" component={ConfirmOrder}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/profile" component={Profile}/>
                    <ProtectedRoutes path="/myorder" component={MyOrder}/>
                </div>
            </Router>
        )
    }
}

export default App;