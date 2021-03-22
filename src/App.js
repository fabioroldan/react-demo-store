import React, { useState, useEffect } from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import mockdb from "./mockdb.json";

function App() {
  const [items, setItems] = useState([]);
  // const [currentStock, setCurrentStock] = useState(5);
  // const [cart, setCart] = useState(0);

  // const addToCart = (e, stock) => {
  //   e.preventDefault();
  //   setCurrentStock(() => setCurrentStock(currentStock - stock));
  //   setCart(cart + stock);
  // };

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockdb);
      }, 1000);
    }).then((resultado) => setItems(resultado));
  });

  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer items={items} greeting="There are no items yet" />
    </div>
  );
}

export default App;
