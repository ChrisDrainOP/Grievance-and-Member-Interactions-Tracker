import React from "react";

const GrievanceProcedureList = (prop) => {
  return (
    <div className='mx-1 pb-2'>
      <ol className='flex flex-col space-y-2 w-3/4 m-auto'>
        <li className='flex justify-between w-3/4'>
          <p className='inline-block'>Meetings Inbox</p>{" "}
          <span className='bg-blue-100 px-0.5'>0</span>
        </li>
        <li className='flex justify-between w-3/4'>
          <p className='inline-block'>Events and Interactions</p>{" "}
          <span className='bg-blue-100 px-0.5'>0</span>
        </li>
        <li className='flex justify-between w-3/4'>
          <p className='inline-block'>Step 1</p>{" "}
          <span className='bg-blue-100 px-0.5'>0</span>
        </li>
        <li className='flex justify-between w-3/4'>
          <p className='inline-block'>Step 2</p>{" "}
          <span className='bg-blue-100 px-0.5'>0</span>
        </li>
        <li className='flex justify-between w-3/4'>
          <p className='inline-block'>Step 2 to Arbitration</p>{" "}
          <span className='bg-blue-100 px-0.5'>0</span>
        </li>
        <li className='flex justify-between w-3/4'>
          <p className='inline-block'>Step 3 Appeal</p>{" "}
          <span className='bg-blue-100 px-0.5'>0</span>
        </li>
      </ol>
    </div>
  );
};

export default GrievanceProcedureList;
