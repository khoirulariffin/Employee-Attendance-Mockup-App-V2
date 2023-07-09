import React from "react";
import Header from "../../Components/Header/Header";
import Greeting from "../../Components/Greeting/Greeting";

const Attendance = () => {
  return (
    <div className="bg-white mt-4 rounded-tl-2xl min-h-screen p-4 flex flex-col gap-4">
      <Header />
      <Greeting />
    </div>
  );
};

export default Attendance;
