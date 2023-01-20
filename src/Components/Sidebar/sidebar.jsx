import { useContext } from "react";
import "./sidebar.scss";
import { sidebarData, sidebarData2 } from "./sidebarData";
import { BsFlower2, BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import profile from "./Ellipse 1.jpg";
import { ThemeContext } from "../../App";

function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="sidebar">
        <ul className="sidebarList">
          <div className="Group1">
            <BsFlower2 color="royalblue" size={24} />
            <span className="logoText">GamesMode</span>
          </div>
          {sidebarData.map((val, key) => {
            return (
              <li key={key}>
                <NavLink to={val.path}>
                  <div className="icon">{val.icon}</div>
                  <div className="text">{val.title}</div>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <ul className="sidebarList">
          {sidebarData2.map((val, key) => {
            return (
              <li key={key}>
                <NavLink to={val.path}>
                  <div className="icon">{val.icon}</div>
                  <div className="text">{val.title}</div>
                </NavLink>
              </li>
            );
          })}
          <li>
            <a href="#" onClick={toggleTheme}>
              <div className="icon">
                {theme === "Dark" ? <BiMoon /> : <BsSun />}
              </div>
              <div className="text">
                {theme === "Dark" ? "Dark Mode" : "Light Mode"}
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="Group2">
                <div
                  className="profile"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="dot"></div>
              </span>
              <span className="text">Tung Tran</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
