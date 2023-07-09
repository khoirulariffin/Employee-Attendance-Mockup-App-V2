import React from "react";

const Card = (props) => {
  const status = props.status;
  return (
    <div className="flex flex-row shadow pl-4 py-4 border gap-16 items-end rounded-md justify-between">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium">{props.title}</h3>
        <h2 className="text-2xl font-semibold">{props.value}</h2>
        <div
          className={`text-xs font-medium -mt-1 ${
            !status ? "text-green-600" : "text-red-600"
          } flex flex-row gap-1`}
        >
          {props.icon}
          <h4>
            {props.valueChanged}{" "}
            <span className="text-gray-500">vs last month</span>
          </h4>
        </div>
      </div>
      <div>
        <img src={props.graph} alt="graph" />
      </div>
    </div>
  );
};

export default Card;
