import Link from "next/link";
import Rating from "./Rating";

const ProductItem = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl h-96">
      <figure className="h-1/2">
        <img src={image} alt="product image" className="bg-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">
          {title}
          <div className="badge badge-secondary w-min h-min whitespace-nowrap">
            {category}
          </div>
        </h2>
        <Rating rating={rating}></Rating>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
