import React from "react";
import GrievanceMeetingList from "../components/GrievanceMeetingList";
import GrievanceChronologicalList from "../components/GrievanceChronologicalList";

const GrievanceListContainer = (prop) => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-blue-200 pt-8 h-3/4 '>
      <GrievanceMeetingList />
      <GrievanceChronologicalList />
    </div>
  );
};

export default GrievanceListContainer;
