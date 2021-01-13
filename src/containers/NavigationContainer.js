import React from "react";
import NavigationLogoContainer from "../components/NavigationLogoContainer.js";
import NavigationIcons from "../components/NavigationIcons.js";

const NavigationContainer = (prop) => {
  return (
    /*This div contains all the compents in the NavigationContainer. It also
    houses the gradient styling and the NavLogo and NavSearch component */
    <div className='bg-gradient-to-r from-blue-500 to-blue-200 pb-1 pt-2 h-1/4'>
      <NavigationLogoContainer />
      <NavigationIcons />
      <hr className='my-2 w-3/4 m-auto rounded-none'></hr>
    </div>
  );
};

export default NavigationContainer;
