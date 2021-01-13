import React from "react";
import GrievanceProcedureList from "../components/GrievanceProcedureList";
import GrievanceChronologicalList from "../components/GrievanceChronologicalList";

const GrievanceListContainer = (prop) => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-blue-200 h-3/4'>
      <GrievanceProcedureList />
      <GrievanceChronologicalList />
    </div>
  );
};

export default GrievanceListContainer;
