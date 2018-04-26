import React,{Component} from 'react';
import {downRefresh} from "../../../utils";
export default class ShopContent extends Component{

    render(){
        return (
            <div  className="shopCart-content-wrap"  >
                <div className="shopCart-content" ref={content=>this.content=content}>
                    <div className="address">
                        <span>北京市</span>
                    </div>
                    <div className="goods-list">
                        <h3 className="top">
                            <div className="left">
                                <span className={"selected-all "+(this.props.selectedAll?"active":"")} onClick={this.props.clickAll}>
                                </span>次日达
                            </div>
                            {
                                this.props.total<100?<span className="right">实付满100元包邮,还差{100-this.props.total}元去凑单</span>:<span className="right">免运费</span>
                            }
                        </h3>
                        <ul className="main">
                            {
                                this.props.cartsProducts.map((item,index)=>(
                                    <li key={index} >
                                        <span className={"selected-one "+(item.isSelected?"active":"")} onClick={()=>this.props.clickOne(item.gid)}></span>
                                        <img src={item.goodsIcon} alt=""/>
                                        <div className="goods-info">
                                            <h4>{item.goodsName}</h4>
                                            <div className="goods-price">
                                                <div className="left">
                                                    <p><i>{`销量`+item.sales}</i> <br/><span>{`商城价￥${item.price}`}</span></p>
                                                </div>
                                                <div className="right">
                                                    <button onClick={()=>this.props.sub(item.gid)}>-</button>
                                                    <span>{item.cartNum}</span>
                                                    <button onClick={()=>this.props.add(item.gid)}>+</button >

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <section className="bottom">
                            <div className="priceInfo">
                                <span>商品总价</span>
                                <span>￥{this.props.total.toFixed(2)}</span>
                            </div>
                            <div className="priceInfo">
                                <p>红包</p>
                                <span>无红包可用<i>></i></span>
                            </div>
                            <div className="priceInfo">
                                <div className="priceInfo-item ">
                                    <span>商品优惠价格</span>
                                    <span>{this.props.isVip?`￥`+this.props.count:0}</span>
                                </div>
                            </div>
                            <div className="priceInfo last">
                                商品数量<span>{this.props.count}</span>
                            </div>
                            <div className="vip">
                                <p className="huiyuan">会员专享价格</p>
                                <p className="huiyuan">开通月度会员本单最高返 <span>25</span> %</p>
                                <ul className="youhui">
                                    <li className="youhui-item">
                                        <div className="youhui-item left">
                                            <img src={require("../../../image/huiyuan.png")}alt=""/>
                                            <div>
                                                <p>优享会员￥8/月</p>
                                                <span>送10元无门栏红包</span>
                                            </div>
                                        </div>
                                        <div className="youhui-item right">
                                            <span className={this.props.isVip?"active":""} onClick={this.props.onChange}></span>
                                        </div>
                                    </li>
                                    <li className="youhui-item line"></li>
                                    <li className="youhui-item photo"></li>
                                    <li className="youhui-item line"></li>
                                    <li className="youhui-item photo"></li>
                                    <li className="youhui-item line"></li>
                                    <li className="youhui-item photo"></li>
                                    <li className="youhui-item line"></li>
                                </ul>
                                <div className="clearCart" onClick={this.props.clearCart}>清除购物车</div>
                            </div>

                        </section>

                    </div>

                </div>
            </div>
        )
    }
}

