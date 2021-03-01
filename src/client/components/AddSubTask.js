import React, { useState } from "react";

const AddSubTask = () => {
  const [isSubTaskDisplayed, setDisplaySubtask] = useState("invisible");
  const [isResetClicked, setResetClicked] = useState(false);
  const [SubTaskDescriptionValue, setSubTaskDescriptionValue] = useState("");

  const handleSubTaskDescriptionValueChange = (e) =>
    setSubTaskDescriptionValue(e.target.value);

  function handleSubTaskDisplay() {
    setDisplaySubtask("block");
    setResetClicked(false);
  }
  function handleResetClick() {
    setSubTaskDescriptionValue("");
    setResetClicked(!isResetClicked);
    setDisplaySubtask("invisible");
  }

  return (
    <div className='my-4'>
      <form>
        <label className='block w-full text-left font-bold' htmlFor='subtask'>
          Add Subtask
        </label>
        <input
          className='w-full'
          type='text'
          name='subtask'
          id='subtask'
          value={SubTaskDescriptionValue}
          onChange={handleSubTaskDescriptionValueChange}
          onClick={handleSubTaskDisplay}
        />
        <div className={`${isSubTaskDisplayed}`}>
          <label htmlFor='subTaskReminder'>Remind Me</label>
          <input
            className='block bg-white'
            type='date'
            name='subTaskReminder'
            id='subTaskReminder'
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
                onClick={handleResetClick}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSubTask;
