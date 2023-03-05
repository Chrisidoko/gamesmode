import React from "react";
import Slider from "../Components/buttomSlider/slider";
import Hero from "../Components/hero/hero";
import "./pages.scss";

function Store() {
  return (
    <>
      <div className="section">
        <Hero />
        <Slider />
      </div>
    </>
  );
}

export default Store;
