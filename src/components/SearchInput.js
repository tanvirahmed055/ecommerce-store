import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import { useContext, useState } from "react";

const SearchInput = ({ products, setProducts }) => {
  const { searchText, setSearchText } = useContext(AppContext);

  const handleSearch = (searchText) => {
    const filteredProducts = products.filter((product) => {
      if (product.title.toLowerCase().includes(searchText)) {
        return product;
      }
    });
    console.log("filteredProducts =", filteredProducts);
    setProducts(filteredProducts);
  };

  return (
    <div className="flex justify-center">
      <form
        className="form-control my-5 mx-auto"
        method="get"
        action=""
        onSubmit={(e) => {
          e.preventDefault();

          handleSearch(searchText);
        }}
      >
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            onChange={(e) => {
              setSearchText(e.target.value.toLowerCase());
            }}
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
