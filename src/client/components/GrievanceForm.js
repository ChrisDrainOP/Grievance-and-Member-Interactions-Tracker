import React from "react";

const GrievanceForm = (prop) => {
  return (
    <div className='h-full relative'>
      <input
        type='submit'
        className='text-1xl p-2 absolute right-5 top-2 bg-blue-100 border-green-50 border-2 rounded-lg'
        value='Close and Save X'
      />
      <form className='pt-16 h-screen text-center'>
        <legend className='text-2xl'>Name of Grievance </legend>
        <div className='mt-3'>
          <label htmlFor='date' className=''>
            Date:
          </label>
          <input type='date' name='date' className='' />
        </div>
        <div className='my-3'>
          <label htmlFor='description' className=''>
            Description:
          </label>
          <input type='text' name='description' className='' />
        </div>
        <div>
          <label htmlFor='tasks'>Event Type: </label>
          <select name='task type' id='tasks'>
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
            <option value='Extension Request'>Extension Request</option>
            <option value='Corrections and Additions'>
              Corrections and Additions
            </option>
            <option value='Miscellaneous'>Miscellaneous</option>
          </select>
        </div>
        <div>
          <div>
            <label htmlFor='description'>Description:</label>
          </div>
          <textarea
            name='description'
            className=''
            cols='30'
            rows='10'
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default GrievanceForm;
