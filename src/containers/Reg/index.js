import React, {Component} from 'react';
import "./index.less";
import {connect} from "react-redux"
import actions from "../../store/actions/session"
import Alert from "../../components/Alert/index";
import {withRouter} from 'react-router-dom';

 class Reg extends Component {
     constructor(){
         super();
         this.state={flagTel:true,flagPas:true}
     }
    handleLog = () => {
        let username=this.username.value;
        let phone=this.phone.value;
        let password=this.password.value;
        let regUser=/^1[0-9]{10}$/;
        let regPas=/^[!.\-_0-9A-Za-z]{6,18}$/;
        if(regUser.test(phone)&&regPas.test(password)){
            this.props.reg({username,password,phone});
        }
    }
    handleChangeTel=(e)=>{
        let phone=this.phone.value;
        let regUser=/^1[0-9]{10}$/;
        let flagTel=regUser.test(phone)
        this.setState({flagTel});
        console.log(this.state.flagTel);
    }
    handleChangePas=(e)=>{
         let password=this.password.value;
         let regPas=/^[!.\-_0-9A-Za-z]{6,18}$/;
         let flagPas=regPas.test(password)
         this.setState({flagPas});
         console.log(this.state.flagPas);
     }
    render() {
        console.log(this.props);
        return (

            <div className="login">
                <header>
                    <i
                        className="iconfont icon-fanhui"
                        onClick={() => {
                            this.props.history.go(-1)
                        }}
                    >
                    </i>注册
                </header>
                <main>
                    <form action="">
                        <div className="input tel">
                            <input
                                ref={input=>this.username=input}
                                type="text"
                                placeholder="请输入昵称"/>
                            {/*<button>获取验证码</button>*/}
                        </div>
                        <div className="input tel">
                            <input
                                onChange={this.handleChangeTel}
                                ref={input=>this.phone=input}
                                type="text"
                                placeholder="请输入手机号"/>

                            {
                                !this.state.flagTel?<span className="tip">請輸入正確的手機號碼</span>:null
                            }
                        </div>
                        <div className="input code">
                            <input
                                onChange={this.handleChangePas}
                                ref={input=>this.password=input}
                                type="password"
                                placeholder="输入6-18位常見字符密码"/>
                            {
                                !this.state.flagPas?<span className="tip">密碼格式不正確</span>:null
                            }
                        </div>
                        <div className="btn">
                            <button onClick={this.handleLog}>注册</button>
                        </div>
                        <p className="botInfo">为方便您及时查询订单信息，需要验证您的手机号来注册</p>
                    </form>
                </main>
                {
                    !this.props.msg==""?<Alert/>:null
                }

            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions,
)(Reg)
