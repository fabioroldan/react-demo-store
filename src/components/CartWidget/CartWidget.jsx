import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import { NavLink} from 'react-router-dom';
import cartIcon from "../../icons/cart-icon.svg";
import './CartWidget.css';

function CartWidget(props) {
    const context = useContext(CartContext);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const handleBlur = () => {
        setTimeout(()=> setActive(false), 500);
    };

    return (

        <div className="cart-widget">
            <button className="icon-btn" onClick={handleClick} onBlur={handleBlur}>
                <img src={cartIcon} className="cart-widget__icon" alt="" />
                <span className={context.totalQty === 0 ? '' : 'cart-widget__quantity appear'} hidden>{context.totalQty}</span>
            </button>
            <div className={`cart-widget__items-container ${active ? 'active' : ''}`}>
                <h5>CART LIST ITEMS</h5>
                <ul>
                    {
                        context.cart.length === 0
                            ? <li>No items yet</li>
                            : context.cart.map(
                                (obj) => {
                                    return (
                                        <li key={obj.item.id}>
                                            <span>{obj.item.title}</span>
                                            <span>{obj.quantity}</span>
                                        </li>
                                    );
                                }
                            )
                    }
                </ul>
                <NavLink to="/cart" className="btn--big">GO TO CART</NavLink>

            </div>
        </div>
    );
}

export default CartWidget;