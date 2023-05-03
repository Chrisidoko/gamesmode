import React from "react";
import "./product.scss";
import "../pages.scss";
import {
  AiFillStar,
  AiFillWindows,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import { useDispatch } from "react-redux";

import {
  useGetAllproductsQuery,
  useGetProductByIdQuery,
} from "../../features/productsApi";
import { addToCart } from "../../features/cartSlice";

import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);

  const dispatch = useDispatch(); // to initialize

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="section">
        {isLoading ? (
          <p>Loading..</p>
        ) : error ? (
          <p>An error occured..</p>
        ) : (
          <div className="grid">
            <div className="left">
              <div className="p_header">{data.name}</div>
              <div className="head_info">
                <span>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />

                  <div className="rate">{data.rating}</div>
                </span>
                <span>🔥 Highly Recommended</span>
                <span>🛸 Amazing Characters</span>
              </div>
              <div className="desc_flex">
                <div className="p_image">
                  <img src={data.background_image} alt="product" />
                </div>

                <div className="p_desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer tempor tempus nibh, ac tempor leo vestibulum ac. Fusce
                  et imperdiet ante. Nam velit magna, rhoncus sit amet mattis
                  in, viverra ut augue. Duis vitae est a lacus ullamcorper
                  semper imperdiet at leo.
                </div>

                <div className="desc_tag">
                  <div className="line" />

                  <div className="p_vflex">
                    <span>Gerne</span>
                    <span>
                      {data?.genres.map((cat) => (
                        <li key={cat?.id}>{cat?.name}</li>
                      ))}
                    </span>
                  </div>
                  <span className="spacer" />
                  <div className="line" />
                  <div className="p_vflex">
                    <span>Features</span>
                    <span>
                      {data?.tags.slice(0, 3).map((t) => (
                        <li key={t?.id}>{t?.name}</li>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="desc2">
                  <span>About {data.name}</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer tempor tempus nibh, ac tempor leo vestibulum ac.
                    Fusce et imperdiet ante. Nam velit magna, rhoncus sit amet
                    mattis in, viverra ut augue. Duis vitae est a lacus
                    ullamcorper semper imperdiet at leo. Duis bibendum vitae mi
                    at pulvinar. Vivamus sed venenatis est, et finibus nulla.
                    Donec pellentesque tellus quis felis tincidunt fringilla.
                    Morbi ante mi, rutrum sed tellus sed, volutpat ultricies
                    dui.
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
              <span className="price">${data.reviews_text_count}</span>
              <button onClick={() => handleAddToCart(data)} className="but1">
                BUY NOW
              </button>
              <button onClick={() => handleAddToCart(data)}>ADD TO CART</button>
              <div className="inline">
                <span>Refund Type</span>
                <span>
                  {" "}
                  Self-Refundable <AiOutlineQuestionCircle />
                </span>
              </div>

              <div className="inline">
                <span>Released Date</span>
                <span> {data.released}</span>
              </div>

              <div className="inline">
                <span>Platform</span>
                <span>
                  <AiFillWindows />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
