import React, { useState, useEffect } from "react";
import axios from "axios";
import Editor from "../../component/Editor/Editor";
import { useNavigate } from "react-router-dom";
import "./CreatePost.scss";

const CreatePost = () => {
  const url = process.env.REACT_APP_BASE_URL;
  const Create = `${url}/api`;


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: null,
    content: "",
    category: "",
    user_id: "1",
  });

  const [fieldErrors, setFieldErrors] = useState({
    title: "",
    description: "",
    image_url: "",
    content: "",
    category: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const userId = sessionStorage.getItem("user_id");
    if (userId) {
      setFormData({
        ...formData,
        user_id: userId,
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setFormData({
      ...formData,
      image_url: selectedImage,
    });

    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImagePreview(null);
    }
  };

  const handleContentChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      content: value,
    }));
  };

  const isDataValid = () => {
    const errors = {};

    if (!formData.title.trim()) {
      errors.title = "This field is required";
    }

    if (!formData.description.trim()) {
      errors.description = "This field is required";
    }

    if (!formData.image_url) {
      errors.image_url = "This field is required";
    }

    if (!formData.content.trim()) {
      errors.content = "This field is required";
    }

    if (!formData.category) {
      errors.category = "This field is required";
    }

    setFieldErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDataValid()) {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("image", formData.image_url);
        formDataToSend.append("content", formData.content);
        formDataToSend.append("category", formData.category);
        formDataToSend.append("user_id", formData.user_id);

        await axios.post(`${Create}/posts/write`, formDataToSend);

        // Handle successful submission
        navigate("/");
      } catch (error) {
        console.error("Error creating post:", error);
        // Handle error, e.g., show an error message
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__wrapper">
        <label className="form__label">
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="form__input"
            placeholder="Enter title..."
          />
          {fieldErrors.title && (
            <p className="form__error">{fieldErrors.title}</p>
          )}
        </label>
      </div>

      <div className="form__wrapper">
        <label className="form__label">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="form__input"
            placeholder="Enter description..."
          />
          {fieldErrors.description && (
            <p className="form__error">{fieldErrors.description}</p>
          )}
        </label>
      </div>
      <div className="form__wrapper">
        <label className="form__label">
          Image:
          <div className="image-upload-container">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="form__input-img"
            />
            <div className="image-preview-container">
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="image-preview"
                />
              )}
              {!imagePreview && (
                <div className="image-placeholder">
                  <span>Choose an thumbnail</span>
                  <span className="upload-icon">📷</span>
                </div>
              )}
            </div>
          </div>
          {fieldErrors.image_url && (
            <p className="form__error">{fieldErrors.image_url}</p>
          )}
        </label>
      </div>

      <div className="form__wrapper">
        <label className="form__label">
          Content:
          <Editor
            value={formData.content}
            handleContentChange={handleContentChange}
          />
          {fieldErrors.content && (
            <p className="form__error">{fieldErrors.content}</p>
          )}
        </label>
      </div>

      <div className="form__wrapper">
        <label className="form__lable">
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="form__input"
          >
            <option value="electronics">Tech</option>
            <option value="gear">Sport</option>
            <option value="apparel">History</option>
            <option value="apparel">Music</option>
            <option value="apparel">Food</option>
            <option value="apparel">Nature</option>
            <option value="apparel">Photography</option>
            <option value="apparel">Space</option>

          </select>
          {fieldErrors.category && (
            <p className="form__error">{fieldErrors.category}</p>
          )}
        </label>
      </div>

      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
