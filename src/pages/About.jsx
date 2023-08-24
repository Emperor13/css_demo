import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      <div className="main">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="content">
          <h3>Janury 24, 2021</h3>
          <h1>Some Title right Here!</h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className="footer">
          <div className="ft-left">
            <img
              src="https://images.unsplash.com/photo-1625492922070-586ce266ccc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            <p>Apirak Chimhiran</p>
          </div>
          <div className="ft-right">
            <p>0 Comments</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
