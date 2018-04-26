import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class NoShopping extends Component {
    render() {
        return (
            <div className="noShopping">
                <div className="header">
                    <div className="headerTitle">购物车</div>
                </div>
                <div className="noShoppingContent">
                    <i className="iconfont icon-gouwuche"></i>
                    <p>购物车空空如也</p>
                    <div className="noShoppingLink">
                        <Link to="/">去逛逛</Link>
                    </div>
                </div>
            </div>
        )
    }
}
