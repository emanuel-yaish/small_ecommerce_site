import React from "react";
import Products from "./Products";

function Sports(props) {
  return (
    <div className="sports flex-center">
      <Products action={props.addToCart} department="sports" />
    </div>
  );
}

export default Sports;
