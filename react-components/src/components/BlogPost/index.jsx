import React from 'react';

class BlogPost extends React.Component {
    render() {
        return (
            <section>
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
            </section>
        )
    }
}

export default BlogPost;