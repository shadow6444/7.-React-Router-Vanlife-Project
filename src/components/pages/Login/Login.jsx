import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { loginUser } from "../../../api";

const Login = () => {
  const { state } = useLocation();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const from = state?.from || "/host";

  const navigate = useNavigate();

  async function handleSubmit(event) {
    setStatus("submitting");
    setError(null);
    event.preventDefault();
    try {
      await loginUser(loginData);
      localStorage.setItem("loggedin", true);
      navigate(from, { replace: true });
    } catch (error) {
      setError(error);
    } finally {
      setStatus("idle");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <section className="login-container">
      {state?.message && <h3>{state.message}</h3>}
      <h1>Sign in to your account</h1>
      {error && <h3 className="error">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          onChange={handleChange}
          value={loginData.email}
          type="email"
          name="email"
          placeholder="Email address"
        />
        <input
          onChange={handleChange}
          value={loginData.password}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="login-button" disabled={status === "submitting"}>
          {status === "submitting" ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link className="new-account-link">Create one now</Link>
      </p>
    </section>
  );
};

export default Login;
