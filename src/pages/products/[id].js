import Head from "next/head";
import Image from "next/image";
import Axios from "axios";
import React from "react";
import Rating from "@/components/Rating";

function Product({ productData }) {
  const { title, price, description, category, image, rating } = productData;

  return (
    <>
      <Head>
        <title>Product Detail Page</title>
        <meta name="description" content="Product Detail Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl h-96 mt-32">
          <figure className="h-full w-1/2">
            {/* <img src={image} alt="Album" /> */}
            <Image
              src={image}
              alt="product image"
              className="bg-cover h-full"
              width="100"
              height="100"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="badge badge-secondary w-min h-min whitespace-nowrap">
              {category}
            </div>
            <Rating rating={rating}></Rating>

            <p>{description}.</p>

            <h1 className="text-2xl">${price}</h1>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await Axios.get("https://fakestoreapi.com/products");

  const paths = res.data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const id = params.id;

  console.log("id =", id);
  const data = await Axios.get(`https://fakestoreapi.com/products/${id}`);

  console.log("data", data);

  return {
    props: {
      productData: data.data,
    },
  };
};

export default Product;
