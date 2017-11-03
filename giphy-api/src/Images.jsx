import React from 'react';

class Images extends React.Component {
    render() {
        return(
            <div className="images"><ul>{this.props.imagesJSX}</ul></div>
        )
    }
}
export default Images;