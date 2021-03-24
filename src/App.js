import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
//import mockdb from "./mockdb.json";

 function App() {
  // const [currentStock, setCurrentStock] = useState(5);
  // const [cart, setCart] = useState(0);

  // const addToCart = (e, stock) => {
  //   e.preventDefault();
  //   setCurrentStock(() => setCurrentStock(currentStock - stock));
  //   setCart(cart + stock);
  // };
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
          <ItemListContainer />
          </Route>
          <Route  path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
