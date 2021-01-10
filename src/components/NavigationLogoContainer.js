import React from "react";
import apwuLogo from "../assets/apwu-g-logo.png";

const NavLogoContainer = (prop) => {
  return (
    <div className='p-1.5'>
      <div className='flex flex-row space-x-3'>
        <a href='#home'>
          <img src={apwuLogo} alt='apwu logo' className='apwu-logo' />
        </a>
        <p className='font-bold text-blue-900'>
          Grievance and Member Interaction Tracker
        </p>
      </div>
    </div>
  );
};

export default NavLogoContainer;
