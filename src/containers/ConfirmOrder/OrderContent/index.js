import React,{Component} from 'react';
export default class OrderContent extends Component{
    constructor(){
        super();
        this.state={
            address:"",
            isEditing:false,

        }
    }
    handleClick=()=>{
        this.setState({isEditing:true},()=>{

        })
        this.setState({isShow:!this.state.isShow},()=>{

        })
    }
    handleChange=()=>{
        console.log(1);
        console.log(this.address.value);
        this.setState({isEditing:false,address:this.address.value});


    }
    componentWillMount(){
    }
    componentDidMount(){
        this.setState({address:this.props.address},()=>{
            console.log(this.state.address);
        })
    }

    render(){
        return (
            <div className="confirm-order-content">
                <div className="letter-bot"></div>
                {
                    this.state.isEditing?<section className="detail-user">
                        <div className="sure">
                            <button onClick={this.handleChange}>确定</button>
                        </div>
                        <div className="detail-item">
                            <span className="left">联系人</span>
                            <span>{this.props.username}</span>
                        </div>
                        <div className="detail-item line"></div>
                        <div className="detail-item">
                            <span className="left">手机号</span>
                            <span>{this.props.phone}</span>
                        </div>

                        <div className="detail-item line"></div>
                        <div className="detail-item last" onClick={this.handleClick} >
                            <span className="left">详细地址</span>
                            {this.state.isEditing?<input ref={(input)=>this.address=input}/>:(this.address.value?<span>{  this.address.value}</span>:<span>{this.state.address}</span>)}
                            <i className="iconfont icon-jiantou2-up"></i>
                        </div>

                    </section>: <section className="detail-user address">
                        <div className="left">
                            <a href="##">
                                <img src={require("../../../image/address-red.png")} alt=""/>
                                <span>住宅</span>
                            </a>
                        </div>
                        <div className="right">
                            <h3>{this.props.username}&nbsp;&nbsp;{this.props.phone}</h3>
                            <p>{this.state.address||this.props.address}</p>
                        </div>
                        <button onClick={this.handleClick}>编辑地址</button>
                    </section>
                }
                <div className="letter-bot"></div>
                <section className="send-style">
                    <div className="send-item first">
                        <p className="first">每日优鲜</p>
                        <p>两小时内送达<i className="iconfont icon-gengduo"></i></p>
                    </div>
                    <div className="send-item last">
                        <ul>
                            <li>
                                <img src={require("../../../image/send-style1.jpg")} alt=""/>
                            </li>
                            <li>
                                <img src={require("../../../image/send-style2.jpg")} alt=""/>
                            </li>
                            <li>
                                <img src={require("../../../image/send-style3.jpg")} alt=""/>
                            </li>
                            <li>
                                <img src={require("../../../image/send-style4.jpg")} alt=""/>
                            </li>
                        </ul>
                        <span>共{this.props.count}件</span>
                    </div>
                </section>
                <section className="bottom">
                    <div className="priceInfo">
                        <span>商品总价</span>
                        <span>￥{this.props.totalPrice}</span>
                    </div>
                    <div className="priceInfo">
                        <p className="hongbao"><i className="iconfont icon-hongbao "></i>红包</p>
                        <span>无红包可用<i className="iconfont icon-gengduo"></i></span>
                    </div>
                    <div className="priceInfo">
                        <div className="priceInfo-item ">
                            <span>商品优惠价格</span>
                            {
                                this.props.isVip?<span>{`￥`+this.props.count}</span>:<span>￥0</span>
                            }
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
                                    <span className={this.props.isVip?"active":""} onClick={this.props.cancel}></span>
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
                    </div>
                </section>
                <div className="order-bottom" onClick={this.props.cancleOrder}>
                    取消订单
                </div>
            </div>
        )
    }
}

