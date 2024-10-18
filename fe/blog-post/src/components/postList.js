import React from 'react';
import './postList.css';

function PostList({ posts, setCurrentPost, setIsEditing, deletePost }) {



  return (
    <div className="post-list">
      <h1>Blog Post</h1>
      <button className="create-button" onClick={() => setIsEditing(true)}>Create New Post</button>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <h3 className="post-title" onClick={() => setCurrentPost(post)}>{post.title}</h3>
            <p className="post-content-preview">{post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}</p>
            <p className="post-published-at">Published at: {post.published_at ? new Date(post.published_at).toLocaleString('en-GB') : 'Not published yet'}</p>
            <div className="post-actions">
              <button className="edit-button" onClick={() => {
                setCurrentPost(post);
                setIsEditing(true);
              }}>Edit</button>
              <button className="delete-button" onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;