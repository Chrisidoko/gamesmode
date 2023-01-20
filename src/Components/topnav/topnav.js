import React from "react";
import "./topnav.scss";
import { MdNotifications, MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

function Topnav() {
  return (
    <>
      <div className="topnav">
        <div className="mobile">
          <span className="drop">
            Browse <MdKeyboardArrowDown size={18} />
          </span>
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
          <span className="icon2">
            <MdNotifications size={24} />
          </span>
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
