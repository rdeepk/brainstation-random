import React, { Component } from 'react';

class CommentBox extends Component{

    addComment(e) {
    e.preventDefault();
    console.log(e);
    console.log('form is submitted');
    }

    render(){
    return (
        <form onSubmit={this.addComment}>
            <div><input type= "text" name="title"/></div>
           <div><textarea name = "content"></textarea></div>
            <div><button type="submit">Add Comment</button></div>
        </form>
    )

    }
}

//const comment = "This is a default comment";

export default CommentBox;
//export {comment};