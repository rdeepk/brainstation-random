import React, {Component} from 'react';
import Item from '../Item';

class ItemList extends Component {
    render() {
        let items = this.props.items;
        let itemsJSX = items.map((item, i) => {
            let tmpJSX = item.categoryItems.map((categoryItem, j) => {
                return <Item title = {categoryItem.title}
                             price = {categoryItem.prce}
                             key = {j} />
            })
            return (
                <div>
                    <h2>{item.categoryName}</h2>
                    <div>{tmpJSX}</div>
                </div>
            )
    })
    return(
            <div>{itemsJSX}</div>
        )
}
}

export default ItemList;