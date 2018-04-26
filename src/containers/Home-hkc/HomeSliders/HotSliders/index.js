import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import {connect} from "react-redux";
import "./index.less";
import actions from "../../../../store/actions/home";
class HotSliders extends Component{
    constructor(){
        super();
        this.state = {index:0};
    }
    componentDidMount(){
        this.props.fetchSliders();
    }
    render() {
        let swipeOptions = {
            auto: 3000,
            continuous: true,
            stopPropagation: true,
            callback: (index) => {
                this.setState({index});
            },
        };
        let swipe = (
            <ReactSwipe swipeOptions={swipeOptions}>
                {
                    this.props.homeProducts.homeSliders.map((item,index)=>(
                        <div key={index}>
                            <img src={item}/>
                        </div>
                    ))
                }
            </ReactSwipe>
        );
        return (
            <div className="home-sliders" >
                {
                    this.props.homeProducts.homeSliders.length>0?swipe:null
                }
                <div className="dots">
                    {
                        this.state.index+1
                    }/4
                </div>
            </div>
        )
    }

}
export default connect(
    state => state.home,
    actions
)(HotSliders)
