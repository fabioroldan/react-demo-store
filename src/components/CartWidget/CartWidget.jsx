import React, { Component } from 'react';
import cartIcon from "../../icons/cart-icon.svg";
import './CartWidget.css';

class CartWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            cartQuantity: 0
        }
    }

    handleClick = () => {
        this.setState({ active: !this.state.active })
    };

    handleBlur = () => {
        this.setState({ active: false })
    };

    render() {
        return (
            <div className="cart">
                <button className="icon-btn" onClick={this.handleClick} onBlur={this.handleBlur}>
                    <img src={cartIcon} className="cart__icon" alt="" />
                    <span className={this.state.cartQuantity ? 'cart__quantity' : ''} hidden>{this.state.cartQuantity}</span>
                </button>
                <div className={`cart__items-container ${this.state.active ? 'active' : ''}`}>
                    <h5>CART LIST ITEMS</h5>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default CartWidget;