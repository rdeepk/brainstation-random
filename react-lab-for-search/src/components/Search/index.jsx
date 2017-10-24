import React, {Component} from 'react';
import ItemList from '../ItemList';

class Search extends Component {
    render(){
        return (
            <div>
                <form>
                    <div><input type= "text" name="search"/></div>
                    <div><input type="checkbox" name = "option" value="selective"/>Only show product in stock</div>
                </form>
                <ItemList items={this.props.itemsList}/>
            </div>
        )
    }   
}

export default Search;