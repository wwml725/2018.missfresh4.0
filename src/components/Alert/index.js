import React,{Component} from "react";
import "./index.less"
import {connect} from "react-redux"
import actions from "../../store/actions/session"
 class Alert extends Component {
    static default={
        level:"default"
    }

     componentDidMount(){//在组件销毁之前把redux中的消息清除掉
         setTimeout(()=>{
             this.props.clearMessage();
         },2000);
     }

    componentWillUnmount(){//在组件销毁之前把redux中的消息清除掉
         this.props.clearMessage();
    }
     render() {
         /*console.log(this.props);
         return (
             <div className={"alert success"}>
                 {this.props.msg}
             </div>
         )*/
         /*if (this.props.code==1) {
             return (
                 <div className='mask'>
                     <div className="alert error">
                         {this.props.msg}
                     </div>
                 </div>

             )
         }else {
             return null;
         }*/
         if (this.props.code==0) {
             return (
                 <div className='mask'>
                     <div className="alert success">
                         {this.props.msg}
                     </div>
                 </div>

             )
         } else if (this.props.code==1) {
             return (
                 <div className='mask'>
                     <div className="alert error">
                         {this.props.msg}
                     </div>
                 </div>

             )
         } else {
             return null;
         }
     }
 }

export default connect(state=>state.session,actions)(Alert)