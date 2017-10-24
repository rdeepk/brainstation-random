import React, { Component } from 'react';

class CommentBox extends Component{
    render(){
    return (
        <form onSubmit={addComment}>
            <div><input type= "text" name="title"/></div>
           <div><textarea name = "content"></textarea></div>
            <div><button type="submit"></button></div>
        </form>
    )

    }
}

function addComment(e) {
    e.preventDefault();
    console.log(e);
    console.log('form is submitted');
}

//const comment = "This is a default comment";

export default CommentBox;
//export {comment};