import React from "react";
import apwuLogo from "../assets/apwu-g-logo.png";
import "../sass/layout/navbar.scss";

const Navigation = (prop) => {

   return  (
      <div className="nav-bar">
        <div className="img-container">
         <a href="#home">
            <img src={apwuLogo} alt="apwu logo" className="apwu-logo"/>
         </a>
        </div>
      </div>
   )
}

export default Navigation;