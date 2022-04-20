import React from 'react'
import PostItem from './PostItem';

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Список постов</h1>
            {posts.map(post => {
                return <PostItem post={post} key={post.id}/>
            })}
        </div>
    );
}

export default PostList