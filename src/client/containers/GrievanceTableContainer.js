import React from "react";

const GrievanceTableContainer = (props) => {
  let events = props.listType;


  const listOfEvents = events.map((event) => {
    function eventDate(date) {
      return new Date(date).toDateString();
    }

    return (
      <li
        onClick={() => props.handleEventRowClick(event)}
        key={event._id}
        className='my-2 border w-full'
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
        <ol className='w-full' id='checkboxes'>
          <div className='border w-full flex'>
            <h6 className='w-1/2 text-center'>Description</h6>
            <h6 className='w-1/2 text-center'>Date of Event</h6>
          </div>
          {listOfEvents}
        </ol>
      </div>
    </div>
  );
};

export default GrievanceTableContainer;
