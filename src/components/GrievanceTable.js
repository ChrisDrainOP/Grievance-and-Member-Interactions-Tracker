import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const GrievanceTable = (prop) => {
  return (
    <div className='h-screen'>
      <div className='flex flex-row relative w-full pt-3 pl-3'>
        <a href='http://'>
          <FontAwesomeIcon className='' size='lg' icon={faArrowLeft} />
        </a>
        <div className='absolute right-1/4 text-center'>
          <a href='http://'>
            <FontAwesomeIcon className='' size='lg' icon={faPlus} />
            <p>Add New</p>
          </a>
        </div>
      </div>
      <div className='text-xl ml-5 my-5'>
        <h3 className='inline-block'>View All</h3>
      </div>

      <div>
        <table className='table-auto border-collapse w-full mx-1'>
          <tr className='border-2'>
            <th className='w-1/5'>Date</th>
            <th className='w-2/5'>Description</th>
            <th className='w-2/5'>Meeting Type</th>
          </tr>
          <tr className='border-2'>
            <td>01-05-1988</td>
            <td>Denial of Light Duty</td>
            <td className='text-center'>Step 1</td>
          </tr>
          <tr className='border-2' className='border-2'>
            <td>01-05-1988</td>
            <td>Denial of Light Duty</td>
            <td className='text-center'>Step 1</td>
          </tr>
          <tr className='border-2'>
            <td>01-05-1988</td>
            <td>Denial of Light Duty</td>
            <td className='text-center'>Step 1</td>
          </tr>
          <tr className='border-2'>
            <td>01-05-1988</td>
            <td>Denial of Light Duty</td>
            <td className='text-center'>Step 1</td>
          </tr>
          <tr className='border-2'>
            <td>01-05-1988</td>
            <td>Denial of Light Duty</td>
            <td className='text-center'>Step 1</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default GrievanceTable;
