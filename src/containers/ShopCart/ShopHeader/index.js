import React,{Component} from 'react';
export default class ShopHeader extends Component{
    render(){
        return (
            <div className="shopCart-header">
                <a  href="/"className="coupons">
                    <span>最优惠</span>
                    <p>新人专享，满59立减39，再送20元现金红包</p>
                </a>

            </div>
        )
    }
}

