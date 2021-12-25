import React from "react";
import Products from "./Products";

function Backpack(props) {
  return (
    <div className="backpack flex-center">
      <Products department="backpack" />
    </div>
  );
}

export default Backpack;
