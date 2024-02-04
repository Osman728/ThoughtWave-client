import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Input from "../Input/Input"; 
import "./LoginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const url = process.env.REACT_APP_BASE_URL;
  const SignIn = `${url}`;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${url}/api/users/login`,
        {
          email: event.target.email.value,
          password: event.target.password.value,
        }
      );

      console.log('Login Response:', response);

      const { token } = response.data;

      if (token) {
        const tokenParts = token.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        const userId = payload.id;

        // Store token and user ID in sessionStorage
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user_id", userId);

        navigate(`/profile/${userId}`);
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <main className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-form__title">Login</h1>
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button className="login-form__button">Log in</button>
        {error && <div className="login-form__message">{error}</div>}
        <p className="login-form__account">
  Need an account? <Link to="/signup" className="login-signup-link">Sign up</Link>
</p>

      </form>
    </main>
  );
};

export default LoginForm;
