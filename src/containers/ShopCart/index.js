import React, {Component} from 'react';
import "./index.less";
import {connect} from "react-redux";
import actions from "../../store/actions/cart"
import Footer from "./Footrer/index";
import {downRefresh} from "../../utils"
import ShopContent from "./ShopContent/index";
import ShopHeader from "./ShopHeader/index";
import NoShopping from "./NoShoping/index";

class ShopCart extends Component {

    constructor() {
        super();
        this.state = {
            isVip: false,
            selectedAll: false,
            cartsProducts: [],
            total: 0,
            count: 0,
            isUid: false,

        }
    }

    getMount = (cartsProducts = this.state.cartsProducts) => {
        this.state.cartsProducts = cartsProducts;
        return this.state.cartsProducts.reduce((prev, next) => {
            if (!next.isSelected) return prev;
            return prev + parseFloat(next.cartNum) * parseFloat(next.price)
        }, 0);

    };
    getCount = (cartsProducts) => {
        return cartsProducts.reduce((prev, next) => {
            if (!next.isSelected) return prev;
            return prev + parseInt(next.cartNum)
        }, 0);

    };
    handlePush = () => {
        let cartList = this.state.cartsProducts.filter((item) => item.isSelected)
        localStorage.setItem("order", JSON.stringify(cartList))
        localStorage.setItem("isVip", JSON.stringify(this.state.isVip))
        localStorage.setItem("isUid", JSON.stringify(this.state.isUid))
    }
    handleSelectedOne = (p) => {
        let cartsProducts = this.state.cartsProducts.map((item) => {
            if (item.gid == p) {
                return {...item, isSelected: !item.isSelected}
            }
            return item;

        });
        let total = this.getMount(cartsProducts);
        let count = this.getCount(cartsProducts)
        this.setState({cartsProducts, total, count}, () => {
            let selectedAll = this.state.cartsProducts.every((item) => item.isSelected)
            this.setState({selectedAll}, () => {
                console.log(count);
                this.props.alert({cartsProducts, count})

            })
        })


    }
    handleSelectedAll = () => {
        this.setState({selectedAll: !this.state.selectedAll}, () => {
            let cartsProducts = this.state.cartsProducts.map((item) => {
                return {...item, isSelected: this.state.selectedAll}
            });
            let total = this.getMount(cartsProducts);
            let count = this.getCount(cartsProducts);
            console.log(count);
            this.setState({cartsProducts, total, count}, () => {
                let obj = {cartsProducts, count}
                this.props.alert(obj)
            })


        })
    }
    add = (id) => {
        let cartsProducts;
        let oldList = this.state.cartsProducts;
        console.log(oldList);
        let product = this.state.cartsProducts.find((item => item.gid == id))
        if (product) {
            product.cartNum += 1;
            cartsProducts = oldList.map((item) => {
                if (item.gid == product.gid) {
                    return product;
                }
                return item;
            })
            let total = this.getMount(cartsProducts);
            let count = this.getCount(cartsProducts)
            this.setState({cartsProducts, total, count}, () => {

                let obj = {cartsProducts, count};
                this.props.alert(obj)
            })
        }


    }
    sub = (id) => {
        let cartsProducts;
        let oldList = this.state.cartsProducts;
        console.log(oldList);
        let product = this.state.cartsProducts.find((item => item.gid == id))
        if (product) {
            if (product.cartNum == 1) {
                cartsProducts = oldList.filter((item) => item.gid != id)

            } else {
                product.cartNum -= 1;
                cartsProducts = oldList.map((item) => {
                    if (item.gid == product.gid) {
                        return product;
                    }
                    return item;
                })
            }


            let total = this.getMount(cartsProducts);
            let count = this.getCount(cartsProducts)
            this.setState({cartsProducts, total, count}, () => {
                let obj = {cartsProducts, count}
                this.props.alert(obj)
            })
        }

    }
    onChange = () => {
        this.setState({isVip: !this.state.isVip})
    }
    handleClear = () => {
        this.setState({cartsProducts: []}, () => {
            let count = 0;
            let cartsProducts = this.state.cartsProducts;
            let obj = {cartsProducts, count}
            this.props.alert(obj)
        })
    }
    handleShow = (item) => {
        if (item == "确定删除") {
            this.setState({status: 1})
        } else {
            this.setState({status: 1})
        }
    }

    componentDidMount() {
        this.setState({cartsProducts: this.props.cartList.cartsProducts});
        let total = this.getMount(this.props.cartList.cartsProducts);
        this.setState({total});


    }


    render() {
        return (
            <div className="shopCart-page-wrap">
                <ShopHeader/>
                {this.state.cartsProducts.length == 0 ? <NoShopping/> : <ShopContent
                    selectedAll={this.state.selectedAll}
                    clickAll={this.handleSelectedAll}
                    clickOne={this.handleSelectedOne}
                    total={this.state.total}
                    cartsProducts={this.state.cartsProducts}
                    add={this.add}
                    sub={this.sub}
                    isVip={this.state.isVip}
                    onChange={this.onChange}
                    count={this.state.count}
                    clearCart={this.handleClear}
                />
                }


                <Footer
                    selectedAll={this.state.selectedAll}
                    clickAll={this.handleSelectedAll}
                    total={this.state.total}
                    push={this.handlePush}
                    isVip={this.state.isVip}
                    count={this.state.count}
                />
            </div>
        )
    }
}

export default connect(
    state => state.home,
    actions
)(ShopCart)
