import React from "react";

const AddNew = (prop) => {
  return (
    <div className='w-full pt-8' placeholder='Subject'>
      <div className='text-center'>
        <label htmlFor='AddNew'></label>
        <input className='text-center' type='text' name='AddNew' id='AddNew' />
        <p>Press Enter to Add</p>
      </div>
    </div>
  );
};

export default AddNew;
