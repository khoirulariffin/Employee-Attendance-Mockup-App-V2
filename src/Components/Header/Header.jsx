import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <h1 className="font-bold text-blue-800">COMPANY NAME</h1>
      <div className="flex flex-row gap-2">
        {location.pathname === "/home/attendance" && (
          <div className="border-2 shadow-sm flex justify-center items-center p-2 rounded-md cursor-pointer">
            <FontAwesomeIcon
              icon="fa-regular fa-bell"
              className="text-gray-500"
            />
          </div>
        )}
        <div className="flex flex-row gap-4 items-center border-2 px-2 py-1 shadow-sm rounded-md">
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            className="text-gray-500"
          />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search"
            className="focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
