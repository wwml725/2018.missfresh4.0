import React, {Component} from 'react';
import './index.less'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../../store/actions/session';

class ProfileList extends Component {
    componentDidMount(){
        this.props.validate()//验证用户是否登录
    }

    handleLogout = () => {
        this.props.logout();
    }

    // handleLogin = () => {
    //     this.props.login();
    // }

    render() {
        return (
            <div className="profile-list">
                <ul className="ul-list order">
                    <NavLink to="/myorder">
                        <li className="item-list">
                            我的订单
                            <i></i>
                        </li>
                    </NavLink>

                    <li className="item-list">
                        我的地址
                        <i></i>
                    </li>


                        {
                            this.props.code?null:<NavLink to="/login"><li className="item-list">登录<i></i></li></NavLink>
                    }
                    {this.props.code&&<div onClick={this.handleLogout}><li className="item-list">退出<i></i></li></div>}




                    {/*<li className="item-list"  onClick={this.handleLogout} >*/}
                    {/*退出*/}
                    {/*<i></i>*/}
                    {/*</li>*/}


                </ul>
            </div>
        )
    }
}

export default connect(
    state => state.session,
    actions
)(ProfileList);