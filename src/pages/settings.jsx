import React from 'react'
import "./pages.scss";
import { MdSettings } from "react-icons/md";

function Settings() {
  return (
    <div className="section">
    <div className="container">
      <div className="pg_text">
       Settings  <MdSettings/>
      </div>
    </div>
  </div>
  )
}

export default Settings