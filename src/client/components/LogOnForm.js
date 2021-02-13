import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faStopwatch,
  faShare,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const LogOnForm = (props) => {
  return (
    <div className='main-gradient h-screen '>
      <div className='ml-2 pt-5 text-center'>
        <a href={`${process.env.REACT_APP_API_URL}/auth/google`}>
          <button className='p-2  bg-white shadow-lg border-transparent rounded mb-2 w-3/4 m-auto'>
            <FontAwesomeIcon
              icon={faGoogle}
              className='text-green-700 text-2xl mr-2 relative top-1'
            />
            <p className='text-black inline-block'>Log In with Google </p>
          </button>
        </a>
        <a href='' className=''>
          <button className='p-2 border-transparent rounded bg-blue-800 shadow-lg mb-2 w-3/4 m-auto'>
            <FontAwesomeIcon
              icon={faFacebook}
              className='text-white text-2xl mr-2 relative top-1'
            />
            <p className='text-white  inline-block'>Log In with Facebook </p>
          </button>
        </a>
        <a href='' className=''>
          <button className='p-2 border-transparent rounded bg-blue-300 shadow-lg w-3/4 m-auto'>
            <FontAwesomeIcon
              icon={faTwitter}
              className='text-white text-2xl mr-2 relative top-1'
            />
            <p className='text-black inline-block'>Log In with Twitter </p>
          </button>
        </a>
      </div>
      <div className='ml-3 relative top-8'>
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
