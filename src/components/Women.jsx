import React from "react";
import Products from "./Products";

function Women(props) {
  return (
    <div className="women flex-center">
      <Products action={props.addToCart} department="women" />
    </div>
  );
}

export default Women;
