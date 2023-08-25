import React from "react";
import classes from "./Products.module.css";
import ProductsBrand from "../components/ProductsBrand";

function Products() {
  return (
    <>
      <ProductsBrand />
      <div className={classes.mainGrid}>
        <div className={classes.text}>
          <h1>This is a products page</h1>
        </div>
      </div>
    </>
  );
}

export default Products;
