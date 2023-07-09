import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const TableCaption = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const filter = (
    <div className="border shadow rounded-lg py-2 px-4 flex flex-row justify-center items-center gap-4 cursor-pointer">
      <FontAwesomeIcon icon="fa-solid fa-filter" className="text-gray-500" />
      <h2>More Filters</h2>
    </div>
  );
  const location = useLocation();

  return (
    <div className="flex flex-row justify-between mx-4">
      <div>&nbsp;</div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <div className="bg-gray-200 rounded-full py-1 px-2 flex justify-center items-center cursor-pointer">
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-left"
            className="text-gray-700"
          />
        </div>
        <h1 className="text-base font-semibold">
          {currentDate.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h1>
        <div className="bg-gray-200 rounded-full py-1 px-2 flex justify-center items-center cursor-pointer">
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-right"
            className="text-gray-700"
          />
        </div>
      </div>
      {location.pathname !== "/home" && filter}
    </div>
  );
};

export default TableCaption;
