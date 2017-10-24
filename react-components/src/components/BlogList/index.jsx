import React from 'react';
import BlogPost from '../BlogPost';

class BlogList extends React.Component {
    render(){
        let blogPosts = this.props.blogPosts;
        let blogPostsJSX = blogPosts.map((blogPost, i) => {
           return <BlogPost   title={blogPost.title}
                  content = {blogPost.content}
                   key = {i} />
            })
        return(
            <div>{blogPostsJSX}</div>
        )
    }
}

export default BlogList;