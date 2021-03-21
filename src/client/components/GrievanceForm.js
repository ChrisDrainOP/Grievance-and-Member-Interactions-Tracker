import React, {useState} from "react";
import AddSubTask from "./AddSubTask";

const GrievanceForm = (props) => {
  const { selectedEvent } = props;
const [formValues, setFormValues] = useState({});
const [resJson, setResJson] = useState({});

const handleInputChange = (e) => {
  const { id, value } = e.target;
  console.log(id, ": ", value);
  setFormValues((prev) => ({ ...prev, [id]: value }));
};
const handleSubmit = async (e) => {
  e.preventDefault();

  const {
    meetingName,
    meetingType,
    meetingDate,
    reminder,
    extension,
    description,
  } = formValues;
  if (!meetingName) {
    setResJson({ errors: "Please include a meeting name at the top." });
  }
  if (!meetingType) {
    setResJson({ errors: "Please include a Meeting Type" });
  }
  if (!description) {
    setResJson({ errors: "Please include a description" });
  }

  const response = await fetch("/add/meeting", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      meetingName,
      meetingType,
      meetingDate,
      reminder,
      extension,
      description,
    }),
  });

  const json = await response.json();

  setResJson(json);

  console.log(json, resJson, "I submitted");
};
  return (
    <div className='bg-blue-100 px-3 pt-5 relative '>
      <form
        action='/add/meeting'
        onSubmit={handleSubmit}
        className='text-center'
        method='post'
      >
        <input
          type='submit'
          className='text-1xl p-2 absolute right-0 top-2 bg-blue-400 border-2 rounded-lg'
          value='Save'
        />
        {resJson.message && (
          <h3 className='text-red-900 font-bold text-2xl relative bottom-2 text-center w-3/4 '>
            {resJson.message}
          </h3>
        )}

        <div className='mt-3 w-full flex space-x-3'>
          <div className='relative top-6'>
            <label className='block text-left font-bold' htmlFor='tasks'>
              Event Type:{" "}
            </label>
            <select
              className='bg-white w-full block h-7 '
              name='meetingType'
              id='meetingType'
              onChange={handleInputChange}
            >
              <option value=''>Event Type?</option>
              <option value='Member Interaction'>Member Interaction</option>
              <option value='Incident'>Incident</option>
              <option value='Step 1'>Step 1</option>
              <option value='Step 2'>Step 2</option>
              <option value='Step 2 to Arbitration'>
                Step 2 to Arbitration
              </option>
              <option value='Step 3 Appeal'>Step 3 Appeal</option>
              <option value='Miscellaneous'>Miscellaneous</option>
            </select>
          </div>
          <div className=''>
            <label className='text-left block font-bold' htmlFor='meetingDate'>
              Actual Date of Meeting:
            </label>
            <input
              className='w-full block'
              type='date'
              name='meetingDate'
              id='meetingDate'
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='flex mt-3 relative w-full space-x-3'>
          <div className='relative top-6'>
            <label htmlFor='reminder' className='block text-left font-bold'>
              Reminder:
            </label>
            <input
              type='date'
              name='reminder'
              className='w-full bg-white block'
              id='reminder'
              onChange={handleInputChange}
            />
          </div>
          <div className='text-left'>
            <label className='block font-bold' htmlFor='extension'>
              Extension Date:<span className='block'>(If Applicable)</span>
            </label>
            <input
              className='w-full block'
              type='date'
              name='extension'
              id='extension'
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='mt-3 '>
          <label
            className='block w-full text-left font-bold'
            htmlFor='description'
          >
            Description:
          </label>
          <textarea
            name='description'
            className='w-full'
            cols='30'
            rows='10'
            id='description'
            onChange={handleInputChange}
          ></textarea>
        </div>
      </form>
      <AddSubTask />
    </div>
  );
};

export default GrievanceForm;
