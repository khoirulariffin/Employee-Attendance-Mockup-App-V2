import React from "react";
import { GraphUp, GraphDown, GraphGender, GraphStatus } from "../../Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../Card/Card";

const CompanyOverview = () => {
  const iconUp = <FontAwesomeIcon icon="fa-solid fa-arrow-up" />;
  const iconDown = <FontAwesomeIcon icon="fa-solid fa-arrow-down" />;
  return (
    <div className="shadow-md rounded py-6 px-4 text-xl mt-4 border">
      <h2 className="text-gray-600 font-medium">Company Overview</h2>
      <div className="flex flex-row mt-4 gap-4">
        <div className="flex flex-col gap-4 w-3/5 justify-between">
          <Card
            title="Total Employees"
            value="2,420"
            valueChanged="425"
            icon={iconUp}
            graph={GraphUp}
          />
          <Card
            title="Total Departement"
            value="100"
            valueChanged="52"
            icon={iconDown}
            graph={GraphDown}
            status="down"
          />
        </div>
        <div className="flex flex-col border shadow w-3/5 p-4 rounded-md gap-4">
          <h3 className="text-sm font-medium">Diversity</h3>
          <div className="flex flex-row w-full justify-around">
            <div className="shadow-lg flex flex-col justify-center items-center px-6 py-4 gap-1 rounded-md">
              <h2 className="text-sm font-medium">Gender</h2>
              <img src={GraphGender} alt="Gender" />
            </div>
            <div className="shadow-lg flex flex-col justify-center items-center px-6 py-4 gap-1 rounded-md">
              <h2 className="text-sm font-medium">Status</h2>
              <img src={GraphStatus} alt="Status" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
