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
          <label htmlFor='reminder'>Remind Me</label>
          <input
            className='block bg-white'
            type='date'
            name='reminder'
            id='reminder'
          />
          <div className='pt-3'>
            <div className=' space-x-1'>
              <input
                className='w-2/5 bg-blue-400 p-1 '
                type='submit'
                value='Save'
              />
              <input className='w-2/5 bg-indigo-400 p-1' type='reset'></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSubTask;
