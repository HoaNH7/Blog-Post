import React from 'react';
import './postDetail.css';

function PostDetail({ post, setCurrentPost }) {
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Published at: {post.published_at ? new Date(post.published_at).toLocaleString('en-GB') : 'Not published yet'}</p>
      <button className="back-button" onClick={() => setCurrentPost(null)}>Back to List</button>
    </div>
  );
}

export default PostDetail;