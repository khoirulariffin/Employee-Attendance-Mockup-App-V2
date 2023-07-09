import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CompanyOverview from "../../Components/CompanyOverview/CompanyOverview";
import Greeting from "../../Components/Greeting/Greeting";
import Header from "../../Components/Header/Header";
import AttendanceReport from "../../Components/AttendanceReport/AttendanceReport";
import LeaveReport from "../../Components/LeaveReport/LeaveReport";

const Dashboard = () => {
  return (
    <div className="bg-white mt-4 rounded-tl-2xl min-h-screen h-full p-4 flex flex-col gap-4">
      <Header />
      <Greeting />
      <CompanyOverview />
      <AttendanceReport />
      <LeaveReport />
    </div>
  );
};

export default Dashboard;
