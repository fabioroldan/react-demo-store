import Item from "../Item/Item";
import "./ItemList.css"

function ItemList(props) {
  return (
    <div className='item-list appear'>
      {
        Object.keys(props.items).map(
          (id) => {
            return <Item key={id} id={id} item={props.items[id]} />;
          }
        )
      }
    </div>
  )
};

export default ItemList;
