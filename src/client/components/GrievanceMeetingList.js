import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const GrievanceMeetingList = (prop) => {
  return (
    <div className='mx-1 pb-2'>
      <h3>{}</h3>
      <ol className='flex flex-col space-y-2 w-3/4 m-auto'>
        <a href=''>
          <li className='justify-procedure-list'>
            <div className='relative'>
              <FontAwesomeIcon
                className='absolute -left-3 top-1'
                icon={faAngleRight}
              />
              <p className='inline-block'>Inbox Total</p>{" "}
            </div>
            <span className='task-number-icon-blue '>0</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Incidents and Interactions</p>{" "}
            <span className='task-number-icon-blue'>0</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Step 1</p>{" "}
            <span className='task-number-icon-blue'>0</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Step 2</p>{" "}
            <span className='task-number-icon-blue'>0</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Step 2 to Arbitration</p>{" "}
            <span className='task-number-icon-blue'>0</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Step 3 Appeal</p>{" "}
            <span className='task-number-icon-blue'>0</span>
          </li>
        </a>
      </ol>
    </div>
  );
};

export default GrievanceMeetingList;
