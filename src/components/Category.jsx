import "./Category.css";

function Category(props) {
  return (
    <div className="category">
      <div className={`category-image ${props.category}`}></div>
      <div className="category-description">{props.category}</div>
    </div>
  );
}

export default Category;
