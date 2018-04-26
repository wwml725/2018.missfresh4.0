import React, {Component} from 'react';
import './index.less'

export default class VipOpen extends Component {

    constructor(){
        super();
        this.state={
            payW:true,
            payZ:false,
            payNum:18,
            payMoney:false,
            payMoneyN:true,
            payMoneyM:false
        }
    }

    changePayW=()=>{
        this.setState({
            payW:false,
            payZ:true,
        })
    };
    changePayZ=()=>{
        this.setState({
            payW:true,
            payZ:false
        })
    };

    changePayMoney=()=>{
        this.setState({
            payMoney:true,
            payMoneyN:false,
            payMoneyM:false,
            payNum:8
        })
    };
    changePayMoneyN=()=>{
        this.setState({
            payMoney:false,
            payMoneyN:true,
            payMoneyM:false,
            payNum:18,
        })
    };
    changePayMoneyM=()=>{
        this.setState({
            payMoney:false,
            payMoneyN:false,
            payMoneyM:true,
            payNum:30,
        })
    };

    render() {
        return (
            <div className="vipOpen">
                <div
                    onClick={()=>this.props.history.go(-1)}
                    className="vipOpenHeader">
                    <img src="../../../resource/vipOpen/return.png"/>
                    <span>优享会员</span>
                </div>
                <div className="vipOpen-title">
                    <div>
                        <img src="../../../resource/vipOpen/headShow.png"/>
                        <div className="vipOpen-titleRight">
                            <span>小鲜</span>
                            <span>普通用户</span>
                        </div>
                    </div>
                </div>
                <div className="vipOpen-center">
                    <span className="centerSpan">优享会员</span>
                    <span className="centerSpan">每单享受返现5%</span>
                    <ul className="vipOpen-centerList">
                        <li
                            onClick={this.changePayMoney}
                            className={"vipOpen-centerListItem "+(this.state.payMoney?'active':'')}>
                            <div className="vipOpen-center-left">
                                <span>月度会员</span>
                                <span>1个月会员+送 10元无门槛红包</span>
                            </div>
                            <div className="vipOpen-center-right">
                                <span>
                                    特惠价￥ <i>8</i>
                                </span>
                                <span>￥15</span>
                            </div>
                        </li>
                        <li
                            onClick={this.changePayMoneyN}
                            className={"vipOpen-centerListItem "+(this.state.payMoneyN?'active':'')}>
                            <div className="vipOpen-center-left">
                                <span>季度会员</span>
                                <span>3个月会员+送 20元无门槛红包</span>
                            </div>
                            <div className="vipOpen-center-right">
                                <span>
                                    特惠价￥ <i>18</i>
                                </span>
                                <span>￥45</span>
                            </div>
                        </li>
                        <li
                            onClick={this.changePayMoneyM}
                            className={"vipOpen-centerListItem "+(this.state.payMoneyM?'active':'')}>
                            <div className="vipOpen-center-left">
                                <span>半年度会员</span>
                                <span>6个月会员+送 20元无门槛红包 <br/> + 送10元无门槛红包</span>
                            </div>
                            <div className="vipOpen-center-right">
                                <span>
                                    特惠价￥ <i>30</i>
                                </span>
                                <span>￥90</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="pay">
                    <ul className="payList">
                        <li>
                            <p>
                                需支付：<span>{this.state.payNum}</span>元
                            </p>
                        </li>
                        <li onClick={this.changePayZ}
                            className="payW">
                             <span className={"vipOpenSure "+(this.state.payW?'vipOpenSureActive':'')}>√</span>
                            <span>微信支付</span>

                        </li>
                        <li onClick={this.changePayW}
                            className="payZ">
                            <span className={"vipOpenSure "+(this.state.payZ?'vipOpenSureActive':'')}>√</span>                            <span>支付宝支付</span>

                        </li>
                    </ul>
                </div>
                <div className="vipOpenFooter">
                    <a href="#">
                        开通会员卡，获5%返现
                    </a>
                </div>
            </div>
        )
    }
}