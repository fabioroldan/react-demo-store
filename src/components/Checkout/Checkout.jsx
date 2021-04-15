import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import backIcon from "../../icons/back-icon.svg";
import firebase from "firebase/app";
import { getFirestore } from '../../firebase';

function Checkout(props) {
    const context = useContext(CartContext);
    const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const createOrder = () => {
        const db = getFirestore();

        let items = context.cart.map(
            (obj) => {
                return {
                    id: obj.item.id,
                    title: obj.item.title,
                    quantity: obj.quantity,
                    price: obj.item.price,
                };
            }
        )

        const newOrder = {
            buyer,
            items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: context.totalPrice,
        };

        const orders = db.collection("orders");
        orders.add(newOrder).then((resp) => {
            console.log('Order created')

            let batch = db.batch();

            let itemsRef = db.collection("items");
            context.cart.forEach(
                (obj) => {
                    batch.update(itemsRef.doc(obj.item.id), { stock: obj.item.stock });
                }
            )

            batch.commit().then(() => {
                context.clear();
                setBuyer({ name: '', phone: '', email: '' });
            });

        }).catch((err) => {
            console.error('Error: ', err)
        });
    }


    return (
        <div >
            <div className="breadcrumb">
                <Link to="/cart" className="back-link">
                    <img src={backIcon} className="back-link__icon" alt="" />
                    <span className="back-link__text">Back to the cart </span>
                </Link>
            </div>
            <div className="checkout appear" hidden={context.cart.length === 0}>

                <div className="checkout__title">BILLING ADDRESS</div>
                <input type="text" name="name" onChange={handleInputChange} id="name" placeholder=" " />
                <label htmlFor="name">Name</label>
                <input type="text" name="phone" onChange={handleInputChange} id="tel" placeholder=" " />
                <label htmlFor="tel">Phone</label>
                <input type="email" name="email" onChange={handleInputChange} id="email" placeholder=" " />
                <label htmlFor="email" >Email</label>

                <div className="checkout__title">REVIEW YOUR ORDER</div>
                <ul className="checkout-order">
                    <li className="checkout-order__head">
                        <span >Title</span>
                        <span>Qty</span>
                        <span >Pr </span>
                        <span>Subtotal:</span>
                    </li>
                    {
                        context.cart.map(
                            (obj) => {
                                return (
                                    <li className="checkout-order__item" key={obj.item.id}>
                                        <span> {obj.item.title} </span>
                                        <span> {obj.quantity}</span>
                                        <span> $ {obj.item.price} </span>
                                        <span> $ {obj.item.price * obj.quantity}</span>
                                    </li>
                                );
                            }
                        )
                    }
                    <li className="checkout-order__total"><span>Total: </span> <span> $ {context.totalPrice}</span> </li>
                </ul>
                <Link to="/orders" className={`btn--big ${((context.cart.length > 0) && (buyer.name !== '' && buyer.phone !== '' && buyer.email !== '')) ? '' : 'disabled'}`} onClick={createOrder}> PLACE ORDER NOW </Link>
            </div>
        </div>

    );
}

export default Checkout;