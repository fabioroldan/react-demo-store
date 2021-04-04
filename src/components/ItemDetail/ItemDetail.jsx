import './ItemDetail.css';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

function ItemDetail(props) {
    const initial = 1;
    const [itemsQ, setItemsQ] = useState(initial);
    const context = useContext(CartContext);
    const item = {
        id: props.id,
        category: props.item.category,
        description: props.item.description,
        fullDescription: props.item.fullDescription,
        pictureUrl: props.item.pictureUrl,
        price: props.item.price,
        stock: props.item.stock,
        title: props.item.title
    };
    const stockInCart = context.getItemQty(item.id);
    const [maxStock, setMaxStock] = useState(item.stock - stockInCart);
    const availableStock = maxStock - itemsQ;

    const Stock = () => {
        return (
            <>
                <p className="stock">Available Stock: {availableStock}</p>
                <ItemCount min="0" max={maxStock} value={itemsQ} onAdd={onAdd} onSubstract={onSubstract} />
                <div className="btn-group">
                    <Link to="/cart" className={`btn--big`}  >GO TO CART</Link>
                    <button onClick={(e) => { onAddToCart(e) }} className={`btn--big ${itemsQ === 0 ? 'disabled' : ''}`} >ADD TO CART</button>
                </div>
            </>
        )
    }

    const NoStock = () => {
        return <h3 className="appear"> No more stock available </h3>
    }

    const onAdd = (e) => {
        e.preventDefault();
        if (itemsQ > maxStock) {
            setItemsQ(maxStock);
        } else {
            setItemsQ(itemsQ + 1);
        }
    };

    const onSubstract = (e) => {
        e.preventDefault();
        if (itemsQ < initial) {
            setItemsQ(initial);
        } else {
            setItemsQ(itemsQ - 1);
        }
    };

    const IsAvailable = maxStock > 0
        ? Stock
        : NoStock;

    const onAddToCart = (e) => {
        context.addItem(e, item, itemsQ);
        setMaxStock(maxStock - itemsQ);
        setItemsQ(0);
    };

    return (
        <div className="item-detail">
            <figure>
                <img src={'.' + item.pictureUrl} alt={item.title} />
                <IsAvailable />
                <figcaption>
                    <h3 className="title">{item.title}</h3>
                    <p className="description">
                        {item.description}
                    </p>
                    <p className="description">
                        {item.fullDescription}
                    </p>
                    <span className="price">$ {item.price}</span>
                </figcaption>
            </figure>
        </div>
    );
}

export default ItemDetail;