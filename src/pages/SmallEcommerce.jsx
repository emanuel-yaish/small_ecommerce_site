import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";

class SmallEcommerce extends React.Component {
  state = { cart: 0 };
  render() {
    return (
      <div className="small-ecommerece">
        <BrowserRouter>
          <Header cart={this.state.cart} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default SmallEcommerce;
