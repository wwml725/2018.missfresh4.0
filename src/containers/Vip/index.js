import React, {Component} from 'react';
import './index.less'
import {connect} from 'react-redux';
import {NavLink,Link} from 'react-router-dom';
import actions from '../../store/actions/vip';

class Vip extends Component {
    componentWillMount() {
        this.props.getVipHotList();
    };

    rem=(id)=>{
        this.props.remGoodsNum(id);
    };
    add=(id)=>{

        this.props.addGoodsNum(id);
    };

    render() {
        return (
            <div className="vip-wrap">
                <div className="header">
                    <img src="../../../resource/page-vip/VIP.png" alt=""/>
                    <Link to='/vipOpen'>立即开通</Link>
                </div>
                <div className="recommend">
                    <div className="center">
                        <ul>
                            <li><img src="../../../resource/page-vip/huang.png" alt=""/><i>会员专价</i></li>
                            <li><img src="../../../resource/page-vip/return.png" alt=""/><i>购物返现</i></li>
                            <li><img src="../../../resource/page-vip/oneHour.png" alt=""/><i>1小时达</i></li>
                            <li><img src="../../../resource/page-vip/bao.png" alt=""/><i>会员商品</i></li>
                            <li><img src="../../../resource/page-vip/music.png" alt=""/><i>专享客服</i></li>
                        </ul>
                    </div>
                </div>
                <div className="panel">
                    <div className="title">
                        <h3>会员省钱计算器</h3>
                    </div>
                    <div className="calculation">
                        <span>
                            优享会员将为你节省
                        </span>
                        <span>
                            ￥1121.30
                        </span>
                        <span>根据优鲜用户年平均消费3504元计算</span>
                    </div>
                    <ul className="list">
                        <li>
                             <span>
                            购物返现
                        </span>
                            <span>
                            ￥175.20
                        </span>
                            <span>单单返现5%无上限</span>
                        </li>
                        <li>
                             <span>
                            会员专享价
                        </span>
                            <span>
                            ￥125.60
                        </span>
                            <span>优质商品最高优惠50%</span>
                        </li>
                        <li>
                             <span>
                            优惠红包
                        </span>
                            <span>
                            ￥420.50
                        </span>
                            <span>各种优惠享不停</span>
                        </li>
                    </ul>
                </div>
                <div className="hot-goods">
                    <h2>会员商品&会员专享价</h2>
                    <h3>精选全球美食，成为会员抢先购买</h3>
                </div>
                <ul className="hotList">
                    {
                        this.props.data.map((item,index)=>(
                            <li key={item.gid} className="goods-item" >
                                <NavLink to={{pathname:`/detail/${item.gid}`,state:item}}
                                         className="imgF">
                                    <img className="img-item" src={item.goodsIcon}/>
                                </NavLink>
                                <div className="vipList-right">
                                    <div className="vipList-rightFrame">
                                        <p className="title">{item.goodsName}</p>
                                        <p className="description">{item.description}</p>
                                        <div className="vipList-rightB">
                                            <div className="vipList-price">
                                                <p>商城价 <span className="vipList-priceN">{item.price}</span></p>
                                                <p>优享会员价 <span className="vipList-priceM">{item.price-1}</span></p>
                                            </div>
                                            <div className="vipList-btn">
                                                {
                                                    item.cartNum===0?<img
                                                        onClick={()=>this.add(item.gid)}
                                                        src={require('../../../resource/page-vip/shoppingCar.png')}
                                                        className="shoppingCartImg"
                                                    />:<div
                                                        className="shoppingCartBtn"
                                                    >
                                                        <button
                                                            className="btn-rem"
                                                            onClick={()=>this.rem(item.gid)}
                                                        >-</button>
                                                        {
                                                            item.cartNum
                                                        }
                                                        <button
                                                            className="btn-add"
                                                            onClick={()=>this.add(item.gid)}
                                                        >+</button>
                                                    </div>
                                                }

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default connect(state => state.vip,actions)(Vip)