import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less'
import action from '../../store/actions/detail';
import ReactSwipe from 'react-swipe';
import {NavLink,Link} from 'react-router-dom';
import Modal from '../../components/modal/modal';

class Detail extends Component {

    constructor(){
        super();
        this.state={
            flag:false,
            con:0
        }
    }
    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.getDetailInfo(id);//调用action函数
        console.log(this.props);
    }
    changeFlag=()=>{
        this.setState({flag:false})
    };

    add=()=>{
       let conN= ++this.state.con;
       this.setState({con:conN})
    }

    render() {

        let swipeOptions = {
            auto: 3000,
            continuous: true,
            callback: (index) => {
                this.setState({index});
            },
        };
        return (
            <div className="detail">
                <div className="detail-header">
                    <i
                        onClick={()=>this.props.history.go(-1)}
                        className="iconfont icon-fanhui"
                    >
                    </i>
                    <a className="detail-tab" href=";">
                        商品详情
                    </a>
                    <a className="detail-tab" href=";">
                        安全保障
                    </a>
                    <i
                        onClick={()=>this.setState({flag:true})}
                        className="iconfont icon-fenxiang"/>
                </div>
                {this.props.data.goodsImgs ? <ReactSwipe swipeOptions={swipeOptions} className="swipe">
                    {
                        this.props.data.goodsImgs.map((item, index) => (
                            <div key={index}>
                                <img src={item}/>
                            </div>
                        ))
                    }
                </ReactSwipe> : null}
                <h3 className="detail-title">
                    {this.props.data.goodsName}
                </h3>
                <div className="detail-description">
                    {this.props.data.description}
                </div>
                <div className="detail-price">
                    <div className="detail-priceL">
                         <span>
                        商城价{this.props.data.price}
                    </span>
                        <span>
                        优享会员价{this.props.data.price - 1}
                    </span>
                    </div>
                    <div className="detail-priceR">
                       <span>
                           已售{this.props.data.sales}
                       </span>
                    </div>
                </div>

                <Link to="/vipOpen" className="toOpenVip">
                    <img className="toOpenVipI"
                        src={require('../../../resource/detail/toVip.png')} alt=""/>
                </Link>
                <p className="detail-top">商品详情</p>
                <ul className="detail-det">
                    {
                        this.props.data.detail? Object.keys(this.props.data.detail).map((key,value,a)=>(
                            <li key={Math.random()}>
                                {key} : {this.props.data.detail[key]}
                            </li>
                        )):null
                    }
                </ul>
                <div className="detail-heart">
                    <p>安心保障</p>
                    <img src={this.props.data.quality} />
                </div>
                <div className="detail-footer">
                   <NavLink to="/shopCart" className="iconfont icon-gouwuche" href="###">
                       <b className="count">
                           {this.state.con}
                       </b>
                   </NavLink>
                    <button
                        onClick={this.add}
                        className="btn">加入购物车</button>
                </div>
                {
                    this.state.flag?<Modal
                        changeFlag={this.changeFlag}
                        modalLink={window.location.href}/>:null
                }
            </div>

        )
    }
}

export default connect(
    state => state.detail,
    action
)(Detail)