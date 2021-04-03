import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import backIcon from "../../icons/back-icon.svg";

function ItemDetailContainer() {
  const [item, setItem] = useState('');
  let { id } = useParams();

  const getItem = (id) => {
    fetch(`https://react-demo-store-default-rtdb.firebaseio.com/items/${id}.json`)
      .then(response => response.json())
      .then((result) => setItem(result))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    getItem(id);
  }, [id]);

  return (
    <>
      {
        item === ''
          ? <h3 className="center-text">Loading...</h3>
          : <div className={`item-detail-container ${item ? 'appear' : 'Loading...'}`}>
            <div className="breadcrumb">
              <Link to="/" className="back-link">
                <img src={backIcon} className="back-link__icon" alt="" />
                <span className="back-link__text">Back to the list </span>
              </Link>
            </div>
            <div className="item-container" >
              <ItemDetail item={item} id={id}/>
            </div>
          </div>
      }
    </>
  )
};

export default ItemDetailContainer;