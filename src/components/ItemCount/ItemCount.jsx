import { useState } from 'react';
import './ItemCount.css';
const ItemCount = ({ min = 0, max, value = 0, onAdd, onSubstract }) => {
    const [_value, setValue] = useState(value);

    const inputChangedHandler = (event) => {
        setValue(event.target.value);
    }

    return (
        <form className="item-count">
            <div className="group">
                <button className="minus" onClick={(e) => { onSubstract(e); setValue(_value - 1) }} disabled={_value <= min}>-</button>
                <input className="input-number" type="number" value={_value} placeholder={_value} onChange={(event) => inputChangedHandler(event)}></input>
                <button className="plus" onClick={(e) => { onAdd(e); setValue(_value + 1) }} disabled={_value >= max}>+</button>
            </div>
        </form>
    );
};

export default ItemCount;
