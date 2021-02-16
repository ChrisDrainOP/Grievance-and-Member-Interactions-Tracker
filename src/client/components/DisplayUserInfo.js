import React from "react";

const DisplayUserInfo = (props) => (
  <div className='w-full text-center'>
    <h3 className='relative text-blue-900 font-bold'>
      Welcome, {props.displayName}
      <img
        className='h-7 w-7 rounded-full absolute right-10 -top-1'
        src={props.image}
        alt='User Image'
      />
    </h3>
  </div>
);

export default DisplayUserInfo;
