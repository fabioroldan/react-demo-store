import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="There are no items yet"/>
    </div>
  );
}

export default App;
