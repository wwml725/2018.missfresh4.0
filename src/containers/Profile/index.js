import React, {Component} from 'react'
import './index.less'
import ProfileList from "./ProfileList/index";
import ProfileHeader from "./ProfileHeader/index";
import ProfileBody from "./ProfileBody/index";

export default class Profile extends Component {
    render() {
        return (
            <div>
                {/*profile-header  satart*/}
                <ProfileHeader/>
                <ProfileBody/>
                {/*profile-list start*/}
                <ProfileList/>
                {/*profile-list end*/}
            </div>
        )
    }
}

