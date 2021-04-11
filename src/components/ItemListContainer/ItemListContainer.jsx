import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import ItemCategories from "../ItemCategories/ItemCategories";
import { getFirestore } from '../../firebase';

function ItemListContainer() {
    let [categories, setCategories] = useState('');
    let [items, setItems] = useState('');
    let [itemsFiltered, setItemsFiltered] = useState('');
    let { id: idCategory } = useParams();

    const getAll = () => {
        const db = getFirestore();
        const itemsCollection = db.collection('items');
        itemsCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results');
            }
            let snapshot = querySnapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            });
            setItems(snapshot);
        }).catch((error) => {
            console.error("Error:", error);
        }).finally(() => {
            console.log("Loaded");
        });

        const categoriesCollection = db.collection('categories');
        categoriesCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results');
            }
            let snapshot = querySnapshot.docs.map((doc) => doc.data());
            setCategories(snapshot);
        }).catch((error) => {
            console.error("Error:", error);
        }).finally(() => {
            console.log("Loaded");
        });
    };

    const filterByCategory = (_category, _items) => {
        if (_items !== '') {
            if (_category !== undefined) {
                let filtered = _items
                    .filter((obj) => {
                        return obj.category === _category;
                    });
                if (filtered.length === 0) {
                    setItemsFiltered('no category found');
                } else {
                    setItemsFiltered(filtered);
                }

            } else {
                setItemsFiltered(_items);
            }
        }
    };

    useEffect(() => {
        filterByCategory(idCategory, items);
    }, [idCategory, items]);

    useEffect(() => {
        getAll();
    }, []);

    return (
        <div className="item-list-container" >
            {
                categories === ''
                    ? <h3 className="center-text">Loading...</h3>
                    : < ItemCategories categories={categories} />
            }
            {
                itemsFiltered === 'no category found'
                    ? <h3 className="center-text">There is no category: {idCategory} </h3>
                    : itemsFiltered === ''
                        ? <h3 className="center-text">Loading...</h3>
                        : < ItemList items={itemsFiltered} />
            }
        </div>
    )
};

export default ItemListContainer;