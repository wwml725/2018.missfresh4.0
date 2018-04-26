import React,{Component} from 'react';
import "./index.less";
import {connect} from "react-redux";
import actions from "../../../../store/actions/home";
import {Link} from "react-router-dom";
import Loading from "../../../../components/Loading/index";
 class HomeProducts extends Component{
    componentDidMount(){
        this.props.fetchHomeProducts();
    }
    render(){
        return (
            <div className="home-product">
                {/*遍历商品，展示每个商品的信息*/}
                {
                    this.props.homeProducts.products.map((item,index)=>(
                        <div className="product-wrapper" key={index}>

                        <Link to={{pathname:`/detail/${item.gid}`,state:item}}>
                            <div  className="onsaleProduct">
                                <img src={item.goodsIcon} alt=""/>
                                <div className="rightCon">
                                <h4>{item.goodsName}</h4>
                                <p>{item.description}</p>

                                <i className="originPrice">￥{item.price}</i>
                                <span><i className="sales">销量  {item.sales}</i></span>
                                </div>
                            </div>
                       </Link>

                            {/*添加到购物车的显示与隐藏*/}
                            {
                                item.cartNum>0?<div className="button">
                                    <button className="minus" onClick={()=>this.props.subCount(item.gid)}>-</button><span>{item.cartNum}</span>
                                    <button className="plus" onClick={()=>this.props.addCount(item.gid)}>+</button>
                                </div>:<div className="shoppingCart" onClick={()=>this.props.addCount(item.gid)}><img src={require("../../../../../resource/home/cart.png")} alt=""/></div>
                            }

                        </div>
                    ))
                }
                {
                    this.props.homeProducts.hasMore?"":<div className="bottomMessage">没有商品啦~告诉我你还想吃啥？</div>

                }
            </div>
        )
    }
}
export default connect(
    state=>state.home,
    actions
)(HomeProducts)
