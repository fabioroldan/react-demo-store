import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Orders.css';
import Loader from '../Loader/Loader';
import backIcon from "../../icons/back-icon.svg";
import deleteIcon from "../../icons/delete-icon.svg";
import formatDate from "../../utils/formatDate"
import { getFirestore } from '../../firebase';

function Orders() {
    const [orders, setOrders] = useState([])
    const db = getFirestore();

    const getAll = () => {
        const itemsCollection = db.collection('orders');
        itemsCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No orders');
            }
            let snapshot = querySnapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            });
            setOrders(snapshot);
        }).catch((error) => {
            console.error("Error:", error);
        }).finally(() => {
            console.log("Orders loaded");
        });
    };

    function deleteOrder(id) {
        const order = db.collection("orders").doc(id);
        order.delete();
        let updatedOrders = orders.filter((order) => { return id !== order.id })
        setOrders(updatedOrders);
    }

    useEffect(() => {
        getAll();
    }, []);

    return (
        <div >
            <div className="breadcrumb">
                <Link to="/cart" className="back-link">
                    <img src={backIcon} className="back-link__icon" alt="" />
                    <span className="back-link__text">Back to the cart </span>
                </Link>
            </div>
            {
                (orders.length === 0)
                    ? <div className="appear" > <Loader /> </div>
                    : <div className="orders appear" >
                        <div className="orders__title">ORDERS</div>
                        {
                            orders.map(
                                (order) => {
                                    return (
                                        <ul className="order appear" key={order.id}>
                                            <button onClick={() => { deleteOrder(order.id) }} className="order__delete">
                                                <img src={deleteIcon} className="delete-icon" alt="" />
                                            </button>
                                            <h4>ORDER</h4>
                                            <p className="order__id">({order.id}) </p>
                                            <ul className="order__buyer">
                                                <li>
                                                    <b>Name: </b> {order.buyer.name}
                                                </li>
                                                <li>
                                                    <b>Phone: </b> {order.buyer.phone}
                                                </li>
                                                <li>
                                                    <b>Email: </b> {order.buyer.email}
                                                </li>
                                                <li>
                                                    <b>Date: </b> {formatDate(order.date)}
                                                </li>
                                            </ul>
                                            <li className="order__head">
                                                <span >Title</span>
                                                <span>Qty</span>
                                                <span >Pr </span>
                                                <span>Subtotal:</span>
                                            </li>
                                            {
                                                order.items.map(
                                                    (item) => {
                                                        return (
                                                            <li className="order__item" key={item.id}>
                                                                <span> {item.title} </span>
                                                                <span> {item.quantity}</span>
                                                                <span> $ {item.price} </span>
                                                                <span> $ {item.price * item.quantity}</span>
                                                            </li>
                                                        );
                                                    }
                                                )
                                            }
                                            <li className="order__total"><span>Total: </span> <span> $ {order.total}</span> </li>
                                        </ul>
                                    );
                                }
                            )
                        }
                        <button className={`btn--big ${orders.length > 0 ? '' : 'disabled'}`} > PAY ORDERS </button>
                    </div>
            }
        </div>
    );
}

export default Orders;