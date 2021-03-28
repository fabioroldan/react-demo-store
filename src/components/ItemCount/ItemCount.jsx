import './ItemCount.css'
const ItemCount = ({ min=0, max, value=0, onAdd, onSubstract }) => {

    return (
        <form className="item-count">
            <div className="group">
                <button className="minus" onClick={(e) => onSubstract(e)} disabled={value <= min}>-</button>
                <input className="input-number" type="number" defaultValue={value} placeholder={value} ></input>
                <button className="plus" onClick={(e) => onAdd(e)} disabled={value >= max}>+</button>
            </div>
        </form>
    );
};

export default ItemCount;
