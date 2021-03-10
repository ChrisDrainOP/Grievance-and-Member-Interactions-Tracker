import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faDotCircle } from "@fortawesome/free-solid-svg-icons";

const GrievanceTableContainer = (props) => {

  let events = props.listType;  

  const listOfEvents = events.map((event) => {

    function eventDate(date){
      return new Date(date).toDateString()   
  }

    return (
      <tr onClick={props.handleEventRowClick} className="mb-3">
          <td className="relative left-2 border">
          <FontAwesomeIcon className={`mr-2 ${props.eventHighlighter}`} icon={faDotCircle} />
          {event.meetingName}</td>
          <td className='text-center text-sm border'>
            {event.actualDateOfEvent ? eventDate(event.actualDateOfEvent) : "Unknown"}
          </td>
      </tr>
    );
  });
  return (
    <div className='h-screen bg-white'>
      <div className='text-md font-bold ml-5'>
        <h3 className='inline-block'>
          {props.listName ? props.listName : "View Meetings"}
        </h3>
      </div>
      <div>
        <table className="w-full">
        <tr className="border">
          <th>Description</th>
          <th>Date of Event</th>
        </tr>
        {listOfEvents}
        </table>
      </div>
    </div>
  );
};

export default GrievanceTableContainer;
