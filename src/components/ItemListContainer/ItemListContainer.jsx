import React, { Component } from 'react';
import "./ItemListContainer.css";

class ItemListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        }
    }
    render() {
        // const items = this.state.itemList.map(t => {
        //     <Item valor={t} />
        // });
        return (
            <div className="item-list-container">
                <h3>
                    {this.props.greeting}
                </h3>
            </div>
        )
    }
};

export default ItemListContainer;