import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import AddSubTask from "./AddSubTask";

const GrievanceForm = (prop) => {
  return (
    <div className='mx-2 pt-5 relative '>
      <form action='/add-meeting' method='POST' className='text-center'>
        <input
          type='submit'
          className='text-1xl p-2 absolute right-0 top-2 bg-blue-400 border-2 rounded-lg'
          value='Save'
        />
        <div className='  pb-4 text-left'>
          <label htmlFor='meetingName' className='inline-block'>
            <FontAwesomeIcon icon={faGripLinesVertical} />
          </label>
          <input
            type='text'
            name='meetingName'
            placeholder='Meeting Name Here'
            className='inline-block bg-blue-100 pl-1 font-bold'
          />
        </div>
        <div className='mt-3 w-full flex space-x-3'>
          <div className='relative top-6'>
            <label className='block text-left font-bold' htmlFor='tasks'>
              Event Type:{" "}
            </label>
            <select
              className='bg-white w-full block h-7 '
              name='task type'
              id='tasks'
            >
              <option value='Member Interaction'>Member Interaction</option>
              <option value='Incident'>Incident</option>
              <option value='Step 1'>Step 1</option>
              <option value='Step 2'>Step 2</option>
              <option value='Step 2 to Arbitration'>
                Step 2 to Arbitration
              </option>
              <option value='Step 3 Appeal'>Step 3 Appeal</option>
              <option value='Information Request (RFI)'>
                Information Request (RFI)
              </option>
              <option value='Miscellaneous'>Miscellaneous</option>
            </select>
          </div>
          <div className=''>
            <label className='text-left block font-bold' htmlFor='meetingDate'>
              Actual Date of Meeting:
            </label>
            <input
              className='w-full block'
              type='date'
              name='meetingDate'
              id='meetingDate'
            />
          </div>
        </div>
        <div className='flex mt-3 relative w-full space-x-3'>
          <div className='relative top-6'>
            <label htmlFor='reminder' className='block text-left font-bold'>
              Reminder:
            </label>
            <input
              type='date'
              name='reminder'
              className='w-full bg-white block'
            />
          </div>
          <div className='text-left'>
            <label className='block font-bold' htmlFor='extension'>
              Extension Date:<span className='block'>(If Applicable)</span>
            </label>
            <input
              className='w-full block'
              type='date'
              name='extension'
              id='extension'
            />
          </div>
        </div>
        <div className='mt-3 '>
          <label
            className='block w-full text-left font-bold'
            htmlFor='description'
          >
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
