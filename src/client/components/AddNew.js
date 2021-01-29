import React from "react";

const AddNew = (prop) => {
  return (
    <div className='w-full pt-8' placeholder='Subject'>
      <div className='text-center'>
        <label htmlFor='AddNew'></label>
        <input
          className='text-center'
          type='text'
          name='AddNew'
          id='AddNew'
          placeholder='Add Meeting Description'
        />
        <div className='m-2'>
          <input
            className='p-1 bg-blue-400'
            type='submit'
            value='Create'
          ></input>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
