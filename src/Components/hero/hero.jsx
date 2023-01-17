import React from "react";
import "./hero.scss";
import { BsArrowRight } from "react-icons/bs";
import Hero1 from "./images/Hero.jpg";
import { heroData } from "./heroData";
import { motion} from "framer-motion";
import { useState, useRef, useEffect } from "react";

function Hero() {
    const [width, setWidth] = useState(0);
    const sl_slider = useRef();



  return (
    <>
      <section className="hero_flexbox">
        <div className="hero" style={{ backgroundImage: `url(${Hero1})` }}>
          <div className="hero_zindex">
            <span className="hero_text1">Fortnite</span>
            <span className="hero_text2">Update </span>
            <span className="hero_text3">
              The hunt is on in Fortnite Chapter 2 - Season 5: Zero Point.
            </span>
            <div className="hero_button">
              <span className="hero_button_text">
                Play for free <BsArrowRight />
              </span>
            </div>
          </div>
        </div>

        <div className="hero_side">
          <ul>
            {heroData.map((val, key) => {
              return (
                <span key={key} className="hs_list">
                  <div
                    className="hs_image"
                    style={{ backgroundImage: `url(${val.image})` }}
                  ></div>

                  <div className="hs_text">{val.text}</div>
                </span>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Hero;
