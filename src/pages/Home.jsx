import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Home.css";
import { FiChevronRight } from "react-icons/fi";

const colors = ["black", "white", "black", "white"];
const imgs = [
  'url("https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
  'url("https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
  'url("https://images.unsplash.com/photo-1493805503700-3219b693ffcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
  'url("https://images.unsplash.com/photo-1541690663428-b99fc611c419?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80")',
];

function Home() {
  const [num, setNum] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((v) => {
        return v === 3 ? 0 : v + 1;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <motion.div 
          key={imgs[num]}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{  x:-300, opacity: 0 }}
          transition={{duration: 1}}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundImage: `${imgs[num]}`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "fixed",
            color: `${colors[num]}`,
          }}
        >
            <div class="container-text text-start">
              <div class="p-5">
                <div className="textA">
                  <h3 class="fst-italic">Welcome! </h3>
                  <h2 class="fw-bold">This is the place!</h2>
                  <div class="mb-3 fs-5 mt-3">Let's Rent something!</div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn item"
                    onClick={() => {
                      navigate("/products");
                    }}
                  >   
                      Rent Now
                  </motion.button>
                </div>
              </div>
            </div>
        </motion.div>
    </>
  );
}

export default Home;
