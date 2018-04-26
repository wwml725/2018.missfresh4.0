import React,{Component} from 'react'
import './index.less'
export default class ProfileBody extends Component{
    render(){
        return (
            <div>
                <ul className="profile-total">
                    <li className="total-list">
                        <span><i>0</i>元</span>
                        <span>余额</span>
                    </li>
                    <li className="total-list">
                        <span><i>0</i>张</span>
                        <span>红包</span>
                    </li>
                    <li className="total-list">
                        <span><i>0</i>张</span>
                        <span>商品券</span>
                    </li>
                    <li className="total-list">
                        <span className="remain-count"><i>0</i>分</span>
                        <span className="remain-text">积分兑换</span>
                    </li>
                </ul>
                {/*profile-total end*/}
                {/*Member Rules start*/}
                <div className="member-rules">
                    <div>
                        <h4 className="member-title">会员权益</h4>
                        <span>开通会员</span>
                    </div>

                    <p className="member-rules-text">成为优享会员，预计将为您<span>节省1120元</span>    </p>
                </div>
                {/*Member Rules end*/}
                {/*Scroll start*/}
                <div className="icon-scroll">
                    <ul className="scroll">
                        <li className="item-list">
                            <div className="img-list">
                                <img src={require('../../../images/member-price.png')} alt=""/>
                            </div>
                            <p>会员专享价</p>
                        </li>
                        <li className="item-list">
                            <div className="img-list">
                                <img src={require('../../../images/member-price.png')} alt=""/>
                            </div>
                            <p>会员专享价</p>
                        </li>
                        <li className="item-list">
                            <div className="img-list">
                                <img src={require('../../../images/member-price.png')} alt=""/>
                            </div>
                            <p>会员专享价</p>
                        </li>
                        <li className="item-list">
                            <div className="img-list">
                                <img src={require('../../../images/member-price.png')} alt=""/>
                            </div>
                            <p>会员专享价</p>
                        </li>
                        <li className="item-list">
                            <div className="img-list">
                                <img src={require('../../../images/member-price.png')} alt=""/>
                            </div>
                            <p>会员专享价</p>
                        </li>
                    </ul>
                </div>
                {/*Scroll end*/}
                {/*invite-gift start*/}
                <div className="invite-gift">
                    <img className="img-invite" src={require("../../../images/img-invite.png")} alt=""/>
                </div>
                {/*invite-gift end*/}


            </div>
        )
    }
}