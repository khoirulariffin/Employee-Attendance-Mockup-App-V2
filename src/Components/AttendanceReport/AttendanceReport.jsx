import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BarGraph } from "../../Assets";
import { NavLink } from "react-router-dom";

const AttendanceReport = () => {
  const iconUp = <FontAwesomeIcon icon="fa-solid fa-arrow-up" />;

  return (
    <div className="border flex flex-col gap-4 p-4 rounded-lg shadow-md px-4">
      <div className="flex flex-row gap-2 justify-start items-center">
        <FontAwesomeIcon icon="fa-solid fa-check-to-slot" />
        <h1 className="text-gray-700 font-medium">Attendance Report</h1>
      </div>
      <div className="flex flex-row w-full h-full gap-8 justify-between">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-row items-end gap-4 justify-between">
            <div className="h-full flex flex-col justify-end gap-4 pb-2">
              <h2 className="text-2xl font-semibold">2,420</h2>
              <div
                className={`text-xs font-medium -mt-1 text-green-600 flex flex-row gap-1 w-full`}
              >
                {iconUp}
                <h4>
                  440
                  <span className="text-gray-500"> vs yesterday</span>
                </h4>
              </div>
            </div>
            <div>
              <img src={BarGraph} alt="Bar Graph" />
            </div>
          </div>
          <div className="border p-4 shadow rounded-lg flex flex-col gap-2">
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-blue-200 py-1 px-1.5 rounded flex flex-row justify-center items-center">
                    <FontAwesomeIcon
                      icon="fa-solid fa-check"
                      className="text-blue-600"
                    />
                  </div>
                  <h1 className="text-sm font-Nunito font-semibold text-gray-600">
                    Present
                  </h1>
                </div>
                <h1 className="text-2xl font-semibold text-gray-800">2,100</h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-purple-200 py-1 px-1.5 rounded flex flex-row justify-center items-center">
                    <FontAwesomeIcon
                      icon="fa-solid fa-x"
                      className="text-purple-600"
                    />
                  </div>
                  <h1 className="text-sm font-Nunito font-semibold text-gray-600">
                    Late
                  </h1>
                </div>
                <h1 className="text-2xl font-semibold text-gray-800">250</h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-red-200 py-1 px-1.5 rounded flex flex-row justify-center items-center">
                    <FontAwesomeIcon
                      icon="fa-solid fa-ban"
                      className="text-red-600"
                    />
                  </div>
                  <h1 className="text-sm font-Nunito font-semibold text-gray-600">
                    Absent
                  </h1>
                </div>
                <h1 className="text-2xl font-semibold text-gray-800">100</h1>
              </div>
            </div>
            <div className="w-full h-2 rounded-full overflow-hidden bg-red-200 flex flex-row">
              <div className="bg-blue-600 w-2/4 h-full"></div>
              <div className="bg-purple-600 w-1/4 h-full"></div>
              <div className="bg-red-600 w-1/4 h-full"></div>
            </div>
          </div>
        </div>
        <div className="min-h-full w-2 rounded-full bg-gray-200" />
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-row justify-between text-sm text-gray-500 font-semibold">
            <div className="flex flex-col gap-2">
              <h1>All Users Statistics</h1>
              <h2>
                <span className="text-black text-2xl">25,256</span> Users
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <h1>Average Visit Time</h1>
              <h2>
                <span className="text-black text-2xl">2</span> hours{" "}
                <span className="text-black text-2xl">35</span> minutes
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1>Top Visited Area</h1>
            <div className="w-full h-5 rounded-full overflow-hidden flex flex-row">
              <div className="h-full w-[40%] bg-yellow-400" />
              <div className="h-full w-[12%] bg-blue-400" />
              <div className="h-full w-[12%] bg-green-400" />
              <div className="h-full w-[12%] bg-red-400" />
              <div className="h-full w-[12%] bg-purple-400" />
              <div className="h-full w-[12%] bg-gray-400" />
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <div className="h-4 w-4 bg-yellow-400" />
                  <h1>Kebayoran</h1>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="h-4 w-4 bg-blue-400" />
                  <h1>Kelurahan</h1>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="h-4 w-4 bg-green-400" />
                  <h1>Margahayu</h1>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <div className="h-4 w-4 bg-red-400" />
                  <h1>Sawangan</h1>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="h-4 w-4 bg-purple-400" />
                  <h1>Cakung</h1>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="h-4 w-4 bg-gray-400" />
                  <h1>Others</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavLink
        to={"/home/attendance"}
        className={"w-full flex flex-row justify-end mt-2 hover:underline"}
      >
        <h1 className="text-blue-600 text-sm">Go to attendance</h1>
      </NavLink>
    </div>
  );
};

export default AttendanceReport;
