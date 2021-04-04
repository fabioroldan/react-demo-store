import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import deleteIcon from "../../icons/delete-icon.svg";
import backIcon from "../../icons/back-icon.svg";
import ItemCount from '../ItemCount/ItemCount';
import EmptyCartSvg from './EmptyCartSvg'

function Cart(props) {
    const context = useContext(CartContext);

    const onAdd = (e, item, quantity) => {
        context.addItem(e, item, quantity)
    };

    const onSubstract = (e, item, quantity) => {
        context.substractItem(e, item, quantity)
    };

    return (
        <div >
            <div className="breadcrumb">
                <Link to="/" className="back-link">
                    <img src={backIcon} className="back-link__icon" alt="" />
                    <span className="back-link__text">Back to the list </span>
                </Link>
            </div>
            <div className="appear" hidden={context.cart.length !== 0}>
                <EmptyCartSvg />
                <h3>Your Cart is Empty</h3>
            </div>
            <div className="cart appear" hidden={context.cart.length === 0}>
                <div className="cart-header"><span className="cart__title">CART LIST ITEMS</span> <button onClick={() => { context.clear() }} className="cart__clear">delete all items</button> </div>
                <ul>
                    {
                        context.cart.map(
                            (obj, pos) => {
                                return (
                                    <li key={obj.item.id} className="cart-item">
                                        <img src={obj.item.pictureUrl} alt={obj.item.title} className="cart-item__img" />
                                        <div className="cart-item__description">
                                            <h3 className="cart-item__title">{obj.item.title}</h3>
                                            <div className="cart-item__actions">
                                                <span>Qty:</span> <ItemCount min="0" max={obj.item.stock} value={obj.quantity} onAdd={(e) => { onAdd(e, obj.item, 1) }} onSubstract={(e) => { onSubstract(e, obj.item, 1) }} className="cart-input-number" />
                                                <span className="pri">Pr: ${obj.item.price} </span>
                                                <span>Subtotal: ${obj.item.price * obj.quantity} </span>
                                                <button onClick={() => { context.removeItem(pos) }} className="cart-item__remove">
                                                    <img src={deleteIcon} className="delete-icon" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            }
                        )
                    }
                    <div className="cart__total"><span>Total:</span> <span>${context.totalPrice}</span> </div>
                </ul>
                <Link to="/checkout" className={`btn--big ${context.cart.length === 0 ? 'disabled' : ''}`}  >CHECKOUT NOW</Link>
            </div>
        </div>

    );
}

export default Cart;