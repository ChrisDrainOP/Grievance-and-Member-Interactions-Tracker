import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import AddSubTask from "./AddSubTask";

const GrievanceForm = (prop) => {
  return (
    <div className='ml-3 pt-5 relative  h-full'>
      <input
        type='submit'
        className='text-1xl p-2 absolute right-0 top-2 bg-blue-400 border-2 rounded-lg'
        value='Save'
      />
      <form className='text-center'>
        <div className='w-3/4  pb-4 text-left'>
          <label htmlFor='add-a-task' className='inline-block'>
            <FontAwesomeIcon icon={faGripLinesVertical} />
          </label>
          <input
            type='text'
            name='add-a-task'
            value='Grievance Description'
            className='inline-block bg-blue-100 pl-1'
          />
        </div>
        <div className='w-3/4 '>
          <label className='block text-left w-full' htmlFor='tasks'>
            Event Type:{" "}
          </label>
          <select className='block' name='task type' id='tasks'>
            <option value=''>Select type of task</option>
            <option value='Member Interaction'>Member Interaction</option>
            <option value='Incident'>Incident</option>
            <option value='Step 1'>Step 1</option>
            <option value='Step 2'>Step 2</option>
            <option value='Step 2 to Arbitration'>Step 2 to Arbitration</option>
            <option value='Step 3 Appeal'>Step 3 Appeal</option>
            <option value='Information Request (RFI)'>
              Information Request (RFI)
            </option>
            <option value='Miscellaneous'>Miscellaneous</option>
          </select>
        </div>
        <div className='w-3/4 '>
          <label htmlFor='date' className='block w-full text-left'>
            Date:
          </label>
          <input type='date' name='date' className='block' />
        </div>
        <div className='w-3/4 '>
          <label className='block w-full text-left' htmlFor='description'>
            Description:
          </label>
          <textarea
            name='description'
            className='w-full'
            cols='30'
            rows='10'
          ></textarea>
        </div>
      </form>
      <AddSubTask />
    </div>
  );
};

export default GrievanceForm;
