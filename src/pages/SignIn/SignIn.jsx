import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import styles from "./SignIn.module.css";
import { Toaster } from "react-hot-toast"

export const SignIn = () => {
  const [passwordType, setType] = useState("password");
  const [toggleIcon, setToggleIcon] = useState("visibility_off");
  const { setCredentials, email, setMail, setPassword, password, isAuth, setAuth } =
    useAuth();
  const navigate = useNavigate();
  const togglePassword = () => {
    if (passwordType === "password") {
      setType("text");
      setToggleIcon("visibility");
    } else {
      setType("password");
      setToggleIcon("visibility_off");
    }
  };

  return (
    <div className={`${styles.signinForm}`}>
      <Toaster />
      <div className={`${styles.loginBanner}`}>
        <h1>Sign In</h1>
        <p>Get Access To Your Cart, Wishlist And Orders</p>
      </div>
      {isAuth ? (
        <div>
          <h1>You are logged in!</h1>
          <button className={`${styles.logoutBtn} btn primary`} onClick={() => {
            localStorage.removeItem("token");
            setAuth(false);
          }}>Logout</button>
        </div>
      ) : (
        <form className={`${styles.formContainer} form-grp`}>
          <div className="input-grp">
            <label htmlFor="email">Enter your email *</label>
            <input
              type="text"
              className="txt"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="input-grp">
            <label htmlFor="password">Enter your password *</label>
            <input
              type={passwordType}
              className="pwd"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <i
              className={`${styles.passwordVisibility} material-icons`}
              onClick={() => togglePassword()}
            >
              {toggleIcon}
            </i>
            <Link to="/forgotPassword" className={`${styles.forgotPassword}`}>
              Forgot Password?
            </Link>
          </div>
          <input
            type="submit"
            value="Sign In"
            className="btn primary"
            onClick={(e) => {
              setCredentials(e);
              if (isAuth) navigate("/");
            }}
          />
          <input
            type="submit"
            value="Test User"
            className="btn primary"
            onClick={(e) => {
              setCredentials(e);
              if (isAuth) navigate("/");
            }}
          />
          <div className={`${styles.signup}`}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      )}
    </div>
  );
};
