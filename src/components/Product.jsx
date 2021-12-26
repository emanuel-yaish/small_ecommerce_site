import "./Product.css";

function Product(props) {
  const { image, title, description, price } = props.product;

  const getButtonText = () => {
    if (props.type === "cart") return "Remove from Cart";
    return "Add To Cart";
  };

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
      <button
        onClick={() => props.action(props.product)}
        className="product-cart-button"
      >
        {getButtonText()}
      </button>
      ;
    </div>
  );
}

export default Product;
