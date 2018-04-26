import React,{Component} from 'react';
import NavHeader from "../../components/NavHeader";
import "./index.less"
import {connect} from "react-redux"
import OrderContent from "./OrderContent/index";
import actions from "../../store/actions/order"
 class Confirm extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            totalPrice:0,
            isVip:false,
            discount:0,
            isShow:false,
            username:"",
            phone:"",
            address:"",

        }
    }
    cancel=()=>{
        console.log(1);
        this.setState({isVip:!this.state.isVip})
    }
    getMount=(cartsProducts)=>{
        return cartsProducts.reduce((prev,next)=>{
            if(!next.isSelected)return prev;
            return prev+parseFloat(next.cartNum)*parseFloat(next.price)
        },0);

    };
    getCount=(cartsProducts)=>{
        return cartsProducts.reduce((prev,next)=>{
            if(!next.isSelected)return prev;
            return prev+parseInt(next.cartNum)
        },0);

    };
    handleClick=()=>{
        this.setState({isShow:!this.state.isShow},()=>{
            console.log(this.state.isShow);
        })
    }
    componentWillReceiveProps(){

    }
    handlePaying=()=>{

        let {uid}= JSON.parse(localStorage.getItem('user'));
        let totalPrice=this.state.totalPrice;
        let discount=this.state.discount;
        let list=this.state.list;
        this.props.createOrder({uid,totalPrice,discount,list},()=>{
            console.log(this.props.status.msg);
            window.location.hash='/myorder'
        })
    }
    componentDidMount() {
        let list = JSON.parse(localStorage.getItem("order"));
        console.log(list);

        let isVip=JSON.parse(localStorage.getItem("isVip"));
        let totalPrice=this.getMount(list);
        let discount=this.getCount(list);
        let {uid}= JSON.parse(localStorage.getItem('user'));
       // let {username,phone,address}=this.props.getAddress()
        this.setState({list,discount,totalPrice,isVip});
        this.props.getAddress(uid,()=>{
            this.setState({username:this.props.address.username,phone:this.props.address.phone,address:this.props.address.address})
        })

    }

    render(){
        return (
            <div className="confirm-order">
               <NavHeader title="订单确认"/>
                <OrderContent
                    cartList={this.state.list}
                    isVip={this.state.isVip}
                    count={this.state.discount}
                    totalPrice={this.state.totalPrice}

                    cancel={this.cancel}
                    handleClick={this.handleClick}
                    cancleOrder={this.cancelOrder}
                    username={this.state.username}
                    phone={this.state.phone}
                    address={this.state.address}

                />
                <div className="confirm-order-footer">
                    <div><span>付款{`￥`+(parseFloat(this.state.totalPrice)-parseFloat(this.state.discount)).toFixed(2)}</span></div>
                    <button onClick={this.handlePaying}>提交订单</button>
                </div>
            </div>
        )
    }
}

export default connect(
    state=>state.Order,
    actions
)(Confirm)
