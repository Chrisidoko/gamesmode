import React from "react";
import "../pages.scss";
import "./home.scss";
import { MdHomeFilled } from "react-icons/md";

import { useGetAllproductsQuery } from "../../features/productsApi";
import { addToCart } from "../../features/cartSlice";

import { useDispatch } from "react-redux";
import Slide from "../../Components/slide/slide";

function Home() {
  const { data, error, isLoading } = useGetAllproductsQuery();
  const dispatch = useDispatch(); // to initialize

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="section">
      <div className="home_head">
        <span>Showing</span>
        <span>New Releases</span>
      </div>
      <div className="card-grid">
        <Slide title="HeadieOne" category="Action" price="$2.99" />
        <Slide title="HeadieOne" category="Action" price="$2.99" />
        <Slide title="HeadieOne" category="Action" price="$2.99" />
        <Slide title="HeadieOne" category="Action" price="$2.99" />
        <Slide title="HeadieOne" category="Action" price="$2.99" />
        <Slide title="HeadieOne" category="Action" price="$2.99" />
        <Slide title="HeadieOne" category="Action" price="$2.99" />
      </div>
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
    </div>
  );
}

export default Home;
