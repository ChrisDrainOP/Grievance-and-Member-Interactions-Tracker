import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const LogOnForm = (prop) => {
  return (
    <div className='h-screen'>
      <form className='mx-5' action=''>
        <div className='py-5'>
          <label className='block' htmlFor='username'>
            Username:
          </label>
          <input type='text' name='username' id='username' />
        </div>
        <div>
          <label className='block' htmlFor='password'>
            Password:
          </label>
          <input type='text' name='password' id='password' />
        </div>
      </form>
      <div className='mt-5 mx-2'>
        <h3 className='font-bold '>
          A new way to keep track of Grievances and Member interactions
        </h3>
        <ol className='mt-5'>
          <li className='flex '>
            <div className='w-1/5'>
              <FontAwesomeIcon
                icon={faShare}
                className='text-6xl text-blue-900'
              />
            </div>

            <p className='pt-2 w-3/4 inline pl-8 align-middle'>
              <span className='font-bold text-blue-900 '>Share</span> with other
              stewards what you're working on
            </p>
          </li>
          <li className='flex mt-8'>
            <div className='w-1/5'>
              <FontAwesomeIcon
                icon={faSearchPlus}
                className='text-6xl text-blue-900'
              />
            </div>
            <p className='pt-2 w-3/4 inline pl-8 align-middle'>
              <span className='font-bold text-blue-900'>Easily Search</span> all
              grievances and interactions.
            </p>
          </li>
          <li className='flex mt-8'>
            <div className='w-1/5'>
              <FontAwesomeIcon
                icon={faStopwatch}
                className='text-6xl text-blue-900'
              />
            </div>
            <p className='pt-2 w-3/4 inline pl-8 align-middle'>
              <span className='font-bold text-blue-900'>Always</span> Stay ahead
              of the Grievance Timeline.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default LogOnForm;
