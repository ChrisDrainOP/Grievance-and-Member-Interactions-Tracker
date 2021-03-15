import { React, useState, useEffect } from "react";
import GrievanceListContainer from "./GrievanceListContainer.js";
import GrievanceTableContainer from "./GrievanceTableContainer";
import GrievanceFormContainer from "./GrievanceFormContainer";

const HomePage = ({ history, ...props }) => {
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState("");
  const [meetings, setMeetings] = useState([]);
  const [listType, setListType] = useState([]);
  const [listName, setListName] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  //Profile information is brought in from /server/routers/index.js

  useEffect(() => {
    loadProfile();
    loadMeetings();
  }, []);

  const loadProfile = async () => {
    const response = await fetch("/home/token", {
      method: "GET",
      credentials: "same-origin",
    });
    const data = await response.json();

    //Show the currents user name and display image
    setDisplayName(
      data.displayName
        .toLowerCase()
        .replace(/(\w{1})(\w+)/g, function replacer(match, p1, p2) {
          return [p1.toUpperCase(), p2, " "].join("");
        })
    );
    setImage(data.image);
  };

  //Load all user meetings from the Databas
  const loadMeetings = async () => {
    let response = await fetch("home/meetings", {
      method: "GET",
      credentials: "same-origin",
    });

    let data = await response.json();
    console.log(data.userTasks, "heres the data from /home/meetings");

    setMeetings([...data.userTasks]);
  };

  const handleMeetingListClick = (e) => {
    switch (e.target.id) {
      case "total":
        setListType(meetings);
        setListName("View All");
        break;
      case "incidentsAndInteractions":
        setListType(incidentsAndInteractions);
        setListName("Incidents and Interactions");
        break;
      case "stepOnes":
        setListType(stepOnes);
        setListName("Step 1 Events");
        break;
      case "stepTwos":
        setListType(stepTwos);
        setListName("Step 2 Events");
        break;
      case "stepTwoToArbitration":
        setListType(stepTwoToArbitrations);
        setListName("Step 2 to Arbitration Events");
        break;
      case "stepThreeAppeal":
        setListType(stepThreeAppeal);
        setListName("Step 3 to Appeal Events");
        break;
      case "miscellaneous":
        setListType(miscellaneous);
        setListName("Miscellaneous Events");
        break;
    }
  };

  const handleEventRowClick = (event) => {
    setSelectedEvent(event);
  };


  let incidentsAndInteractions = meetings.reduce((acc, cur) => {
    if (
      cur.meetingType === "Member Interaction" ||
      cur.meetingType === "Incident"
    ) {
      acc.push(cur);
    }
    return acc;
  }, []);

  let stepOnes = meetings.reduce((acc, cur) => {
    if (cur.meetingType === "Step 1") {
      acc.push(cur);
    }
    return acc;
  }, []);

  let stepTwos = meetings.reduce((acc, cur) => {
    if (cur.meetingType === "Step 2") {
      acc.push(cur);
    }
    return acc;
  }, []);

  let stepTwoToArbitrations = meetings.reduce((acc, cur) => {
    if (cur.meetingType === "Step 2 to Arbitration") {
      acc.push(cur);
    }
    return acc;
  }, []);

  let stepThreeAppeal = meetings.reduce((acc, cur) => {
    if (cur.meetingType === "Step 3 Appeal") {
      acc.push(cur);
    }
    return acc;
  }, []);

  let miscellaneous = meetings.reduce((acc, cur) => {
    if (cur.meetingType === "Miscellaneous") {
      acc.push(cur);
    }
    return acc;
  }, []);
  return (
    /*This component contains the entire app*/
    <div className='main-gradient pt-2'>
      <GrievanceListContainer
        displayName={displayName}
        image={image}
        meetings={meetings}
        handleMeetingListClick={handleMeetingListClick}
        incidentsAndInteractions={incidentsAndInteractions}
        stepOnes={stepOnes}
        stepTwos={stepTwos}
        stepTwoToArbitrations={stepTwoToArbitrations}
        stepThreeAppeal={stepThreeAppeal}
        miscellaneous={miscellaneous}
      />
      <GrievanceTableContainer
        listType={listType}
        listName={listName}
        handleEventRowClick={handleEventRowClick}

      />
      <GrievanceFormContainer selectedEvent={selectedEvent} />
    </div>
  );
};

export default HomePage;
