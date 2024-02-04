// SinglePost.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./SinglePost.scss";

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = process.env.REACT_APP_BASE_URL;
  const singlePost = `${url}`;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${singlePost}/api/posts/${postId}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  useEffect(() => {
    if (post) {
      console.log("Post:", post);
      console.log("Image URL:", post.image_url);
    }
  }, [post]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="post">
      <h1 className="post__title">{post.title}</h1>
      <div className="post__image-container">
        {post.image_url && (
          <img
            src={`${singlePost}/${post.image_url}`}
            alt="Post Image"
            className="post__image"
            onLoad={() => console.log("Image loaded successfully")}
            onError={(e) => console.error("Error loading image:", e)}
          />
        )}
      </div>
      <div className="post__author">
        <div className="post__author-info">
          {post.profile_pic && (
            <img
              src={`${singlePost}/${post.profile_pic}`}
              alt="Author's Profile Picture"
              className="post__author-image"
            />
          )}
          <p className="post__author-name">Author: {post.name}</p>
        </div>
        <p className="post__category">Category: {post.category}</p>
      </div>
      <p className="post__content">{post.content}</p>
    </div>
  );
  
};

export default SinglePost;
