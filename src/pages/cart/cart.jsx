import { useEffect } from "react";
import "../pages.scss";
import "./cart.scss";
import { AiOutlineDownload } from "react-icons/ai";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, getTotals } from "../../features/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(typeof cart.cartTotalAmount, cart.cartTotalAmount);

  return (
    <div className="section">
      <div className="cartheader">My Cart</div>
      {cart.cartItems.length === 0 ? (
        <div className="container">
          <div className="empty">
            <AiOutlineDownload />
            <span>Your cart is empty</span>
            <Link to="/store">Shop for Games & Apps</Link>
          </div>
        </div>
      ) : (
        <div className="grid">
          <div className="cartlist">
            {cart.cartItems?.map((cartItem) => (
              <div key={cartItem.id} className="cartitem">
                <div
                  className="cartphoto"
                  style={{
                    backgroundImage: `url(${cartItem.background_image})`,
                  }}
                ></div>
                <div className="vertical">
                  <div className="topflex">
                    <div className="gerne">BASE GAME</div>
                    <span className="price">
                      ${cartItem.reviews_text_count}
                    </span>
                  </div>
                  <span className="name">{cartItem.name}</span>
                  <span className="sub">Self-Refundable</span>
                  <div className="bottomflex">
                    <div className="platforms">
                      <AiOutlineDownload />
                    </div>
                    <div className="buttonCon">
                      <span />
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button className="clear-cart" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
          </div>

          {/* summary container */}

          <div className="s_container">
            <div className="s_header">Games and Apps Summary</div>
            <div className="s_list">
              <div className="s_row">
                <span>Price</span> <span>${cart.cartTotalAmount}</span>
              </div>
              <div className="s_row">
                <span>Sale Discount</span> <span>-$20.20</span>
              </div>
              <div className="s_row">
                <span>Taxes</span>
                <span className="_low">Calculated at Checkout</span>
              </div>
              <div className="s_line" />
              <div className="s_row">
                <span>Subtotal</span>

                <span>${cart.cartTotalAmount - 20.2}</span>
              </div>
              <button>
                <span>Check Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
