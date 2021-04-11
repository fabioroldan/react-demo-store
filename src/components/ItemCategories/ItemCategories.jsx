import { Link } from "react-router-dom";
import './ItemCategories.css';

function ItemCategories({ categories }) {
    return (
        <div className="item-categories">
            <Link to={`/`} key={'all'} className="category">all</Link>
            {
                categories.map(category => <Link to={`/category/${category.name}`} key={category.name} className="category">{category.name}</Link>)
            }
        </div>
    )
}

export default ItemCategories;