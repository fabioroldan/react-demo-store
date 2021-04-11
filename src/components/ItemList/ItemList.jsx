import Item from "../Item/Item";
import "./ItemList.css"

function ItemList(props) {
  return (
    <div className='item-list appear'>
      {
        props.items.map(
          (item) => {
            return <Item key={item.id} id={item.id} item={item} />;
          }
        )
      }
    </div>
  )
};

export default ItemList;
