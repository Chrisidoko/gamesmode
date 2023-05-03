import React from "react";
import "../pages.scss";
import "./home.scss";

import { useGetAllproductsQuery } from "../../features/productsApi";
import { addToCart } from "../../features/cartSlice";

import Slide from "../../Components/slide/slide";

function Home() {
  const { data, error, isLoading } = useGetAllproductsQuery();
  // to initialize

  //console.log(data.results);

  return (
    <div className="section">
      <div className="home_head">
        <span>Showing</span>
        <span>New Releases</span>
      </div>
      {isLoading ? (
        <p>Loading..</p>
      ) : error ? (
        <p>An error occured..</p>
      ) : (
        <>
          <div className="card-grid">
            {data.results?.map((product) => (
              <Slide key={product.id} {...product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
