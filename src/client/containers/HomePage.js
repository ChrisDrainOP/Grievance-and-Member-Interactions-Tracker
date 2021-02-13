import React from "react";
import NavigationIcons from "../components/NavigationIcons.js";
import GrievanceListContainer from "./GrievanceListContainer.js";
import GrievanceTableContainer from "./GrievanceTableContainer";
import GrievanceFormContainer from "./GrievanceFormContainer";

const HomePage = (prop) => {
  return (
    /*This component contains the entire app*/
    <div className='main-gradient pt-2 h-screen'>
      <NavigationIcons />
      <GrievanceListContainer />
      <GrievanceTableContainer />
      <GrievanceFormContainer />
    </div>
  );
};

export default HomePage;
