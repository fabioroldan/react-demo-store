import './ItemDetail.css'

function ItemDetail({ item }) {
    return (
            <div className="item-detail" id={item.id}>
                <figure>
                    <img src={item.pictureUrl} alt={item.title} />
                    <figcaption>
                        <h3 className="title">{item.title}</h3>
                        <p className="description">
                            {item.description}
                        </p>
                        <p className="description">
                            {item.fullDescription}
                        </p>
                        <span className="price">$ {item.price}</span>
                    </figcaption>
                </figure>
            </div>
    );
}

export default ItemDetail;