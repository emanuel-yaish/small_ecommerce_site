import React from "react";
import Products from "./Products";

function Men(props) {
  return (
    <div className="men flex-center">
      <Products action={props.addToCart} department="men" />
    </div>
  );
}

export default Men;
