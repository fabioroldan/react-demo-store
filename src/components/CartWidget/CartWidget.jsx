import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from "../../icons/cart-icon.svg";
import './CartWidget.css';

function CartWidget(props) {
    const context = useContext(CartContext);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const handleBlur = () => {
        setActive(false);
    };

    return (

        <div className="cart">
            <button className="icon-btn" onClick={handleClick} onBlur={handleBlur}>
                <img src={cartIcon} className="cart__icon" alt="" />
                <span className={context.totalQty !== 0 ? 'cart__quantity' : ''} hidden>{context.totalQty}</span>
            </button>
            <div className={`cart__items-container ${active ? 'active' : ''}`}>
                <h5>CART LIST ITEMS</h5>
                <ul>
                    {
                        context.cart.length === 0
                            ? <li>No items yet</li>
                            : context.cart.map(
                                (pos) => {
                                    return <li key={pos.item.id}><span>{pos.item.title}</span><span>{pos.quantity}</span> </li>;
                                }
                            )
                    }
                </ul>
                <Link to="/cart" className={`btn--big ${context.cart.length === 0 ? 'disabled': '' }`}  >GO TO CART</Link>
            </div>
        </div>

    );
}


export default CartWidget;