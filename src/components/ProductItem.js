import Link from "next/link";
import Rating from "./Rating";
import Image from "next/image";

const ProductItem = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl h-96">
      <figure className="h-56">
        {/* <img src={image} alt="product image" className="bg-cover" /> */}
        <Image
          src={image}
          alt="product image"
          className="bg-cover h-full"
          width="100"
          height="100"
        />
      </figure>

      <div className="card-body">
        {/* <h1 className="text-2xl">${price}</h1> */}
        <h2 className="card-title ">
          <Link href={`/products/${id}`}> {title}</Link>

          <div className="badge badge-secondary w-min h-min whitespace-nowrap">
            {category}
          </div>
        </h2>
        <Rating rating={rating}></Rating>

        <div className="card-actions justify-between mt-3">
          <h1 className="text-2xl pt-2">${price}</h1>

          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

//   <Link href="/about"> About</Link>;
