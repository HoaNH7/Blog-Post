import React, { useState, useEffect } from "react";
import "./postUpdate.css";

function PostUpdate({
  addPost,
  updatePost,
  currentPost,
  setIsEditing,
  setCurrentPost,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      setContent(currentPost.content);
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPost) {
      updatePost({ ...currentPost, title, content });
      setCurrentPost(null);
    } else {
      addPost({ title, content });
    }
    setTitle("");
    setContent("");
    setIsEditing(false);
  };

  return (
    <div className="post-update">
      <h1>{currentPost ? "Edit Post" : "Create New Post"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input-title"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="input-content"
        />
        <div className="update-actions">
          <button type="submit" className="submit-button">
            {currentPost ? "Update Post" : "Add Post"}
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={() => {
              setIsEditing(false);
              setCurrentPost(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostUpdate;
