import React from "react";
import apwuLogo from "../assets/apwu-g-logo.png";

const NavLogoContainer = (prop) => {
  return (
    <div className='main-gradient flex p-1.5'>
      <div className='flex flex-row space-x-9'>
        <img
          src={apwuLogo}
          alt='apwu logo'
          className='object-scale-down w-2/5'
        />
        <p className='font-medium text-blue-900 w-3/5'>
          Grievance and Member Interaction EGS Companion App
        </p>
      </div>
    </div>
  );
};

export default NavLogoContainer;
