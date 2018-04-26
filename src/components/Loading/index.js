import React, {Component} from 'react';
import './index.less'
export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading-img"><img src={require("../../images/loading-gif-vip.gif")}/></div>
      </div>
    )
  }
}