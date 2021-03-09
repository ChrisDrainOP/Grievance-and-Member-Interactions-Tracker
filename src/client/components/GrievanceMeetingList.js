import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const GrievanceMeetingList = (props) => {
  const meetings = props.meetings

  let totalMeetings = meetings.length;

  let incidentsAndInteractions = meetings.reduce((acc, cur) => {
  if(cur.meetingType === "Member Interaction" || cur.meetingType === "Incident") {
    acc.push(cur)
  }
  return acc
  }, [])

  let stepOnes = meetings.reduce((acc, cur) => {
  if(cur.meetingType === "Step 1" ) {
    acc.push(cur)
  }
  return acc
  }, [])

  let stepTwos = meetings.reduce((acc, cur) => {
  if(cur.meetingType === "Step 2" ) {
    acc.push(cur)
  }
  return acc
  }, [])

  let stepTwoToArbitrations = meetings.reduce((acc, cur) => {
  if (cur.meetingType === "Step 2 to Arbitration") {
    acc.push(cur);
  }
  return acc
  }, [])

  let stepThreeAppeal = meetings.reduce((acc, cur) => {
  if (cur.meetingType === "Step 3 Appeal") {
    acc.push(cur);
  }
  return acc
  }, [])

  let miscellaneous = meetings.reduce((acc, cur) => {
  if (cur.meetingType === "Miscellaneous") {
    acc.push(cur);
  }
  return acc
  }, [])


  console.log(stepOnes);

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
            <span className='task-number-icon-blue '>{totalMeetings}</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Incidents and Interactions</p>{" "}
            <span className='task-number-icon-blue'>{incidentsAndInteractions.length}</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Step 1</p>{" "}
            <span className='task-number-icon-blue'>{stepOnes.length}</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Step 2</p>{" "}
            <span className='task-number-icon-blue'>{stepTwos.length}</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Step 2 to Arbitration</p>{" "}
            <span className='task-number-icon-blue'>{stepTwoToArbitrations.length}</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Step 3 Appeal</p>{" "}
            <span className='task-number-icon-blue'>{stepThreeAppeal.length}</span>
          </li>
        </a>
        <a href=''>
          <li className='justify-procedure-list'>
            <p className='inline-block'>Miscellaneous</p>{" "}
            <span className='task-number-icon-blue'>{miscellaneous.length}</span>
          </li>
        </a>
      </ol>
    </div>
  );
};

export default GrievanceMeetingList;
