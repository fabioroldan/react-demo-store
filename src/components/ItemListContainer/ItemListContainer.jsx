import { useState } from 'react';
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(props) {
    const [currentStock, setCurrentStock] = useState(5);
    const [cart, setCart] = useState(0);

    const addToCart = (e, stock) => {
        e.preventDefault();
        setCurrentStock(() => setCurrentStock(currentStock - stock));
        setCart(cart + stock);
    };

    return (
        <div className="item-list-container">
            <h3>
                {props.greeting}
            </h3>
            <h3>
                Items in cart: {cart}
            </h3>
            <ItemCount stock={currentStock} initial={0} onAdd={addToCart} />
        </div>
    )

};

export default ItemListContainer;