import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { getFirestore } from '../../firebase';
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import backIcon from "../../icons/back-icon.svg";

function ItemDetailContainer() {
  const [item, setItem] = useState('');
  let { id } = useParams();

  const getItem = (id) => {
    const db = getFirestore();
    db.collection('items').doc(id).get().then((snapshot) => {
      setItem(snapshot.data());
    });
  };

  useEffect(() => {
    getItem(id);
  }, [id]);

  return (
    <>
      {
        item === ''
          ? <Loader/>
          : <div className={`item-detail-container ${item ? 'appear' : 'Loading...'}`}>
            <div className="breadcrumb">
              <Link to="/" className="back-link">
                <img src={backIcon} className="back-link__icon" alt="" />
                <span className="back-link__text">Back to the list </span>
              </Link>
            </div>
            <div className="item-container" >
              <ItemDetail item={item} id={id} />
            </div>
          </div>
      }
    </>
  )
};

export default ItemDetailContainer;