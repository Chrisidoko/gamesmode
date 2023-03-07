import React from "react";
import "./pages.scss";
import { MdHomeFilled } from "react-icons/md";

import { useGetAllproductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";

import { useDispatch } from "react-redux";

function Home() {
  const { data, error, isLoading } = useGetAllproductsQuery();
  const dispatch = useDispatch(); // to initialize

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="section">
      {isLoading ? (
        <p>Loading..</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id}>
                <h3>{product.title}</h3>
                <button onClick={() => handleAddToCart(product)}>
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="container">
        <div className="pg_text">
          Home <MdHomeFilled />
        </div>
        <p>would have users games "use a temp placeholder"</p>
      </div>
    </div>
  );
}

export default Home;
