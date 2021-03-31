import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const GrievanceTableContainer = (props) => {
  const [formValues, setFormValues] = useState({});
  const [showAddNewForm, setShowAddNewForm] = useState('hidden')
  const [isAddNewClicked, setIsAddNewClicked] = useState(false);
  const handleIsAddNewClicked = () => {
    setIsAddNewClicked(true)
    setShowAddNewForm("block")
  }
  const handleIsResetClicked = () => {
    setIsAddNewClicked(false)
    setShowAddNewForm("hidden")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      
  }
  const handleInputChange = (e) => {
    const {id, value} = e.target;
    console.log(id, ": ", value);
    setFormValues((prev) => 
      ({...prev, [id]: value})
    )

  }

  let events = props.listType;

  const listOfEvents = events.map((event) => {
    
    function eventDate(date) {
      return new Date(date).toDateString();
    }

    return (
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
    );
  });

  return (
    <div className='h-screen bg-blue-300'>
      <div className='flex py-4'>
        <div className='border-black ml-4'>
          <button className='mb-2' onClick={handleIsAddNewClicked}>
            <FontAwesomeIcon className='block relative left-6' icon={faPlus} />
            <span className='font-bold block'>Add New</span>
          </button>
          <form className={`${showAddNewForm}`}>
            <div className='text-left'>
              <label htmlFor='meetingName' className='inline-block'></label>
              <input
                type='text'
                name='meetingName'
                placeholder='Add Event Name'
                className='inline-block bg-white mb-2 pl-1 font-bold'
                onClick=""
                onChange={handleInputChange}
                id='meetingName'
              />
            </div>
            <div className=''>
              <label
                className='block text-left font-bold'
                htmlFor='tasks'
              ></label>
              <select className='bg-white' onChange={handleInputChange} name='meetingType' id='meetingType'>
                <option value=''>Event Type?</option>
                <option value='Member Interaction'>Member Interaction</option>
                <option value='Incident'>Incident</option>
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
              onClick={handleIsResetClicked} type='reset' className='bg-purple-400 rounded-lg p-1 px-2 ml-2'>Reset</button>
            </div>
          </form>
        </div>
      </div>
      <div className='text-md font-bold ml-5 mb-3'>
        <h3 className='inline-block'>
          {props.listName ? props.listName : "View Meetings"}
        </h3>
      </div>

      <div>
        <ol className='w-full' id='checkboxes'>
          <div className=' w-full flex px-1'>
            <h6 className='w-2/5 text-center'>Description</h6>
            <h6 className='w-2/5 text-center'>Event</h6>
            <h6 className='w-1/5 text-center'>Date</h6>
          </div>
          {listOfEvents}
        </ol>
      </div>

    </div>
  );
};

export default GrievanceTableContainer;
