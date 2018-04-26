import React, {Component} from 'react';
import "./index.less";
import HotSliders from "./HotSliders/index";
import HomeProducts from "./HomeProducts/index";

export default class HomeSliders extends Component {
    componentDidMount() {
        let oContent = this.content;
        this.props.move(oContent)


    }
    componentWillmount(){
        let dur=""
        {this.props.chIndex>1? dur = "1500ms":"0"}
    }


    render() {
        {
            console.log(this.props.chIndex);
            console.log(this.props.index);
        }



        let style = {
            width: this.props.kindList.length * 320 + 'px',
            transform: `translate(${this.props.sliderLeft}px)`,
        }







        ;
        let swipeOptions = {
            continuous: false,
        };
        return (
            <div className="home-page-wrapper">
                <div id="homeListWrapper" style={style} ref={content => this.content = content}>
                    <div className="home-fruit" data-id={1}>
                        <HotSliders/>
                        <div className='onsale' style={{width: "100%"}}><img
                            src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>

                    <div className="hot-pot" data-id={2}>
                        <div className='onsale'><img src={require("../../../../resource/home/onsale.PNG")}/></div>
                        <HomeProducts/>
                    </div>
                    <div className="hot-onsale" data-id={3}>
                        3
                    </div>
                    <div className="vegetables" data-id={4}>
                      4
                    </div>
                    <div className="milk" data-id={5}>
                        5
                    </div>
                    <div className="eggs" data-id={6}>
                        6
                    </div>

                    <div className="eggs" data-id={7}>
                        7
                    </div>

                    <div className="eggs" data-id={8}>
                       8
                    </div>

                    <div className="eggs" data-id={9}>
                        9
                    </div>

                    <div className="eggs" data-id={10}>
                       10
                    </div>

                    <div className="eggs" data-id={11}>
                       11
                    </div>

                    <div className="eggs" data-id={12}>
                      12
                    </div>

                    <div className="eggs" data-id={13}>
                       13
                    </div>

                    <div className="eggs" data-id={14}>
                       14
                    </div>
                </div>
            </div>
        )
    }
}


