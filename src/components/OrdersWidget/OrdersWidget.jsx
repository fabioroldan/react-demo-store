import { NavLink } from 'react-router-dom';
import ordersIcon from "../../icons/orders-icon.svg";
import './OrdersWidget.css';

function OrdersWidget(props) {
    return (

        <div className="orders-widget">
            <button className="icon-btn">
                <NavLink to="/orders" >
                    <img src={ordersIcon} className="cart-widget__icon" alt="" />
                </NavLink>
            </button>
        </div>
    );
}

export default OrdersWidget;