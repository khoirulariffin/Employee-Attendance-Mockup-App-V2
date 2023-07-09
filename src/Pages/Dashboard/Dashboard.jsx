import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CompanyOverview from "../../Components/CompanyOverview/CompanyOverview";
import Greeting from "../../Components/Greeting/Greeting";
import Header from "../../Components/Header/Header";

const Dashboard = () => {
  return (
    <div className="bg-white mt-4 rounded-tl-2xl min-h-screen p-4 flex flex-col gap-4">
      <Header />
      <Greeting />
      <CompanyOverview />
    </div>
  );
};

export default Dashboard;
