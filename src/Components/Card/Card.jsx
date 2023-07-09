import React from "react";

const Card = (props) => {
  const status = props.status;
  return (
    <div className="flex flex-row shadow pl-4 py-4 border gap-16 items-end rounded-md justify-between w-full">
      <div className="flex flex-col gap-4 h-full justify-between w-full">
        <h3 className="text-sm font-medium">{props.title}</h3>
        <div className="flex flex-row justify-between w-full h-full">
          <div className="h-full flex flex-col justify-around">
            <h2 className="text-2xl font-semibold">{props.value}</h2>
            <div
              className={`text-xs font-medium -mt-1 ${
                !status ? "text-green-600" : "text-red-600"
              } flex flex-row gap-1 w-full`}
            >
              {props.icon}
              <h4>
                {props.valueChanged}{" "}
                <span className="text-gray-500">vs {props.compareValue}</span>
              </h4>
            </div>
          </div>
          <div className="w-2/5 bg-slate-400">
            <img src={props.graph} alt="graph" className="w-full h-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
