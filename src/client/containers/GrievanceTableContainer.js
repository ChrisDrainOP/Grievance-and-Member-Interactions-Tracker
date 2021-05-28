import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../components/Pagination";

const GrievanceTableContainer = (props) => {
  const [formValues, setFormValues] = useState({});
  const [showAddNewForm, setShowAddNewForm] = useState("hidden");
  const [isAddNewClicked, setIsAddNewClicked] = useState(false);
  const [resJson, setResJson] = useState({
    eventNameMissing: "",
    meetingTypeMissing: "",
  });
  
  const handleIsAddNewClicked = () => {
    setIsAddNewClicked(true);
    setShowAddNewForm("block");
  };
  const handleIsResetClicked = () => {
    setIsAddNewClicked(false);
    setShowAddNewForm("hidden");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { meetingType, meetingDate, meetingName } = formValues;

    console.log(meetingType, "here");
    if (meetingName === "") {
      return setResJson({
        ...resJson,
        ["eventNameMissing"]: "Please name your Event",
      });
    }

    setResJson({ ...resJson, ["eventNameMissing"]: "" });

    if (meetingType === "") {
      console.log(resJson, "here checking meetingType");
      return setResJson({
        ...resJson,
        ["meetingTypeMissing"]: "Please choose Meeting type",
      });
    }

    const response = await fetch("/add/meeting", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        meetingName,
        meetingDate,
        meetingType,
      }),
    });

    {
      window.location.reload();
    }
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(id, ": ", value);
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  //Pagination Code Start
const events = props.listType;
const indexOfLastPost = props.currentPage * props.postsPerPage;
const indexOfFirstPost = indexOfLastPost - props.postsPerPage;
const currentPost = events.slice(indexOfFirstPost, indexOfLastPost);
//Change Page
const paginate = (pageNumber) => {
  props.setCurrentPage(pageNumber);

}

//Map Event for paginated code
  const listOfEvents = currentPost.map((event) => {

    function eventDate(date) {
      let dateRegEx = date
        .replace(/(T)00:00:00.000Z/, "");
      
        let newDate = new Date(dateRegEx)
        let actualDate =  new Date( newDate.getTime() + newDate.getTimezoneOffset() * 60000
        );
        console.log(actualDate)
        return actualDate.toDateString();
        
    }

    return (
      <div>
      <li
        onClick={() => props.handleEventRowClick(event)}
        key={event._id}
        className='my-2 w-full'
      >
        <label
          for={event._id}
          className='relative left-2 text-sm inline-block w-3/5'
        >
          <span>
            <input
              type='radio'
              name='event'
              id={`${event._id}`}
              value={`${event._id}`}
              className='mr-3'
            />
          </span>
          {event.meetingName}
        </label>
        <label
          for={event._id}
          className='text-center text-sm inline-block w-2/5'
        >
          {event.actualDateOfEvent
            ? eventDate(event.actualDateOfEvent)
            : "Unknown"}
        </label>
      </li>
              </div>
    );
  });



  return (
    <div className='h-screen bg-blue-300 relative'>
      <div className='flex py-4'>
        <div className='border-black ml-4'>
          <button className='mb-2' onClick={handleIsAddNewClicked}>
            <FontAwesomeIcon className='block relative left-6' icon={faPlus} />
            <span className='font-bold block'>Add New</span>
          </button>
          <form className={`${showAddNewForm}`} onSubmit={handleSubmit}>
            <div>
              <p>
                {resJson.eventNameMissing && (
                  <p className='font-bold text-red-600 mb-3'>
                    {resJson.eventNameMissing}
                  </p>
                )}
                {resJson.meetingTypeMissing && (
                  <p className='font-bold text-red-600 mb-3'>
                    {resJson.meetingTypeMissing}
                  </p>
                )}
              </p>
            </div>
            <div className='text-left'>
              <label htmlFor='meetingName' className='inline-block'></label>
              <input
                type='text'
                name='meetingName'
                placeholder='Add Event Name'
                className='inline-block bg-white mb-2 pl-1 font-bold'
                onClick=''
                onChange={handleInputChange}
                id='meetingName'
              />
            </div>
            <div className='mt-3 flex space-x-3'>
              <div className='mb-3'>
                <label
                  className='text-left block font-bold'
                  htmlFor='meetingDate'
                >
                  Date of Interaction:
                </label>
                <input
                  className='block'
                  type='date'
                  name='meetingDate'
                  id='meetingDate'
                  onChange={handleInputChange}
                  value={formValues.meetingDate}
                />
              </div>
            </div>
            <div className=''>
              <label
                className='block text-left font-bold'
                htmlFor='tasks'
              ></label>
              <select
                className='bg-white'
                onChange={handleInputChange}
                name='meetingType'
                id='meetingType'
                value={formValues.meetingType}
              >
                <option value=''>Event Type?</option>
                <option value='Incidents and Interactions'>
                  Incidents and Interactions
                </option>
                <option value='Step 1'>Step 1</option>
                <option value='Step 2'>Step 2</option>
                <option value='Step 2 to Arbitration'>
                  Step 2 to Arbitration
                </option>
                <option value='Step 3 Appeal'>Step 3 Appeal</option>
                <option value='Miscellaneous'>Miscellaneous</option>
              </select>
              <button
                className='bg-blue-400 ml-3 px-2 p-1 rounded-lg '
                type='submit'
              >
                Save
              </button>
              <button
                onClick={handleIsResetClicked}
                type='reset'
                className='bg-purple-400 rounded-lg p-1 px-2 ml-2'
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='text-md font-bold ml-5 mb-3' id="grievance-table">
        <h3 className='inline-block'>
          {props.listName ? (
            <p>{props.listName + " "} Events</p>
          ) : (
            "View Meetings"
          )}
        </h3>
      </div>

      <div className="">
        <ol className='w-full' id='checkboxes'>
          <div className=' w-full flex px-1'>
            <h6 className='w-3/5 text-center'>Description</h6>
            <h6 className='w-2/5 text-center'>Date</h6>
          </div>
          <div className=''>
          {listOfEvents}
          </div>
        </ol>
       {currentPost.length > 0 && <Pagination 
              postsPerPage={props.postsPerPage}
              totalPosts={events.length}
              paginate={paginate}
              />}
      </div>
    </div>
  );
};

export default GrievanceTableContainer;
