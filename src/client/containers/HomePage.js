import React from "react";
import NavigationIcons from "../components/NavigationIcons.js";
import GrievanceListContainer from "./GrievanceListContainer.js";
import GrievanceTableContainer from "./GrievanceTableContainer";
import GrievanceFormContainer from "./GrievanceFormContainer";

const HomePage = (prop) => {
  return (
    /*This div contains all the components in the NavigationContainer. It also
    houses the gradient styling and the NavLogo and NavSearch component */
    <div className='main-gradient pt-2 h-screen'>
      <NavigationIcons />
      <GrievanceListContainer />
      <GrievanceTableContainer />
      <GrievanceFormContainer />
    </div>
  );
};

export default HomePage;
