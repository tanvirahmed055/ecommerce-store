import Head from "next/head";
import Axios from "axios";
import ProductItem from "@/components/ProductItem";
import React, { useContext, useState } from "react";
import SearchInput from "@/components/SearchInput";

function Home({ productsData }) {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState(productsData);

  return (
    <>
      <Head>
        <title>Products Page</title>
        <meta name="description" content="products list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <SearchInput
          products={products}
          setProducts={setProducts}
          searchText={searchText}
          setSearchText={setSearchText}
        ></SearchInput>
        <div className="grid grid-cols-3 gap-x-2 gap-y-12">
          {React.Children.toArray(
            products.map((product) => {
              return <ProductItem product={product}></ProductItem>;
            })
          )}
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await Axios.get("https://fakestoreapi.com/products");

  console.log("data", data);

  return {
    props: {
      productsData: data.data,
    },
  };
};

export default Home;
