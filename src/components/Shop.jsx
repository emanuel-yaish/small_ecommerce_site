import React from "react";
import Products from "./Products";

function Shop(props) {
  return (
    <div className="shop flex-center">
      <Products department="shop" />
    </div>
  );
}

export default Shop;
