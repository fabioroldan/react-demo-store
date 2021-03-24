import { Link } from "react-router-dom";
import './ItemCategories.css';

function ItemCategories({ categories }) {
    //<img style={{width:'100px'}} src={categories[category].pictureUrl} alt="" />
    return (
        <div className="item-categories">
            <Link to={`/`} key={'all'} className="category">all</Link>
            {
                Object.keys(categories).map(category => <Link to={`/category/${category}`} key={category} className="category">{category}</Link>)
            }
        </div>
    )
}

export default ItemCategories;