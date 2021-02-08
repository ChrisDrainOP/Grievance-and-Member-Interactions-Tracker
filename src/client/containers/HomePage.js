import React from "react";
import NavigationLogoContainer from "../components/NavigationLogoContainer.js";
import NavigationIcons from "../components/NavigationIcons.js";
import GrievanceListContainer from "./GrievanceListContainer.js";

const HomePage = (prop) => {
  return (
    /*This div contains all the components in the NavigationContainer. It also
    houses the gradient styling and the NavLogo and NavSearch component */
    <div className='main-gradient pt-2 h-screen'>
      <NavigationLogoContainer />
      <NavigationIcons />
      <GrievanceListContainer />
    </div>
  );
};

export default HomePage;
