import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faStopwatch,
  faShare,
  faUnlockAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SignUpOverlay from "../components/SignUpOverlay";

const LogOnForm = (props) => {
  
  const [isSignUpClicked, setSignUpClicked] = useState(false);
  const [isCloseOverlayClicked, setCloseOverlay] = useState(false);

  const handleSignUpClick = () => {
    setSignUpClicked(!isSignUpClicked);
  };

  const handleCloseOverlay = () => {
    setCloseOverlay(!isCloseOverlayClicked);
    setSignUpClicked(!isSignUpClicked);
  };


  return (
    <div className='main-gradient h-screen '>
      <div className='ml-7'>
        <form className='' action=''>
          <div className='py-5'>
            <label className='block' htmlFor='email'></label>
            <span className='text-blue-200'>
              <FontAwesomeIcon icon={faUser} className='relative right-2 ' />
            </span>
            <input
              className='bg-transparent font-bold placeholder-white border-solid border-b-2 border-white placeholder-opacity-40'
              type='text'
              name='email'
              placeholder='Email'
              autoComplete='off'
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
              autoComplete='off'
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
                onClick={handleSignUpClick}
                type='button'
                className='text-white font-bold border border-solid rounded-md border-white px-2 py-1 border-opacity-30'
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      {isSignUpClicked ? (
        <SignUpOverlay onCloseOverlayClick={handleCloseOverlay} />
      ) : null}
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
        {/* <a href='' className=''>
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
        </a> */}
      </div>
      <div className='ml-3 relative top-5'>
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
