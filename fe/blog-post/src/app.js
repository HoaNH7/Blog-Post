import React, { useState, useEffect } from "react";
import PostList from "./components/postList";
import PostForm from "./components/postUpdate";
import PostDetail from "./components/postDetail";
import "./app.css";
import Post from "./models/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  const savePostsToLocalStorage = (posts) => {
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const addPost = (post) => {
    const newPost = new Post(post.title, post.content);
    const newPosts = [...posts, newPost];
    setPosts(newPosts);
    savePostsToLocalStorage(newPosts);
  };

  const updatePost = (updatedPost) => {
    const newPosts = posts.map(post => (post.id === updatedPost.id ? updatedPost : post));
    setPosts(newPosts);
    savePostsToLocalStorage(newPosts);
  };

  const deletePost = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const newPosts = posts.filter(post => post.id !== id);
      setPosts(newPosts);
      savePostsToLocalStorage(newPosts);
    }
  };

  return (
    <div className="App">
      {isEditing ? (
        <PostForm
          addPost={addPost}
          updatePost={updatePost}
          currentPost={currentPost}
          setIsEditing={setIsEditing}
          setCurrentPost={() => setCurrentPost(null)}
        />
      ) : currentPost ? (
        <PostDetail post={currentPost} setCurrentPost={setCurrentPost} />
      ) : (
        <PostList
          posts={posts}
          setCurrentPost={setCurrentPost}
          setIsEditing={setIsEditing}
          deletePost={deletePost}
        />
      )}
    </div>
  );
}

export default App;
