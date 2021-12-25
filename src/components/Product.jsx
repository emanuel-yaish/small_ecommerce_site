import "./Product.css";

function Product({ image, title, description, price }) {
  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;

  return (
    <div className="product">
      <figure className="product-figure">
        <img className="product-image" src={image} alt={description} />
      </figure>
      <div className="product-title">{title}</div>
      <div className="product-description">
        {truncate(description, 50, "...")}
      </div>
      <div className="product-price">{price}</div>
      <button className="product-cart-button">Add To Cart</button>
    </div>
  );
}

export default Product;
