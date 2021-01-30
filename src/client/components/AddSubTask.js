import React from "react";

const AddSubTask = () => {
  return (
    <div className=''>
      <form>
        <label className='block w-full text-left' htmlFor='subtask'>
          Add Subtask
        </label>
        <input className='w-full' type='text' name='subtask' id='subtask' />
        <div>
          <label htmlFor='reminder'>Reminder Me</label>
          <input className='block' type='date' name='reminder' id='reminder' />
          <div className='pt-3'>
            <input
              className='w-1/2 bg-blue-400 p-1'
              type='submit'
              value='Save'
            />
            <input className='w-1/2 bg-indigo-400 p-1' type='reset'></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSubTask;
