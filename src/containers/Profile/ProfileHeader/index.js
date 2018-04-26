import React, {Component} from 'react'
import './index.less'
import {getInfo} from "../../../api/userInfo";
import util from "../../../util";

export default class ProfileHeader extends Component {
    constructor() {
        super();
        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
        getInfo().then(res => (
            this.setState({userInfo: res.data})
        ));
    }

    render() {
        console.log(this.state);
        return (
            <div className="profile-header">
                <div className="profile-header-dailysignin">
                    <span>签到</span>
                </div>
                <div className="profile-header-user">
                    <div className="profile-header-avatar">
                        <img src={this.state.userInfo.avatar} alt=""/>
                    </div>
                    <div className="profile-user-detail">
                        <div className="profile-user-name">{this.state.userInfo.username}</div>
                        <div className="img-user-level">
                            <img src={require('../../../images/user-level.png')} alt=""/>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}