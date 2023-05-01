import React from "react";
import "./slide.scss";

function Slide(props) {
  return (
    <div className="Card_con">
      <div
        className="Card_img"
        style={{ backgroundImage: `url(${props.Image})` }}
      ></div>
      <span className="Card_text">{props.title}</span>
      <div className="Card_text2">{props.category}</div>
      <span className="Card_price">{props.price}</span>
    </div>
  );
}

export default Slide;
