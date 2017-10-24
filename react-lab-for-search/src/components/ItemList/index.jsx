import React, {Component} from 'react';
import Item from '../Item';

class ItemList extends Component {
    render() {
        let items = this.props.items;
        let itemsJSX = items.map((item, i) => {
            return item.categoryItems.map((categoryItem, j) => {
                return <Item   category={item.categoryName}
                  title = {categoryItem.title}
                  price = {categoryItem.prce}
                   key = {j} />
            })
    })
    return(
            <div>{itemsJSX}</div>
        )
}
}

export default ItemList;