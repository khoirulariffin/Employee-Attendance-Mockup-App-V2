import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation } from "react-router-dom";

const Greeting = () => {
  const location = useLocation();
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Welcome, Olivia</h1>
        <h3 className="text-sm text-gray-600">You're working at ABC Company</h3>
      </div>
      {location.pathname === "/home/attendance" && (
        <div className="border shadow-sm py-2 px-4 flex flex-row justify-between items-center gap-2 rounded-lg">
          <FontAwesomeIcon
            icon="fa-solid fa-upload"
            className="text-gray-500"
          />
          <h3 className="font-medium">Export</h3>
        </div>
      )}
    </div>
  );
};

export default Greeting;
