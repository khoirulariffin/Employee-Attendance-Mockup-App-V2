import React from "react";
import { ErrorPage } from "../../../Assets";

const ScreenSize = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center flex-col text-center">
      <img
        src={ErrorPage}
        alt="Screen Size Not Compatible"
        className="w-96 aspect-square"
      />
      <h1 className="font-Nunito font-semibold px-4">
        So sorry, minimum screen size required is 1280px.
      </h1>
    </section>
  );
};

export default ScreenSize;
