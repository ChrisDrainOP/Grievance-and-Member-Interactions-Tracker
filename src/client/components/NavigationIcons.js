import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendar,
  faBell,
  faCogs,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import NavSearchBar from "./NavigationSearchBar";

const NavigationIcons = (prop) => {
  return (
    <div className='mt-2'>
      <ol className='flex flex-row space-x-1 justify-evenly'>
        <a href='http://'>
          <li className='border-solid border-r-2 border-b-2 border-black pr-1 m-auto'>
            <FontAwesomeIcon
              className='text-blue-900 relative left-1/2 transform -translate-x-1/2'
              icon={faSearch}
            />
            <p className=''>Search</p>
          </li>
        </a>
        <a href='http://'>
          <li className='border-solid border-r-2 border-b-2 border-black pr-1 m-auto'>
            <FontAwesomeIcon
              className='text-blue-900 relative left-1/2 transform -translate-x-1/2'
              icon={faCalendar}
            />
            <p className=''>Calendar</p>
          </li>
        </a>
        <a href='http://'>
          <li className='border-solid border-r-2 border-b-2 border-black pr-1 m-auto'>
            <FontAwesomeIcon
              className='text-blue-900 relative left-1/2 transform -translate-x-1/2'
              icon={faBell}
            />
            <p className=''>Alerts</p>
          </li>
        </a>
        <a href='http://'>
          <li className='border-solid border-r-2 border-b-2 border-black pr-1 m-auto'>
            <FontAwesomeIcon
              className='text-blue-900 relative left-1/2 transform -translate-x-1/2'
              icon={faCogs}
            />
            <p className=''>Settings</p>
          </li>
        </a>
        <a href={`${process.env.REACT_APP_API_URL}/auth/logout`}>
          <li className='border-solid border-b-2 border-r-2 border-black pr-1 m-auto'>
            <FontAwesomeIcon
              className='text-blue-900 relative left-1/2 transform -translate-x-1/2'
              icon={faPowerOff}
            />
            <p className=''>Log off</p>
          </li>
        </a>
      </ol>
      <NavSearchBar />
    </div>
  );
};

export default NavigationIcons;
