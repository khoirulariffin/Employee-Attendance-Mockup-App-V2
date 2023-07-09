import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Table = () => {
  const items = [
    {
      Name: "Tony",
      CheckInTime: "09.00",
      CheckInLocation: "Singapore",
      CheckOutTime: "09.00",
      CheckOutLocation: "Singapore",
      Status: "Early Checkin",
    },
    {
      Name: "Tony",
      CheckInTime: "09.00",
      CheckInLocation: "Singapore",
      CheckOutTime: "09.00",
      CheckOutLocation: "Singapore",
      Status: "On Time",
    },
    {
      Name: "Tony",
      CheckInTime: "09.00",
      CheckInLocation: "Singapore",
      CheckOutTime: "09.00",
      CheckOutLocation: "Singapore",
      Status: "Absent",
    },
    {
      Name: "Tony",
      CheckInTime: "09.00",
      CheckInLocation: "Singapore",
      CheckOutTime: "09.00",
      CheckOutLocation: "Singapore",
      Status: "Late Checkin",
    },
    {
      Name: "Tony",
      CheckInTime: "09.00",
      CheckInLocation: "Singapore",
      CheckOutTime: "09.00",
      CheckOutLocation: "Singapore",
      Status: "Early Checkout",
    },
    {
      Name: "Tony",
      CheckInTime: "09.00",
      CheckInLocation: "View Map",
      CheckOutTime: "09.00",
      CheckOutLocation: "View Map",
      Status: "Late Checkout",
    },
  ];

  const pin = <FontAwesomeIcon icon="fa-solid fa-location-dot" />;

  return (
    <div className="w-full flex flex-col">
      <table className="table-auto min-w-full border-l-0 border-r-0">
        <thead className="border-l-0">
          <tr className="text-left border-l-0">
            <th
              rowSpan="2"
              className="border bg-[rgb(245,250,254)] font-normal text-sm border-l-0"
            >
              <div className="flex flex-row w-full justify-between px-4 border-l-0">
                <h1>Employee Name</h1>
                <div className="flex flex-col">
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-up"
                    className="text-xs"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-down"
                    className="text-xs"
                  />
                </div>
              </div>
            </th>
            <th
              colSpan="2"
              className="border bg-[rgb(245,250,254)] font-normal text-sm px-4 py-2"
            >
              Check-In
            </th>
            <th
              colSpan="2"
              className="border bg-[rgb(245,250,254)] font-normal text-sm px-4"
            >
              Check-Out
            </th>
            <th
              rowSpan="2"
              className="border bg-[rgb(245,250,254)] font-normal text-sm px-4"
            >
              <div className="flex flex-row w-full justify-between px-4">
                <h1>Status</h1>
                <div className="flex flex-col">
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-up"
                    className="text-xs"
                  />
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-down"
                    className="text-xs"
                  />
                </div>
              </div>
            </th>
            <th
              rowSpan="2"
              className="border bg-[rgb(245,250,254)] font-normal text-sm px-4 border-r-0"
            >
              Action
            </th>
          </tr>
          <tr className="text-left">
            <th className="border bg-[rgb(245,250,254)] font-normal text-sm px-4 py-2">
              Time
            </th>
            <th className="border bg-[rgb(245,250,254)] font-normal text-sm px-4">
              Location
            </th>
            <th className="border bg-[rgb(245,250,254)] font-normal text-sm px-4">
              Time
            </th>
            <th className="border bg-[rgb(245,250,254)] font-normal text-sm px-4">
              Location
            </th>
          </tr>
        </thead>
        <tbody className="">
          {items.map((item) => (
            <tr className="text-base font-Nunito ">
              <td className="px-4 py-2">{item.Name}</td>
              <td className="px-4 py-2">{item.CheckInTime}</td>
              <td
                className={`px-4 py-2 flex flex-row gap-3 items-center ${
                  item.CheckInLocation === "View Map" &&
                  "text-blue-500 cursor-pointer"
                }`}
              >
                {item.CheckInLocation === "View Map" && pin}
                {item.CheckInLocation}
              </td>
              <td className="px-4 py-2">{item.CheckOutTime}</td>
              <td
                className={`px-4 py-2 flex flex-row gap-3 items-center ${
                  item.CheckInLocation === "View Map" &&
                  "text-blue-500 cursor-pointer"
                }`}
              >
                {item.CheckInLocation === "View Map" && pin}
                {item.CheckOutLocation}
              </td>
              <td className="px-4 py-2">
                <span
                  className={`py-1 px-3 ${
                    item.Status === "Early Checkin"
                      ? "bg-green-50 text-green-600"
                      : item.Status === "On Time"
                      ? "bg-blue-50 text-blue-600"
                      : item.Status === "Absent"
                      ? "bg-red-50 text-red-600"
                      : item.Status === "Late Checkin"
                      ? "bg-purple-50 text-purple-600"
                      : "bg-orange-50 text-orange-600"
                  } rounded-full text-xs font-bold`}
                >
                  {item.Status}
                </span>
              </td>
              <td className="px-4 py-1 flex flex-row justify-between items-center cursor-pointer">
                <h1 className="text-blue-500 drop-shadow-sm">Details</h1>
                <div className="bg-gray-50 rounded-full px-1">
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-down"
                    className="text-gray-700"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row w-full justify-between py-2 px-4">
        <div className="w-4/5 flex flex-row gap-4">
          <div className="py-1 px-2 border rounded-lg">
            <h1 className="text-sm font-Nunito font-semibold text-gray-800">
              Previous
            </h1>
          </div>
          <div className="py-1 px-2 border rounded-lg">
            <h1 className="text-sm font-Nunito font-semibold text-gray-800">
              Next
            </h1>
          </div>
        </div>
        <div className="w-1/5 flex flex-row items-center justify-end">
          <h1 className="text-sm font-semibold font-Nunito">Page 1 of 10</h1>
        </div>
      </div>
    </div>
  );
};

export default Table;
