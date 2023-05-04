import React, { useState, useRef } from "react";
import "./topnav.scss";
import { MdNotifications, MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsFlower2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Topnav() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const navRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== navRef.current) {
      setOpen(false);
    }
  });

  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <>
      <div className="topnav">
        <div className="mobile">
          <BsFlower2 color="royalblue" size={24} />
          <span ref={navRef} onClick={() => setOpen(!open)} className="drop">
            Discover <MdKeyboardArrowDown size={18} />
          </span>
          {open ? (
            <div ref={menuRef} className="menu">
              <ul>
                <li>Discover</li>
                <div />
                <li>Browse</li>
                <div />
                <li>Wishlist</li>
                <div />
              </ul>
            </div>
          ) : (
            ""
          )}
          <span className="msearch">
            <FiSearch size={18} />
          </span>
        </div>
        <ul className="nav_list">
          <span className="nav_row active" id="temp">
            Discover
          </span>
          <span className="nav_row">Browse</span>
          <span className="nav_row">Wishlist</span>
        </ul>

        <div className="right">
          <Link to="/cart">
            <div className="icon2">
              <MdNotifications size={27} />
              {cartTotalQuantity > 0 && (
                <div className="count">{cartTotalQuantity}</div>
              )}
            </div>
          </Link>
          <div className="search">
            <span className="icon_2">
              <FiSearch size={16} />
            </span>
            <input className="text2" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Topnav;
