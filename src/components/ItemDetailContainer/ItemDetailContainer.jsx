import { useState, useEffect } from 'react';
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCount from '../ItemCount/ItemCount';
import backIcon from "../../icons/back-icon.svg";

function ItemDetailContainer(props) {
  const [item, setItem] = useState('');

  const getItem = (pos) => {
    fetch(`https://react-demo-store-default-rtdb.firebaseio.com/items/${pos}.json`)
      .then(response => response.json())
      .then((resultado) => setItem(resultado));
  };
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  useEffect(() => {
    getItem(getRandomInt(8));
  }, []);

  return (
    <div className={`item-detail-container ${item ? 'appear' : ''}`}>
      <div className="breadcrumb">
        <a href="#" className="back-link">
          <img src={backIcon} className="back-link__icon" alt="" />
          <span className="back-link__text">Back to the list </span>
        </a>
      </div>
      <div className="item-container" >
        <ItemDetail item={item} hidden/>
        <ItemCount stock={item.stock} initial={0} />
      </div>
    </div>
  )
};

export default ItemDetailContainer;