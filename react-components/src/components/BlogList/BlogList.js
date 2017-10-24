import React from 'react';
import BlogPost from '../BlogPost/BlogPost';

class BlogList extends React.Component {
    render(){
        let blogPosts = this.props.blogPosts;
        let blogPostsJSX = [];
        for(let i = 0; i<blogPosts.length; i++) {
            blogPostsJSX.push(
                <BlogPost   title={blogPosts[i].title}
                content = {blogPosts[i].content}
                key = {i} />
            );
        }
        return(
            <div>{blogPostsJSX}</div>
        )
    }
}

export default BlogList;