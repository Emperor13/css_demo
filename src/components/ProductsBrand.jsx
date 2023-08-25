import React from "react";
import classes from "./ProductsBrand.module.css";
import { motion } from "framer-motion";

function ProductsBrand() {
  return (
    <>
      <div className={classes.main}>
        <motion.div
          className={classes.bgImg}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={classes.content}>
            <h1>This is a Products page</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              soluta. Esse vero,{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProductsBrand;
