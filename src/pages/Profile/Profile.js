import "./Profile.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  const url = process.env.REACT_APP_BASE_URL;
  const { userId } = useParams();
  const getProfile = `${url}/api/users`;
  useEffect(() => {
    const loadData = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        return setFailedAuth(true);
      }

      try {
        const { data } = await axios.get(`${getProfile}/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.log(error);
        setFailedAuth(true);
      }
    };
    loadData();
  }, [userId]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

  if (failedAuth) {
    return (
      <main className="Profile">
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="Profile">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="Profile">
      <div className="Profile__header">
        <h1 className="Profile__header-title">Profile</h1>
        <button className="Profile__header-logout" onClick={handleLogout}>
          Log out
        </button>
      </div>

      <div className="Profile__content">
        <div className="Profile__avatar-container">
          <img
             src={`${process.env.REACT_APP_BASE_URL}/${user.profile_pic}`}
            alt="Profile"
            className="Profile__avatar"
          />
        </div>

        <div className="Profile__info">
          <label className="Profile__info-label">Username:</label>
          <input
            type="text"
            className="Profile__info-input"
            value={user.username}
          />

          <label className="Profile__info-label">Name:</label>
          <input
            type="text"
            className="Profile__info-input"
            value={user.name}
          />

          <label className="Profile__info-label">
            Email:
          </label>
          <input
            type="text"
            className="Profile__info-input Profile__info-email"
            value={user.email}
          />
        </div>
      </div>
    </main>
  );
}

export default Profile;
