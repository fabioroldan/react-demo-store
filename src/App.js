import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
//import mockdb from "./mockdb.json";
import {CartProvider} from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
