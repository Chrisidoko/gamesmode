import React from "react";
import Slider from "../Components/buttomSlider/slider";
import Hero from "../Components/hero/hero";
import "./pages.scss";

function Store() {
  return (
    <>
      <div className="section">
        <Hero />
        <div className="spacer1"></div>
        <Slider />
      </div>
    </>
  );
}

export default Store;
