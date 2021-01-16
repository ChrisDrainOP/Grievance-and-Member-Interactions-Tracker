import React from "react";
import NavigationContainer from "./NavigationContainer";
import GrievanceListContainer from "./GrievanceListContainer";
import GrievanceTableContainer from "./GrievanceTableContainer";
import GrievanceFormContainer from "./GrievanceFormContainer";

function App() {
  return (
    <div className='font-source-serif h-screen'>
      <NavigationContainer />
      <GrievanceListContainer />
      <GrievanceTableContainer />
      <GrievanceFormContainer />
    </div>
  );
}

export default App;

const grievanceTableData = [
  {
    date: "1-5-21",
    description: "Employee Interaction",
    "Meeting Type": "Interaction",
  },
  {
    date: "1-5-21",
    description: "Employee Interaction",
    "Meeting Type": "Interaction",
  },
  {
    date: "1-5-21",
    description: "Employee Interaction",
    "Meeting Type": "Interaction",
  },
  {
    date: "1-5-21",
    description: "Employee Interaction",
    "Meeting Type": "Interaction",
  },
  {
    date: "1-5-21",
    description: "Employee Interaction",
    "Meeting Type": "Interaction",
  },
  {
    date: "1-5-21",
    description: "Employee Interaction",
    "Meeting Type": "Interaction",
  },
  {
    date: "1-5-21",
    description: "Employee Interaction",
    "Meeting Type": "Interaction",
  },
  {
    date: "1-5-21",
    description: "Employee Interaction",
    "Meeting Type": "Interaction",
  },
];
