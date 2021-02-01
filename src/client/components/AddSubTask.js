import React, { useState, useEffect } from "react";
import SaveSubTask from "./SaveSubTask";

const AddSubTask = () => {
  const [showSubTask, setShowSubTask] = useState(false);
  const handleSaveSubTaskButtons = () => setShowSubTask(true);

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
          onClick={handleSaveSubTaskButtons}
        />
        {showSubTask ? <SaveSubTask /> : null}
      </form>
    </div>
  );
};

export default AddSubTask;
