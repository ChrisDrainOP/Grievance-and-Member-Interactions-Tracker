import React, { useState, useEffect } from "react";
import GrievanceMeetingList from "../components/GrievanceMeetingList";
import GrievanceChronologicalList from "../components/GrievanceChronologicalList";

const GrievanceListContainer = (props) => {
  let [meetings, setMeetings] = useState([]);

  useEffect(async () => {
    await loadMeetings();
    console.log(meetings, "here are the meetings!!!");
  }, []);

  const loadMeetings = async () => {
    let response = await fetch("home/meetings", {
      method: "GET",
      credentials: "same-origin",
    });

    let data = await response.json();
    console.log(data.userTasks, "heres the data from /home/meetings");

    setMeetings([...data.userTasks]);
  };
  return (
    <div className='bg-gradient-to-r from-blue-500 to-blue-200 pt-8 h-3/4 '>
      <GrievanceMeetingList meetings={meetings} />
      <GrievanceChronologicalList />
    </div>
  );
};

export default GrievanceListContainer;
