import { React, useState, useEffect } from "react";
import GrievanceListContainer from "./GrievanceListContainer.js";
import GrievanceTableContainer from "./GrievanceTableContainer";
import GrievanceFormContainer from "./GrievanceFormContainer";
import ReactPaginate from "react-paginate";



const HomePage = ({ history, ...props }) => {
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState("");
  const [meetings, setMeetings] = useState([]);
  const [listType, setListType] = useState([]);
  const [listName, setListName] = useState("");
  const [meetingsClicked, setMettingsClicked] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false)
  const [currentPost, setCurrentPost] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(8);
  const [pageCount, setPageCount] = useState(0)

  //Profile information is brought in from /server/routers/index.js

  useEffect(() => {
    setLoading(true);
    loadMeetings();
    setLoading(false);
  }, []);

  const handleClick = () => {
    let element = document.getElementById("grievance-table");
    element.scrollIntoView();
  }

  //Load all user meetings from the Database
  const loadMeetings = async () => {
    let response = await fetch("home/meetings", {
      method: "GET",
      credentials: "same-origin",
    });

    let data = await response.json();

    //Show the currents user name and display image
    setDisplayName(
      data.displayName
        .toLowerCase()
        .replace(/(\w{1})(\w+)/g, function replacer(match, p1, p2) {
          return [p1.toUpperCase(), p2, " "].join("");
        })
    );
    setImage(data.image);

    setMeetings([...data.userTasks]);

  };

  const handleMeetingListClick = (e) => {
    switch (e.target.id) {
      case "total":
        setListType(meetings);
        setListName("View All");
        setMettingsClicked(true)
        
        break;
      case "incidentsAndInteractions":
        setListType(incidentsAndInteractions);
        setListName("Incidents and Interactions");
        setMettingsClicked(true)
        
        break;
      case "stepOnes":
        setListType(stepOnes);
        setListName("Step 1");
        setMettingsClicked(true)
        
        break;
      case "stepTwos":
        setListType(stepTwos);
        setListName("Step 2");
        setMettingsClicked(true)
        
        break;
      case "stepTwoToArbitration":
        setListType(stepTwoToArbitrations);
        setListName("Step 2 to Arbitration");
        setMettingsClicked(true)
        
        break;
      case "stepThreeAppeal":
        setListType(stepThreeAppeal);
        setListName("Step 3 Appeal");
        setMettingsClicked(true)
        
        break;
      case "miscellaneous":
        setListType(miscellaneous);
        setListName("Miscellaneous");
        setMettingsClicked(true)
        
        break;
    }
  };

  const handleEventRowClick = (event) => {
    setSelectedEvent(event);
  };


  let incidentsAndInteractions = meetings.reduce((acc, cur) => {
    if (
      cur.meetingType === "Incidents and Interactions"
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

//Handle pagination page click
const handlePageClick = (e) => {
  const selectedPage = e.selected;
  setOffset(selectedPage+1)
}

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
{meetingsClicked ?  <GrievanceTableContainer
        listType={listType}
        setListType={setListType}
        listName={listName}
        handleEventRowClick={handleEventRowClick}
        selectedEvent={selectedEvent}
        loadMeetings={loadMeetings}
        handleClick={handleClick}
        loading={loading}
        setLoading={setLoading}
        currentPost={currentPost}
        setCurrentPost={setCurrentPost}
        listType={listType}
        offset={offset}
        perPage={perPage}
        setPageCount={setPageCount}
        paginate={
        <ReactPaginate 
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          pageClassName={"page-number"}
          />}
       
      /> : null}
      {selectedEvent ? (
        <GrievanceFormContainer selectedEvent={selectedEvent} />
      ) : null}
    </div>
  );
};

export default HomePage;
