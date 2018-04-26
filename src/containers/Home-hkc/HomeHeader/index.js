import React, {Component} from 'react';
import "./index.less";

export default class HomeHeader extends Component {

    componentDidMount() {
        this.props.headerListMove(this.ulDom)
    }
    handleChangeIndex = (index) => {
        this.props.setState({index})
    };

    handleShowList=(index)=>{
        this.props.turn(index - this.props.index);
        this.props.changeBackground();
    };
    //隐藏列表信息
    getList() {
        return (
            <div className="hiddenList">
                <h5>全部品类</h5>
                <ul>
                    {
                        this.props.kindList.map((item, index) => (
                            <li key={index} onClick={() =>this.handleShowList(index)}>
                                <img src={item.kindIcon} alt=""/>
                                <p>{item.kind}</p>
                            </li>
                        ))
                    }
                </ul>
                {/*显示或关闭按钮*/}
                <div className="switch-close" onClick={()=>this.props.changeBackground()}>
                    {
                        this.props.showList&& <i className="iconfont icon-guanbi"></i>
                    }
                </div>
            </div>
        )
    }

    render() {
        let style={
            width:this.props.kindList.length*56+'px',
            // left:this.props.left+"px",
            transitionDuration:"500ms",
            transform:`translate(${this.props.left}px)`
        };
        return (
            <div className="home-header">
                <div className="header-top">
                    <div className="title">
                        <h3>次日到达</h3>
                        <p>北京市<i></i></p>
                    </div>
                    <div className="search">
                        <i className="iconfont icon-sousuo"></i>
                        <span>搜索</span>
                    </div>
                </div>
                {/*头部列表部分*/}
                <div className='header-bottom-wrapper'>
                    {/*导航列表*/}
                    <div className="listWrapper">
                            <ul style={style} ref={input=>this.ulDom=input}>
                                {
                                    this.props.kindList
                                        .map((item, index) => (
                                            <li key={index} className={(index == this.props.index ? "active" : "")}
                                                onClick={(event) => this.props.turn(index - this.props.index)}>
                                                {item.kind}
                                            </li>
                                        ))
                                }
                            </ul>

                    </div>

                    <div className="switch-open1" onClick={()=>this.props.changeBackground()}>
                        {
                            this.props.showList==true?"": <i className="iconfont icon-liebiao"></i>
                        }
                    </div>

                </div>
                {
                    this.props.showList && this.getList()
                }
            </div>
        )
    }
}
