import React from "react";
import "./Login.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };
  return (
    <div className="login">
      <motion.div
        className="imgBg"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{duration: 1}}
      >
        <img src="" alt="" />
      </motion.div>
      <div className="login-input">
        <div>
          <h3 className="fw-bold mb-5">Sign In</h3>
        </div>
        <form>
          <div className="input-info">
            <input
              type="text"
              placeholder="username..."
              className="userInput"
            />
            <input
              type="password"
              placeholder="password..."
              className="passInput"
            />
          </div>
          <div className="input-end">
            <p>
              Don't have an account? <a href="/">Sign up now</a>
            </p>
            <p>Forget password?</p>
          </div>
          <motion.button
            className="btn btn-outline-secondary signinBtn"
            whileTap={{ scale: 0.8 }}
            onClick={toHome}
          >
            <Link to="/">Sign In</Link>
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Login;
