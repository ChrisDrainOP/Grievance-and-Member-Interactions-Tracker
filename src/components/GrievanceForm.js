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
          <label htmlFor='name' className=''>
            Subject:
          </label>
          <input type='text' name='name' className='' />
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
        <div>
          <label htmlFor='meetings'>Meeting Type:</label>
          <input list='meetings' />
          <datalist type='text' name='meetings' className='' id='meetings'>
            <option value='Request for Information(RFI)' />
            <option value='Step 1' />
            <option value='Step 2' />
            <option value='Step 3' />
            <option value='Email' />
            <option value='Interview Request' />
          </datalist>
        </div>
      </form>
    </div>
  );
};

export default GrievanceForm;
