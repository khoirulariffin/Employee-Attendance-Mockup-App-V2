import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BarGraph } from "../../Assets";
import { NavLink } from "react-router-dom";
import TableCaption from "../TableCaption/TableCaption";

const LeaveReport = () => {
  const iconUp = <FontAwesomeIcon icon="fa-solid fa-arrow-up" />;
  const employees = [
    {
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      name: "Olivia Rhye",
      category: "Medical Leave",
      total: "20 days",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      name: "Tony",
      category: "Medical Leave",
      total: "20 days",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      name: "Jony",
      category: "Medical Leave",
      total: "20 days",
    },
    {
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      name: "Budi",
      category: "Medical Leave",
      total: "20 days",
    },
  ];

  return (
    <div className="border flex flex-col gap-4 p-4 rounded-lg shadow-md px-4">
      <div className="flex flex-row gap-2 justify-start items-center">
        <FontAwesomeIcon icon="fa-regular fa-calendar" />
        <h1 className="text-gray-700 font-medium">Leave Report</h1>
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
            <div className="flex flex-col w-full gap-4">
              <h1 className="text-gray-600 font-semibold font-Nunito">
                Top leave type taken
              </h1>
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-blue-200 py-1 px-1.5 rounded flex flex-row justify-center items-center">
                      <FontAwesomeIcon
                        icon="fa-regular fa-calendar"
                        className="text-blue-600"
                      />
                    </div>
                    <h1 className="text-sm font-Nunito font-semibold text-gray-600">
                      Annual
                    </h1>
                  </div>
                  <h1 className="text-2xl font-semibold text-gray-800">
                    2,100
                  </h1>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-purple-200 py-1 px-1.5 rounded flex flex-row justify-center items-center">
                      <FontAwesomeIcon
                        icon="fa-regular fa-face-frown"
                        className="text-purple-600 h"
                      />
                    </div>
                    <h1 className="text-sm font-Nunito font-semibold text-gray-600">
                      Medical
                    </h1>
                  </div>
                  <h1 className="text-2xl font-semibold text-gray-800">250</h1>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-orange-200 py-1 px-1.5 rounded flex flex-row justify-center items-center">
                      <FontAwesomeIcon
                        icon="fa-solid fa-grip"
                        className="text-orange-600"
                      />
                    </div>
                    <h1 className="text-sm font-Nunito font-semibold text-gray-600">
                      Absent
                    </h1>
                  </div>
                  <h1 className="text-2xl font-semibold text-gray-800">100</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-2 rounded-full overflow-hidden bg-red-200 flex flex-row">
              <div className="bg-blue-600 w-2/4 h-full"></div>
              <div className="bg-purple-600 w-1/4 h-full"></div>
              <div className="bg-orange-600 w-1/4 h-full"></div>
            </div>
          </div>
        </div>
        <div className="min-h-full w-2 rounded-full bg-gray-200" />
        <div className="flex flex-col gap-8 w-full items-center">
          <TableCaption />
          <table className="w-full">
            <thead className="bg-blue-50">
              <tr className="text-sm font-normal text-left">
                <th className="py-2 font-Nunito font-bold text-gray-600">
                  Employee Name
                </th>
                <th className="py-2 font-Nunito font-bold text-gray-600">
                  Type of Leave
                </th>
                <th className="py-2 font-Nunito font-bold text-gray-600">
                  Total Days
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll text-sm">
              {employees.map((e) => (
                <tr>
                  <td className="py-2">
                    <div className="flex flex-row items-center gap-2">
                      <div className="rounded-full overflow-hidden h-10 w-10">
                        <img
                          src={e.photo}
                          alt="photo"
                          className="object-cover aspect-square"
                        />
                      </div>
                      <h1>{e.name}</h1>
                    </div>
                  </td>
                  <td className="py-2">
                    <div className="flex flex-row items-center gap-2">
                      <div className="h-2 w-2 bg-purple-600" />
                      <h1>{e.category}</h1>
                    </div>
                  </td>
                  <td>{e.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <NavLink
        to={"/home/attendance"}
        className={"w-full flex flex-row justify-end mt-2 hover:underline"}
      >
        <h1 className="text-blue-600 text-sm">Go to leave</h1>
      </NavLink>
    </div>
  );
};

export default LeaveReport;
