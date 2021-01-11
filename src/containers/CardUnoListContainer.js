import React from "react";
import UnoProcedureList from "../components/CardUnoProcedureList";
import UnoChronoList from "../components/CardUnoChronoList";

const UnoListContainer = (prop) => {
  return (
    <div className=''>
      <UnoProcedureList />
      <UnoChronoList />
    </div>
  );
};

export default UnoListContainer;
