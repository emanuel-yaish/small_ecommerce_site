import Category from "./Category";
import "./Categories.css";

function Categories(props) {
  const categories = ["shoes", "sneakers", "jackets"];

  return (
    <div className="categories-page">
      {categories.map((category) => (
        <Category key={category} className={category} category={category} />
      ))}
    </div>
  );
}

export default Categories;
