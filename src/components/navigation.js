import React from "react";
import NavLogoContainer from "./NavigationLogoContainer.js";
import NavSearchBar from "./NavigationSearchBar.js";

const Navigation = (prop) => {
  return (
    /*This div contains all the compents in the navigation. It also
    houses the gradient styling and the NavLogo and NavSearch component */
    <div className='bg-gradient-to-r from-blue-500 to-blue-100'>
      <NavLogoContainer />
      <NavSearchBar />
    </div>
  );
};

export default Navigation;
