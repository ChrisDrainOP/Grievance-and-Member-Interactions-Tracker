import React from "react";

const GrievanceChronologicalList = (prop) => {
  return (
    <div className='mx-1 pb-2'>
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
  );
};

export default GrievanceChronologicalList;
