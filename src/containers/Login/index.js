
import React, {Component} from 'react';
import "./index.less";
import {connect} from "react-redux"
import actions from "../../store/actions/session";
import {Link} from 'react-router-dom';
import Alert from "../../components/Alert"
class Login extends Component {
    constructor(){
        super();
        this.state={flagTel:true,flagPas:true}
    }
    componentWillUnmount(){
        console.log(1);
        console.log(JSON.stringify(this.props.data));
        localStorage.setItem("user",JSON.stringify(this.props.data))
    }
    handleLogin = () => {
        let phone=this.phone.value;
        let password=this.password.value;
        let regUser=/^1[0-9]{10}$/;
        let regPas=/^[!.\-_0-9A-Za-z]{6,18}$/;
        //console.log(this.props);
        if(regUser.test(phone)&&regPas.test(password)){
            this.props.login({phone,password});
        }
    };
    handleChangeTel=(e)=>{
        let phone=this.phone.value;
        let regUser=/^1[0-9]{10}$/;
        let flagTel=regUser.test(phone)
        this.setState({flagTel});
        console.log(this.state.flagTel);
    };
    handleChangePas=(e)=>{
        let password=this.password.value;
        let regPas=/^[!.\-_0-9A-Za-z]{6,18}$/;
        let flagPas=regPas.test(password)
        this.setState({flagPas});
        console.log(this.state.flagPas);
    };

    render() {
        return (
            <div className="login">
                <header>
                    <i className="iconfont icon-fanhui" onClick={() => {
                            this.props.history.go(-1)
                        }}></i>登录
                </header>

                <main>
                    <form action="">
                        <div className="input tel">
                            <input
                                onChange={this.handleChangeTel}
                                ref={input=>this.phone=input}
                                type="text"
                                placeholder="请输入手机号"/>
                            {
                                !this.state.flagTel?<span className="tip">請輸入正確的手機號碼</span>:null
                            }
                            {/*<button>获取验证码</button>*/}
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
                            <button onClick={this.handleLogin}>登录</button>
                        </div>
                        <div className="btn">
                            <Link to="/reg" className="log reg">人家还没有账号 --!</Link>
                        </div>
                        <p className="botInfo">为方便您及时查询订单信息，需要验证您的手机号来登录</p>
                    </form>
                    {
                        !this.props.msg==""?<Alert/>:null
                    }
                </main>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(Login);
