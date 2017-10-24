import React from 'react';
import BlogPost from '../BlogPost/BlogPost';

class BlogList extends React.Component {
    render(){
        let blogPosts = this.props.blogPosts;
        let blogPostsJSX = blogPosts.map(function(element, i){
           return <BlogPost   title={element.title}
                  content = {element.content}
                   key = {i} />
            })
        return(
            <div>{blogPostsJSX}</div>
        )
    }
}

export default BlogList;