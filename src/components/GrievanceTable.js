import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const GrievanceTable = (prop) => {
  return (
    <div>
      <div>
        <FontAwesomeIcon className='' icon={faArrowLeft} />
        <h3 className='inline-block'>View All</h3>
      </div>
      <div className='class'>
        <table>
          <tr>
            <th className=''>Date</th>
            <th className=''>Description</th>
            <th className=''>Meeting Type</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default GrievanceTable;
