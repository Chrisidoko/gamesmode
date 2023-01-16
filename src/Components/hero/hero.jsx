import React from "react";
import "./hero.scss";
import { BsArrowRight } from "react-icons/bs";
import Hero1 from "./images/Hero.jpg";
import { heroData } from "./heroData";
import { useParams } from "react-router-dom";

function Hero() {
  const { id } = useParams()

  return (
    <>
      <section className="hero_flexbox">
        <div className="hero" style={{ backgroundImage: `url(${Hero1})` }}>          
          <div className="hero_zindex">
          <span className="hero_text1">Fortnite</span>
          <span className="hero_text2">Update {id}</span>
          <span className="hero_text3">
            The hunt is on in Fortnite Chapter 2 -<br /> Season 5: Zero Point.
          </span>
          <div className="hero_button">
            <span className="hero_button_text">Play for free</span>
            <span className="hero_icon">
              <BsArrowRight size={24} />
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
