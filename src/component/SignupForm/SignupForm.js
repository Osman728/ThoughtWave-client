import Input from "../Input/Input"; 
import "./SignupForm.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const url = process.env.REACT_APP_BASE_URL;
  const register = `${url}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${register}/api/users/register`, {
        email: event.target.email.value,
        password: event.target.password.value,
        name: event.target.name.value,
        username: event.target.username.value,
      });

      event.target.reset();
      navigate("/login");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <main className="signup">
  <form className="signup__form" onSubmit={handleSubmit}>
    <h1 className="signup__form-title">Sign up</h1>
    <Input type="text" name="name" label="Name" />
    <Input type="text" name="username" label="Username" />
    <Input type="text" name="email" label="Email" />
    <Input type="password" name="password" label="Password" />
    <button className="signup__form-button">Sign up</button>
    {error && <p className="signup__form-error">{error}</p>}
    <p className="signup__form-login">
      Have an account? <Link to="/login" className="signup__form-link">Log in</Link>
    </p>
  </form>
</main>

  );
}

export default SignupForm;
