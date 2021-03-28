import './ItemDetail.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ item }) {
    const initial = 0;
    const [itemsQ, setItemsQ] = useState(initial);
    const availableStock = item.stock - itemsQ;

    const Stock = () => {
        return (
            <>
                <p className="stock">Available Stock: {availableStock}</p>
                <ItemCount min="0" max={item.stock} value={itemsQ} onAdd={onAdd} onSubstract={onSubstract} />
                <div className="btn-group">
                    <Link to="/cart" className={`btn--big ${itemsQ || 'disabled'}`}  >BUY IT NOW</Link>
                    <button className="btn--big" disabled>ADD TO CART</button>
                </div>
            </>
        )
    }

    const NoStock = () => {
        return <h3> No stock available </h3>
    }

    const onAdd = (e) => {
        e.preventDefault();
        if (itemsQ > item.stock) {
            setItemsQ(item.stock);
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

    const IsAvailable = item.stock > 0
        ? Stock
        : NoStock;

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