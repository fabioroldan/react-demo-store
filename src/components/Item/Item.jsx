import './Item.css'
function Item({ item }) {

    return (
        <div className="item" id={item.id}>
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
    );
};

export default Item;
