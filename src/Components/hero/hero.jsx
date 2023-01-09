import React from "react";
import "./hero.scss";
import * as BsIcons from "react-icons/bs";
import Hero1 from "./images/Hero.jpg";
import  { heroData } from "./heroData";

function Hero() {


  return (
    <>
      <section className="hero_flexbox">
      
        <div className="hero" style={
          { backgroundImage: `url(${Hero1})`
           }}>
          <div className="hero_gradient"></div>  
          <span className="hero_text1">Fortnite</span>
          <span className="hero_text2">Update</span>
          <span className="hero_text3">
            The hunt is on in Fortnite Chapter 2 -<br/> Season 5: Zero Point.
          </span>
          <div className="hero_button">
            <span className="hero_button_text">Play for free</span>
            <span className="hero_icon">
              <BsIcons.BsArrowRight size={24} />
            </span>
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
