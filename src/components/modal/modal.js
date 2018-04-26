import './modal.less';
import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
class Modal extends Component{
    render(){
        return (
            <div className="modal">
              <div className="modal-footer">
                  <span className="modal-title">复制下方链接，分享给好友！</span>
                  <p className="modal-p">{this.props.modalLink}</p>
                  <i onClick={()=>this.props.changeFlag()} className="modal-return">X</i>
              </div>
            </div>
        )
    }
}

export default withRouter(Modal);