import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Shop from "../components/Shop";
import Categories from "../components/Categories";
import SignIn from "../components/SignIn";
import Cart from "../components/Cart";
import Men from "../components/Men";
import Sprots from "../components/Sports";
import Women from "../components/Women";
import Sunglasses from "../components/Sunglasses";
import Coupons from "../components/Coupons";
import Backpack from "../components/Backpack";

class SmallEcommerce extends React.Component {
  state = { cart: [] };

  addToCart = (product) => {
    this.setState({ cart: [...this.state.cart, product] });
  };

  removeFromCart = (product) => {
    const cart = [...this.state.cart];
    let itemIndex = -1;
    for (let index = 0; index < cart.length && itemIndex === -1; index++) {
      if (cart[index].id === product.id) itemIndex = index;
    }
    console.log("itemIndex", itemIndex);
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
      this.setState({ cart: cart });
    }
  };

  render() {
    return (
      <div className="small-ecommerece">
        <BrowserRouter>
          <Header cart={this.state.cart.length} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route
              path="/cart"
              element={
                <Cart
                  cart={this.state.cart}
                  removeFromCart={(product) => this.removeFromCart(product)}
                />
              }
            ></Route>
            <Route
              path="/men"
              element={<Men addToCart={(product) => this.addToCart(product)} />}
            ></Route>
            <Route path="/sports" element={<Sprots />}></Route>
            <Route path="/women" element={<Women />}></Route>
            <Route path="/sunglasses" element={<Sunglasses />}></Route>
            <Route path="/coupons" element={<Coupons />}></Route>
            <Route path="/backpack" element={<Backpack />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default SmallEcommerce;
