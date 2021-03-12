import React, { useState } from "react";
import GrievanceForm from "../components/GrievanceForm";

const GrievanceFormContainer = ({ selectedEvent }) => {
  console.log("selected event in form", selectedEvent);
  const [formValues, setFormValues] = useState({});
  const [resJson, setResJson] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(id, ": ", value);
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      meetingName,
      meetingType,
      meetingDate,
      reminder,
      extension,
      description,
    } = formValues;
    if (!meetingName) {
      setResJson({ errors: "Please include a meeting name at the top." });
    }
    if (!meetingType) {
      setResJson({ errors: "Please include a Meeting Type" });
    }
    if (!description) {
      setResJson({ errors: "Please include a description" });
    }

    const response = await fetch("/add/meeting", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        meetingName,
        meetingType,
        meetingDate,
        reminder,
        extension,
        description,
      }),
    });

    const json = await response.json();

    setResJson(json);

    console.log(json, resJson, "I submitted");
  };
  return (
    <div className='bg-blue-100 p-1'>
      <GrievanceForm
        resJson={resJson}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        selectedEvent={selectedEvent}
      />
    </div>
  );
};

export default GrievanceFormContainer;
