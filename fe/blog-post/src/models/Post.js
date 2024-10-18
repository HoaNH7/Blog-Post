class Post {
    constructor(title, content) {
      this.id = Date.now();
      this.title = title;
      this.content = content;
      this.published_at = new Date();
    }
  }
  
  export default Post;