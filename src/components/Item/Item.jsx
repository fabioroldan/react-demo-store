import { Link } from "react-router-dom";

import './Item.css';
function Item({id, item }) {
    return (
        <Link to={`/item/${id}`} className="link ">
            <div className="item appear" id={id}>
                <figure>
                    <img src={item.pictureUrl} alt={item.title} />
                    <figcaption>
                        <h3 className="title">{item.title}</h3>
                        <div className="description">
                            {item.description}
                        </div>
                    </figcaption>
                </figure>
                <span className="price">$ {item.price}</span>
            </div>
        </Link>
    );
};

export default Item;
