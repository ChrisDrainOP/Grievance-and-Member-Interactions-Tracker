import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SignUpOverlay = (props) => {
  return (
    <div className='bg-black bg-opacity-75 absolute z-10 h-screen w-full top-0 left-0'>
      <FontAwesomeIcon
        className='text-2xl text-white absolute right-7 top-3'
        icon={faTimes}
        onClick={props.onCloseOverlayClick}
      />
      <form
        className='w-3/4  m-auto relative top-1/2 transform -translate-y-2/4'
        action={`${process.env.REACT_APP_API_URL}/users/register`}
        method='post'
      >
        <h3 className='text-white text-2xl pb-5'>Create your Account</h3>
        <div className='mb-9'>
          <label className='block text-white font-bold' htmlFor='email'>
            Name(First and Last):
          </label>
          <input
            className='text-black font-medium '
            type='text'
            name='full-name'
            id='full-name'
          />
        </div>
        <div className='my-3'>
          <label className='block text-white font-bold' htmlFor='email'>
            Email:
          </label>
          <input
            className='text-black font-medium '
            type='email'
            name='email'
            id='email'
          />
        </div>
        <div className='mb-9'>
          <label className='block text-white font-bold' htmlFor='email2'>
            Confirm Email:
          </label>
          <input
            className='text-black font-medium '
            type='email'
            name='email2'
            id='email2'
          />
        </div>
        <div className='mb-3'>
          <label className='block text-white font-bold' htmlFor='password'>
            Password:
          </label>
          <input
            className='text-black font-medium '
            type='password'
            name='password'
            id='password-sign-up'
          />
        </div>
        <div className=''>
          <label className='block text-white font-bold' htmlFor='password2'>
            Confirm Password:
          </label>
          <input
            className='text-black font-medium '
            type='password'
            name='password2'
            id='password2'
          />
        </div>
        <div>
          <button
            type='submit'
            className='border border-solid rounded-md border-black  px-2 py-1 border-opacity-30 my-4 bg-indigo-500 text-white font-bold'
          >
            Submit!
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpOverlay;
