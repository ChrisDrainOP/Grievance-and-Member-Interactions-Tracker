import React, {useState, useEffect} from "react";
import GrievanceMeetingList from "../components/GrievanceMeetingList";
import GrievanceChronologicalList from "../components/GrievanceChronologicalList";

const GrievanceListContainer = (props) => {
  let [addMeetings, useAddMeetings] = useState({});

  useEffect(() => {
    loadMeetings();
  }, [])

  const loadMeetings = async () => {
   let response = await fetch("home/meetings", {
      "method": "GET",
      "credentials": "same-origin",
    })

    let data = await response.json();
    console.log(data, "heres the data from /home/meetings");

  }
  return (
    <div className='bg-gradient-to-r from-blue-500 to-blue-200 pt-8 h-3/4 '>
      <GrievanceMeetingList />
      <GrievanceChronologicalList />
    </div>
  );
};

export default GrievanceListContainer;
