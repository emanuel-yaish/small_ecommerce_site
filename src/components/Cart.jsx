import Product from "./Product";
import "./Cart.css";

function Cart(props) {
  return (
    <div className="cart-page">
      {props.cart.map((product) => (
        <Product
          key={product.id}
          product={product}
          action={props.removeFromCart}
          type={"cart"}
        />
      ))}
    </div>
  );
}

export default Cart;
