import React from "react";

const SaveSubTask = () => {
  return (
    <div>
      <label htmlFor='reminder'>Remind Me</label>
      <input
        className='block bg-white'
        type='date'
        name='reminder'
        id='reminder'
      />
      <div className='pt-3'>
        <div className=' space-x-1 '>
          <input
            className='w-2/5 bg-blue-400 p-1 '
            type='submit'
            value='Save'
          />
          <input className='w-2/5 bg-indigo-400 p-1' type='reset'></input>
        </div>
      </div>
    </div>
  );
};

export default SaveSubTask;
