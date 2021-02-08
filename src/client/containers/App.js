import React from "react";
import HomePage from "./HomePage";
import GrievanceListContainer from "./GrievanceListContainer";
import GrievanceTableContainer from "./GrievanceTableContainer";
import GrievanceFormContainer from "./GrievanceFormContainer";

function App() {
  return (
    <div className='font-source-serif h-screen'>
      <HomePage />
      <GrievanceTableContainer />
      <GrievanceFormContainer />
    </div>
  );
}

export default App;
