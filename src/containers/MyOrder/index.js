/*我的订单*/
/*
* 订单页面的数据都是从后台获取的订单列表
*
* */
import React,{Component} from 'react'
import NavHeader from '../../components/NavHeader'
import "./index.less"
import {connect} from 'react-redux'
import actions from '../../store/actions/orderlist'
class MyOrder extends Component{
    constructor(){
        super();
        this.state={order:['全部订单','代付款','已付款','已取消'],index:0};
    }

    componentDidMount(){
        this.props.fetchOrderList();
        console.log(this.props);
    }
    handleClick=(index)=>{
        if(index==0){
            this.props.fetchOrderList();
        }else {

            console.log(index,"66666");
            this.props.fetchStateOrder(index-1);
        }
        this.setState({index:index})
    };

  /*  handleAllClick=()=>{
        this.props.fetchOrderList();
    }

    handleUnPaidClick=()=>{
        this.props.fetchStateOrder(0);
    }
    handlePaidClick=()=>{
        this.props.fetchStateOrder(1);
    }*/

   /* handleChangeColor=(event)=>{
        console.log(event);
    }*/

    render(){
        console.log(this.props);
        return (
            <div>
                {/*ref={input=>this.tab=input}*/}
                <NavHeader title="我的订单"/>
                <div className="order-my">
                    <ul className="nav-order">
                        {
                            this.state.order.map((item,index)=>(
                                <li key={index} className={this.state.index==index?"active":null} onClick={()=>this.handleClick(index)}>{item}</li>
                            ))
                        }

                    </ul>
                    <ul className="order-list">
                        {
                            this.props.orderlist.map((item,index)=>(
                                <li key={index} className="item-list" >
                                    <div  className="img-avator" >
                                        {
                                            item.list.map((curImg,id)=>(
                                                <img key={id} src={curImg.goodsIcon}/>
                                            ))
                                        }

                                    </div>
                                    <div className="order-msg">
                                        <div>
                                            <span className="price" >￥{item.totalPrice}</span>

                                            {
                                                item.state=='paid'?<span className="ispay">已付</span>:(item.state=='cancelled'?<span className="ispay">已取消</span>:<span className="ispay">待付</span>)
                                            }

                                        </div>
                                        <div className="order-detail" >订单详情</div>
                                    </div>
                                </li>
                            ))

                        }

                    </ul>
                </div>

            </div>
        )
    }
}
export default connect(
    state=>state.orderlist,
    actions
)(MyOrder)