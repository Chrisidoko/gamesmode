import React from "react";
import "./pages.scss";
import { MdHomeFilled } from "react-icons/md";

function Home() {
  return (
    <div className="section">
      <div className="container">
        <div className="pg_text">
          Home <MdHomeFilled />
        </div>
      </div>
    </div>
  );
}

export default Home;
