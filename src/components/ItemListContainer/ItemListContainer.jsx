import { useState } from 'react';
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

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
                {props.items ? '' : props.greeting}
            </h3>
            <ItemList items={props.items} />
            <div style={{margin: '1rem', padding: '1rem'}}>
                <hr/>
                <h3>
                    Items in cart: {cart}
                </h3>
                <ItemCount stock={currentStock} initial={0} onAdd={addToCart} />
            </div>
        </div>
    )

};

export default ItemListContainer;