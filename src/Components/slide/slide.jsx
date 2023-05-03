import React from "react";
import "./slide.scss";
import { Link } from "react-router-dom";

function Slide(props) {
  return (
    <div className="Card_con">
      <div
        className="Card_img"
        style={{ backgroundImage: `url(${props.background_image})` }}
      ></div>
      <Link to={`/product/${props.id}`} className="Card_text">
        {props.name}
      </Link>
      <div className="cat_row">
        {props.genres?.map((cat) => (
          <div className="Card_text2">{cat?.name}</div>
        ))}
      </div>
      <span className="Card_price">{props?.price}</span>
    </div>
  );
}

export default Slide;
