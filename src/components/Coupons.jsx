import React from "react";
import Products from "./Products";

function Coupons(props) {
  return (
    <div className="coupons flex-center">
      <Products action={props.addToCart} department="coupons" />
    </div>
  );
}

export default Coupons;
