import React from "react";
import "./topnav.scss";
import * as MdIcons from "react-icons/md";
import * as Fi from "react-icons/fi";

function Topnav() {
  return (
    <div className="topnav">
      <ul className="nav_list">
        <span className="nav_row active">Discover</span>
        <span className="nav_row">Browse</span>
        <span className="nav_row">Wishlist</span>
      </ul>

      <div className="left">
        <span className="icon2">
          <MdIcons.MdNotifications size={24} />
        </span>
        <div className="search">
          <span className="icon_2">
            <Fi.FiSearch size={16} />
          </span>
          <span className="text2">Search</span>
        </div>
      </div>
    </div>
  );
}

export default Topnav;
