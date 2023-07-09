import React from "react";
import Header from "../../Components/Header/Header";
import Greeting from "../../Components/Greeting/Greeting";
import Card from "../../Components/Card/Card";
import { GraphUp, GraphDown } from "../../Assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../Components/Table/Table";
import TableCaption from "../../Components/TableCaption/TableCaption";

const Attendance = () => {
  const iconUp = <FontAwesomeIcon icon="fa-solid fa-arrow-up" />;
  const iconDown = <FontAwesomeIcon icon="fa-solid fa-arrow-down" />;

  return (
    <div className="bg-white mt-4 rounded-tl-2xl min-h-screen h-full p-4 flex flex-col gap-4">
      <Header />
      <Greeting />
      <div className="flex flex-row gap-4">
        <Card
          title="Present Employees"
          value="2,420"
          valueChanged="450"
          icon={iconUp}
          graph={GraphUp}
          compareValue="yesterday"
        />
        <Card
          title="Late Employees"
          value="1,210"
          valueChanged="200"
          icon={iconDown}
          graph={GraphDown}
          status="down"
          compareValue="yesterday"
        />
        <Card
          title="Employees on Leaves"
          value="316"
          valueChanged="10"
          icon={iconUp}
          graph={GraphUp}
          compareValue="yesterday"
        />
      </div>
      <div className="border flex flex-col gap-4 pt-4 rounded-lg shadow-md">
        <TableCaption />
        <Table />
      </div>
    </div>
  );
};

export default Attendance;
