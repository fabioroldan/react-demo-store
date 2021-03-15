import React, { useState, useEffect } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import mockdb from "./mockdb.json";

function App() {
  const [items, setItems] = useState([]);

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
      <ItemListContainer items={items} greeting="There are no items yet" />
    </div>
  );
}

export default App;
