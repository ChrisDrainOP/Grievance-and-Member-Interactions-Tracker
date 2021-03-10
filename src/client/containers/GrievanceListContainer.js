import React, { useState, useEffect } from "react";
import NavLogoContainer from "../components/NavigationLogoContainer";
import NavigationIcons from "../components/NavigationIcons.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


const GrievanceListContainer = (props) => {
  
  return (
    <div className='main-gradient h-screen'>
      <NavLogoContainer />
      <div className='w-full text-center my-3'>
        <h3 className='relative text-blue-900 font-bold'>
          Welcome {props.displayName}
          {props.image ? (
            <img
              className='h-7 w-7 rounded-full absolute right-10 -top-1'
              src={props.image}
              alt='User profile from google'
            />
          ) : null}
        </h3>
      </div>
      <NavigationIcons />
      <div className='mx-1 pb-2 mt-5'>
        <ol className='flex flex-col space-y-2 w-3/4 m-auto'>
          <li className='justify-procedure-list'>
            <div className='relative'>
              <FontAwesomeIcon
                className='absolute -left-3 top-1'
                icon={faAngleRight}
              />
              <a onClick={props.handleMeetingListClick}>
                <p className='inline-block' id='total'>
                  Inbox Total
                </p>
              </a>
            </div>
            <span className='task-number-icon-blue'>
              {props.meetings.length}
            </span>
          </li>
          <li className='justify-procedure-list'>
            <a onClick={props.handleMeetingListClick}>
              <p className='inline-block' id='incidentsAndInteractions'>
                Incidents and Interactions
              </p>
            </a>
            <span className='task-number-icon-blue'>
              {props.incidentsAndInteractions.length}
            </span>
          </li>
          <li className='justify-procedure-list' id='stepOnes'>
            <a onClick={props.handleMeetingListClick}>
              <p className='inline-block' id='stepOnes'>
                Step 1
              </p>
            </a>
            <span className='task-number-icon-blue'>
              {props.stepOnes.length}
            </span>
          </li>
          <li className='justify-procedure-list'>
            <a onClick={props.handleMeetingListClick}>
              <p className='inline-block' id='stepTwos'>
                Step 2
              </p>
            </a>
            <span className='task-number-icon-blue'>
              {props.stepTwos.length}
            </span>
          </li>
          <li className='justify-procedure-list'>
            <a onClick={props.handleMeetingListClick}>
              <p className='inline-block' id='stepTwoToArbitration'>
                Step 2 to Arbitration
              </p>
            </a>
            <span className='task-number-icon-blue'>
              {props.stepTwoToArbitrations.length}
            </span>
          </li>
          <li className='justify-procedure-list'>
            <a onClick={props.handleMeetingListClick}>
              <p className='inline-block' id='stepThreeAppeal'>
                Step 3 Appeal
              </p>
            </a>
            <span className='task-number-icon-blue'>
              {props.stepThreeAppeal.length}
            </span>
          </li>
          <li className='justify-procedure-list'>
            <a onClick={props.handleMeetingListClick}>
              <p className='inline-block' id='miscellaneous'>
                Miscellaneous
              </p>
            </a>
            <span className='task-number-icon-blue'>
              {props.miscellaneous.length}
            </span>
          </li>
        </ol>
        <div className='mt-3 mx-1 pb-2'>
          <ol className='w-3/4 m-auto'>
            <div>
              <input type='checkbox' name='today' className='' />
              <li className='inline-block ml-2'>Today</li>
            </div>
            <div>
              <input type='checkbox' name='next week' className='' />
              <li className='inline-block ml-2'>Next 5 days</li>
            </div>
            <div>
              <input type='checkbox' name='next week' className='' />
              <li className='inline-block ml-2'>Next 14 days</li>
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GrievanceListContainer;
