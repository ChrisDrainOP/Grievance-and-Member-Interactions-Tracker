import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavSearchBar = (prop) => {
  return (
    <div className='flex justify-center pt-3 '>
      <div className=' text-center absolute inline-block w-1/2 flex justify-center'>
        <FontAwesomeIcon className='absolute top-1 left-1' icon={faSearch} />
        <input type='text' className='text-center w-full' />
      </div>
    </div>
  );
};

export default NavSearchBar;
