import React from "react";
import { LittleSidebarLogo, Profile } from "../../Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "react-router-dom";

const SmallSidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-6 mt-4 ml-4 min-h-full w-10 overflow-hidden justify-between">
      <div>
        <div className="mt-3 pl-1">
          <img src={LittleSidebarLogo} alt="Logo" className="w-10" />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <NavLink
            to={"/home"}
            className={`flex flex-row justify-start items-center gap-4 ${
              location.pathname === "/home" && "bg-[rgb(52,64,84)]"
            } py-3 px-2 rounded-md cursor-pointer`}
          >
            <FontAwesomeIcon icon="fa-solid fa-house" className="text-white" />
            <h1 className="text-white text-sm mt-1">Home</h1>
          </NavLink>
          <NavLink
            to={"attendance"}
            className={`flex flex-row justify-start items-center gap-4 ${
              location.pathname === "/home/attendance" && "bg-[rgb(52,64,84)]"
            } py-3 px-2 rounded-md cursor-pointer`}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-check-to-slot"
              className="text-white"
            />
            <h1 className="text-white text-sm">Attendance</h1>
          </NavLink>
          <div
            className={`flex flex-row justify-start items-center gap-4 ${
              location.pathname === "/leave/" && "bg-[rgb(52,64,84)]"
            } py-3 px-2 rounded-md cursor-pointer ml-0.5`}
          >
            <FontAwesomeIcon
              icon="fa-regular fa-calendar"
              className="text-white mr-1"
            />
            <h1 className="text-white text-sm">Leave</h1>
          </div>
          <div
            className={`flex flex-row justify-start items-center gap-4 ${
              location.pathname === "/employees/" && "bg-[rgb(52,64,84)]"
            } py-3 px-2 rounded-md cursor-pointer`}
          >
            <FontAwesomeIcon icon="fa-solid fa-users" className="text-white" />
            <h1 className="text-white text-sm">Employees</h1>
          </div>
          <div
            className={`flex flex-row justify-start items-center gap-4 ${
              location.pathname === "/payroll/" && "bg-[rgb(52,64,84)]"
            } py-3 px-2 rounded-md cursor-pointer`}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-money-bill"
              className="text-white"
            />
            <h1 className="text-white text-sm">Payroll</h1>
          </div>
          <NavLink
            to={"/home/schedule"}
            className={`flex flex-row justify-start items-center gap-4 ${
              location.pathname === "/home/schedule" && "bg-[rgb(52,64,84)]"
            } py-3 px-2 rounded-md cursor-pointer`}
          >
            <FontAwesomeIcon
              icon="fa-regular fa-clock"
              className="text-white"
            />
            <h1 className="text-white text-sm">Schedule</h1>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-end mb-4">
        <div
          className={`flex flex-row justify-start items-center gap-4 ${
            location.pathname === "/settings/" && "bg-[rgb(52,64,84)]"
          } py-3 px-2 rounded-md cursor-pointer`}
        >
          <FontAwesomeIcon icon="fa-solid fa-gear" className="text-white" />
          <h1 className="text-white text-sm">Settings</h1>
        </div>
        <hr className="opacity-50" />
        <div
          className={`flex flex-row justify-between items-center ${
            location.pathname === "/home/" && "bg-[rgb(52,64,84)]"
          } py-3 px-2 rounded-md cursor-pointer gap-2`}
        >
          <div className="h-[30px] w-[30px] overflow-hidden rounded-full">
            <img
              src={Profile}
              alt="Profile"
              className="aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar;
