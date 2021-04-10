import React, { useState } from "react";
import MemberInteractionForm from "../components/MemberInteractionForm";
import GrievanceForm from "../components/GrievanceForm";

const GrievanceFormContainer = ({ selectedEvent }) => {
  console.log("selected event in form", selectedEvent);

  return (
    <div className='w-full h-screen'>
      {selectedEvent.meetingType === "Incidents and Interactions" ? (
        <MemberInteractionForm selectedEvent={selectedEvent} />
      ) : null}
      {selectedEvent.meetingType === "Step 1" ? (
        <GrievanceForm selectedEvent={selectedEvent} />
      ) : null}
    </div>
  );
};

export default GrievanceFormContainer;
