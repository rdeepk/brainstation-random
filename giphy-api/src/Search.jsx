import React from 'react';

class Search extends React.Component {
    handleFormSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.search.value);
        this.props.search(e.target.search.value);
    }
    render() {
        return (
            <form ref={(form) => {this.form = form}} onSubmit={(e) => {this.handleFormSubmit(e)}}>
                <div className="row">
                    <div className="col-sm-2 col-sm-offet-1">                            
                        <label htmlFor="search" className="pull-right">Search</label>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" name="search" required="required" className="form-control" />
                    </div>
                    <div className="col-sm-2">
                        <input type="submit" className="pull-left" value="Search" />
                    </div>
                </div>
            </form>
        )
    }
}

export default Search;