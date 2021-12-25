import React, { Component } from "react";
import EcommerceApi from "../api/EcommerceApi";
import Product from "./Product";
import "./Products.css";

class Products extends Component {
  state = { products: null };

  componentDidMount() {
    if (!this.state.products) {
      this.getProducts("/products");
    }
  }

  getProducts = async (term) => {
    const response = await EcommerceApi.get(term);
    console.log(response.data);
    this.setState({ products: response.data });
  };

  displayProducts = () => {
    return this.state.products.map((product) => (
      <Product
        key={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    ));
  };

  render() {
    if (!this.state.products) {
      return <div className="loding">Loading products...</div>;
    } else {
      return (
        <div className={`products ${this.props.department}`}>
          {this.displayProducts()}
        </div>
      );
    }
  }
}

export default Products;
