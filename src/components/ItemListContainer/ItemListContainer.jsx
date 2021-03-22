import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props) {
    return (
        <div className="item-list-container" hidden>
            <h3>
                {props.items.length > 0 ? '' : props.greeting}
            </h3>
            <ItemList items={props.items} />
        </div>
    )
};

export default ItemListContainer;