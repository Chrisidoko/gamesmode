import React from "react";
import "./product.scss";
import "../pages.scss";
import productImg from "./game.jpg";
import {
  AiFillStar,
  AiFillWindows,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";

function Product() {
  return (
    <>
      <div className="section">
        <div className="grid">
          <div className="left">
            <div className="p_header">Grand Theft Auto V</div>
            <div className="head_info">
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />

                <div className="rate">4.4</div>
              </span>
              <span>🔥 Highly Recommended</span>
              <span>🛸 Amazing Characters</span>
            </div>
            <div className="desc_flex">
              <div className="p_image">
                <img src={productImg} alt="product" />
              </div>

              <div className="p_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                tempor tempus nibh, ac tempor leo vestibulum ac. Fusce et
                imperdiet ante. Nam velit magna, rhoncus sit amet mattis in,
                viverra ut augue. Duis vitae est a lacus ullamcorper semper
                imperdiet at leo.
              </div>

              <div className="desc_tag">
                <div className="line" />

                <div className="p_vflex">
                  <span>Gerne</span>
                  <span>Action</span>
                </div>
                <span className="spacer" />
                <div className="line" />
                <div className="p_vflex">
                  <span>Features</span>
                  <span>
                    <li>Multiplayer</li> <li>Co-op</li>
                  </span>
                </div>
              </div>
              <div className="desc2">
                <span>About MORDHAU</span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer tempor tempus nibh, ac tempor leo vestibulum ac. Fusce
                  et imperdiet ante. Nam velit magna, rhoncus sit amet mattis
                  in, viverra ut augue. Duis vitae est a lacus ullamcorper
                  semper imperdiet at leo. Duis bibendum vitae mi at pulvinar.
                  Vivamus sed venenatis est, et finibus nulla. Donec
                  pellentesque tellus quis felis tincidunt fringilla. Morbi ante
                  mi, rutrum sed tellus sed, volutpat ultricies dui.
                </span>
                <button>
                  SHOW MORE <MdExpandMore />
                </button>
              </div>
            </div>
          </div>
          <div className="desc_side">
            <div className="side_img"></div>

            <div className="gerne">BASE GAME</div>
            <span className="price">$29.99</span>
            <button className="but1">BUY NOW</button>
            <button> ADD TO CART</button>
            <div className="inline">
              <span>Refund Type</span>
              <span>
                {" "}
                Self-Refundable <AiOutlineQuestionCircle />
              </span>
            </div>

            <div className="inline">
              <span>Developer</span>
              <span> Rockstar Games</span>
            </div>

            <div className="inline">
              <span>Platform</span>
              <span>
                <AiFillWindows />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
