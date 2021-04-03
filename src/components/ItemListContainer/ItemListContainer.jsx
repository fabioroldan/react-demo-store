import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import ItemCategories from "../ItemCategories/ItemCategories";

function ItemListContainer() {
    let [categories, setCategories] = useState('');
    let [items, setItems] = useState('');
    let [itemsFiltered, setItemsFiltered] = useState('');
    let { id: idCategory } = useParams();

    const getAll = () => {
        fetch('https://react-demo-store-default-rtdb.firebaseio.com/.json')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                setItems(result.items);
                setCategories(result.categories);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const filterByCategory = (_category, _items) => {
        if (_items !== '') {
            if (_category !== undefined) {
                let filtered = Object.keys(_items)
                    .filter((key) => {
                        return _items[key].category === _category;
                    })
                    .reduce((obj, key) => {
                        obj[key] = _items[key];
                        return obj;
                    }, {});

                if (Object.keys(filtered).length === 0) {
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