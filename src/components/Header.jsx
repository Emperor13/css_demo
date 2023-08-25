import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import Logo from "../assets/icon.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fw-bold bg-color shadow-sm ">
      <div className="container-fluid center-nav">
        <img src={Logo} alt="" className="logo" />
        <a className="navbar-brand ms-2" href="/">
          Camrent
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="nav navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/contact"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <motion.a
              style={{
                border: "hidden",
                backgroundColor: "rgb(249, 252, 255)",
                textDecoration: "none",
                color: "black",
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="/login"
            >
              Sign In
            </motion.a>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
