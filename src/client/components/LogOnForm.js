import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faStopwatch,
  faShare,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const LogOnForm = (props) => {
  return (
    <div className=''>
      <div className='ml-7'>
        <form className='' action=''>
          <div className='py-5'>
            <label className='block' htmlFor='username'></label>
            <span className='text-blue-200'>
              <FontAwesomeIcon icon={faUser} className='relative right-2 ' />
            </span>
            <input
              className='bg-transparent font-bold placeholder-white border-solid border-b-2 border-white placeholder-opacity-40'
              type='text'
              name='username'
              id='username'
              placeholder='Username'
            />
          </div>
          <div>
            <label className='block' htmlFor='password'></label>
            <span className='text-blue-200'>
              <FontAwesomeIcon
                icon={faUnlockAlt}
                className='relative right-2 '
              />
            </span>
            <input
              type='text'
              name='password'
              id='password'
              className='bg-transparent font-bold placeholder-white border-solid border-b-2 border-white placeholder-opacity-40'
              placeholder='Password'
            />
          </div>
          <div className='flex space-x-4 mt-4 relative left-3'>
            <div>
              <a href='http://'>
                <button className='text-white font-bold border border-solid rounded-md border-white px-2 py-1 border-opacity-30'>
                  Login
                </button>
              </a>
            </div>
            <div>
              <button
                onClick={props.onSignUpClick}
                type='button'
                className='text-white font-bold border border-solid rounded-md border-white px-2 py-1 border-opacity-30'
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className='mt-5 ml-3 relative top-8'>
        <h3 className='font-bold text-blue-900'>
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
              <span className='font-bold text-blue-900'>Always</span> stay ahead
              of the Grievance Timeline.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default LogOnForm;
