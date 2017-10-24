import React, {Component} from 'react';

class Item extends Component {
    render() {
        return(
            <section>
                <div>{this.props.category}</div>
                    <ul>
                        <li>
                            {this.props.title}
                            {this.props.price}
                        </li>
                    </ul>
          </section>
        )
    }
}

export default Item;