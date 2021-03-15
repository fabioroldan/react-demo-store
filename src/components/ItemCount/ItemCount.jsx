import { useState } from 'react';
import './ItemCount.css'
const ItemCount = ({ stock, initial, onAdd }) => {
    const [itemsQ, setItemsQ] = useState(initial);
    let availableStock = stock - itemsQ;

    const handleChange = (e) => {
        e.preventDefault();
        setItemsQ(Number(e.target.value));

        if (Number(e.target.value) > stock) {
            setItemsQ(stock);
        }
        if (Number(e.target.value) < 0) {
            setItemsQ(0);
        }
    };

    const handleMD = (e) => {
        e.preventDefault();

        if (e.target.innerText === '-') {
            setItemsQ(itemsQ - 1);
        };
        if (e.target.innerText === '+') {
            setItemsQ(itemsQ + 1);
        }
    };

    return (
        <form className="item-count">
            <span className="stock">Available Stock: {availableStock}</span>
            <div className="group">
                <button className="minus" onClick={(e) => handleMD(e)} disabled={itemsQ <= 0}>-</button>
                <input className="input-number" type="number" value={itemsQ} placeholder={initial} onChange={(e) => handleChange(e)}></input>
                <button className="plus" onClick={(e) => handleMD(e)} disabled={itemsQ >= stock}>+</button>
            </div>
            <button className="btn--big" onClick={(e) =>{ onAdd(e, itemsQ); setItemsQ(0)}}>ADD TO CART</button>
        </form>
    );
};

export default ItemCount;
