import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const GrievanceTableContainer = (props) => {
  return (
      <div className='h-screen bg-white'>
        
        <div className='text-xl ml-5'>
          <h3 className='inline-block'>{props.listName ? props.listName : "View Meetings"}</h3>
        </div>
        <div>
          
        </div>
      </div>
  );
};

export default GrievanceTableContainer;
