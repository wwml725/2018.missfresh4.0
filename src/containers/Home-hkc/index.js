import React, {Component} from 'react';
import actions from "../../store/actions/home";
import {connect} from "react-redux";
import "./index.less";

import Loading from "../../components/Loading/index";
import HomeHeader from "./HomeHeader/index";
import HomeSliders from "./HomeSliders/index";

import {getAllKindsIcons} from "../../api/home";
import {upLoadMore, downRefresh} from '../../utils';

class Home extends Component {
    constructor() {
        super();
        this.state = {chIndex:0,index: 0, left: 0, sliderLeft: 0, showList: false, kindList: []};
    }

    componentDidMount() {
        upLoadMore(this.content, this.props.fetchHomeProducts);
        downRefresh(this.content, this.props.refreshProducts);
        //获取分类图标放进当前页面的初始状态中
            getAllKindsIcons().then(result => {
                this.setState({kindList: result.data})
            });


        console.log(this.state);
    }

    change(index) {
        this.setState({index})
    }


    /*点击每一类使索引发生改变*/
    turn = (step) => {
        console.log(this.props);

        let index = this.state.index + step;
        let left = this.state.left;//这个left值可以给ul列表使用
        let sliderLeft = this.state.sliderLeft;
        let chIndex = step;
        sliderLeft = index * -320;
        if (index - 2 <= 0) {
            left = 0;
        } else if (index < this.state.kindList.length - 3) {
            left = -(index - 2) * 56;
        } else {
            left = -(this.state.kindList.length - 5) * 56;
        }

        return this.setState({index, left, sliderLeft,chIndex})
    };

    /*滑动轮播图改变索引*/
    move = (count) => {
        let index = this.state.index;
        let oDiv = count;
        let startY;
        let startX;
        let distance;
        let _this = this;
        oDiv.addEventListener("touchstart", touchstart);

        function touchstart(event) {
            clearTimeout(oDiv.timer);
            startX = event.touches[0].pageX;
            startY = event.touches[0].pageY;
            if (startY > 80) {
                oDiv.addEventListener("touchmove", touchmove);
                oDiv.addEventListener("touchend", touchend);
            }
            console.log(startY,"kjjj");
        }

        function touchmove(event) {
            clearTimeout(oDiv.timer);
            let pageX = event.touches[0].pageX;
            distance = pageX - startX;
            console.log(distance, "水平移动距离距离距离");

        }

        function touchend(event) {
            if (distance >= 8 && _this.state.index !== 0) {//往右滑
                console.log("+++++++++++++往右滑+++++++++++++");
                oDiv.timer = setTimeout(() => {
                    _this.turn(-1)
                }, 100);
            } else if (distance <= -8 && _this.state.index !== (_this.state.kindList.length - 1)) {//往左滑
                console.log("------------往左滑--------------");
                oDiv.timer = setTimeout(() => {
                    _this.turn(1);
                }, 100)
            } else {
                oDiv.removeEventListener("touchmove", touchmove);
                oDiv.removeEventListener("touchend", touchend);
            }
            oDiv.removeEventListener("touchmove", touchmove);
            oDiv.removeEventListener("touchend", touchend);

        }
    }

    changeBackground = () => {
        this.setState({showList: !this.state.showList});
        console.log(this.state);

    };

    headerListMove = (dom) => {
        let oUl = dom;
        let left = this.state.left;
        oUl.addEventListener("touchstart", touchstart);
        let _this = this;

        function touchstart(event) {
            clearTimeout(oUl.timer);

            let startX = event.touches[0].pageX;
            let distance;
            oUl.addEventListener("touchmove", touchmove);
            oUl.addEventListener("touchend", touchend);

            function touchmove(event) {
                let oPageX = event.touches[0].pageX;
                distance = oPageX - startX;
                left = left + distance;
                /*左边界*/
                if (distance > 10) {

                    if (left >= 0) {
                        left = 0;
                    } else if (left < -(_this.state.kindList.length - 5) * 56) {//右边界
                        left = -(_this.state.kindList.length - 10) * 56;
                    } else {
                        left = left;
                    }
                    return _this.setState({left})
                }
            }

            function touchend(event) {
                clearTimeout(oUl.timer);
                oUl.removeEventListener("touchmove", touchmove);
                oUl.removeEventListener("touchend", touchend);
            }
        }
    }

    render() {
        return (
            <div className="home">
                <HomeHeader
                    headerListMove={this.headerListMove}
                    changeBackground={this.changeBackground}
                    {...this.state}
                    turn={this.turn}/>
                <div className="home-content" ref={content => this.content = content}>
                    <Loading/>
                    <HomeSliders
                        {...this.props}
                        move={this.move}
                        {...this.state}/>
                </div>


                {/*遮罩层*/}
                <div className={this.state.showList ? "blackBg" : ""}></div>

            </div>
        )
    }
}

export default connect(
    state => state.home,
    actions
)(Home)