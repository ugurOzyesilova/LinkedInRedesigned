import "../styles/Posts.css";
import Stories from "./Stories";
import Post from "./Post";
import PostSender from "./PostSender";
import db from "../firebase";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function Posts(props) {
  
  const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setPosts(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    }, []);


  return (
    <div className="posts">
      <Stories />
      <PostSender />
      {posts.map((post) => (
        <Post
          key= {nanoid()}
          content={post.data.content}
          username={post.data.username}
          profilePic = {post.data.profilePic}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Posts;
