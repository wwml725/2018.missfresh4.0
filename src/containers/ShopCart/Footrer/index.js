import React,{Component} from 'react';
import {Link} from "react-router-dom"
export default class Footer extends Component{
    handleCheck=()=>{

    }
    constructor(){
        super();
    }
    render(){
        return (
            <div className="shopCart-footer">
                <div className="left">
                    <div className="selected">
                        <span className={"selected-all "+(this.props.selectedAll?"active":"")} onClick={this.props.clickAll}></span>全选
                    </div>
                    <div className="counted">
                        {this.props.isVip? <p>合计 <span>{`￥`+(this.props.total-this.props.count).toFixed(2)}</span></p>: <p>合计 <span>{`￥`+this.props.total.toFixed(2)}</span></p>}
                        <b>免邮</b>
                    </div>
                </div>
                <div className="right">
                    <Link to="/confirm" onClick={this.props.push}>去结算</Link>
                </div>
            </div>

    )
    }
}

