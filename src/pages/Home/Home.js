import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const url = process.env.REACT_APP_BASE_URL;
  const allPost = `${url}`;

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get(`${allPost}/api/posts/allPosts`);
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <div className="posts">
      <h1 className="posts__title">Home</h1>

      {posts.map((post) => (
        <div key={post.post_id} className="posts__blog">
        <Link to={`/post/${post.post_id}`} className="posts__blog-link">
          {post.image_url && (
            <img
              src={`${allPost}/${post.image_url}`}
              alt="Post Image"
              className="posts__blog-image"
            />
          )}
          <h3 className="posts__blog-title">{post.title}</h3>
          <p className="posts__blog-text">
            {post.content.split(" ").slice(0, 10).join(" ")}
            {post.content.split(" ").length > 10
              ? "... click to read more"
              : ""}
          </p>
          <div className="posts__info">
            {post.profile_pic && (
              <img
                src={`${allPost}/${post.profile_pic}`}
                alt="Profile Picture"
                className="posts__info-avatar"
              />
            )}
            <p className="posts__info-author">by: {post.name}</p>
            <p className="posts__info-category">{post.category}</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
