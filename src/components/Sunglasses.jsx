import React from "react";
import Products from "./Products";

function Sunglasses(props) {
  return (
    <div className="sunglasses flex-center">
      <Products action={props.addToCart} department="sunglasses" />
    </div>
  );
}

export default Sunglasses;
