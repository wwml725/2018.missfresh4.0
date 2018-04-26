import {combineReducers} from 'redux';

import session from "./session";
import home from "./home";
import Order from "./order"
// import Cart from "./cart";
import vip from './vip';
import detail from './detail';
import userInfo from './userInfo';
import orderlist from './orderlist'
let reducers = combineReducers({
    home,
    session,
    // Cart,
    Order,
    orderlist,
    vip,
    detail,
    userInfo
});
export default reducers;