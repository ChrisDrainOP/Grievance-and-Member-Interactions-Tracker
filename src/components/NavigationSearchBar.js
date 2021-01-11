import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavSearchBar = (prop) => {
  return (
    <div className='pb-8 text-center'>
      <div className='relative inline-block'>
        <input
          type='text'
          className='absolute left-1/2 transform -translate-x-1/2 text-center'
        />
        <FontAwesomeIcon
          className='absolute top-1 right-16 transform -translate-x-5'
          icon={faSearch}
        />
      </div>
    </div>
  );
};

export default NavSearchBar;
