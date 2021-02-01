import React, { useState, useEffect } from "react";

const AddSubTask = () => {
  const [showSubTask, setShowSubTask] = useState("hidden");
  const handleSubTaskDisplay = () => setShowSubTask(true);

  const [subTaskValue, setSubTaskValue] = useState("");
  const handleSubTaskValueChange = (e) => setSubTaskValue(e.target.value);

  return (
    <div className='mt-2'>
      <form>
        <label className='block w-full text-left font-bold' htmlFor='subtask'>
          Add Subtask
        </label>
        <input
          className='w-full'
          type='text'
          name='subtask'
          id='subtask'
          value={subTaskValue}
          onChange={handleSubTaskValueChange}
          onClick={handleSubTaskDisplay}
        />
        <div className={`${showSubTask}`}>
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
              <input
                className='w-2/5 bg-indigo-400 p-1'
                type='reset'
                onClick={() => setShowSubTask("hidden")}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSubTask;
