import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginImage } from "../../Assets";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="grid grid-cols-12 h-screen bg-white">
      <div className="col-span-4 flex justify-center items-center">
        <div className="flex flex-col w-4/5 gap-4">
          <div className="text-center mb-4">
            <h1 className="font-Poppins font-semibold text-3xl text-[#3B3E43]">
              Sign In
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-Poppins font-semibold opacity-70 text-sm"
            >
              Email
            </label>
            <div className="flex flex-row border shadow rounded-lg overflow-hidden justify-center items-center px-2">
              <FontAwesomeIcon icon="fa-regular fa-envelope" />
              <input
                type="email"
                name="email"
                id="email"
                className="border-none w-full focus:outline-none px-3 py-2"
                placeholder="olivia@untitledui.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="font-Poppins font-semibold opacity-70 text-sm"
            >
              Password
            </label>
            <div className="flex flex-row border shadow rounded-lg overflow-hidden items-center px-2">
              <FontAwesomeIcon icon="fa-key" />
              <div className="flex flex-row justify-between items-center w-full">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border-none w-full focus:outline-none px-3 py-2"
                  placeholder="******"
                />
                <FontAwesomeIcon
                  icon="fa-regular fa-eye-slash"
                  className="opacity-50"
                />
              </div>
            </div>
            <div className="flex flex-row justify-end mt-2">
              <h2 className="font-Poppins text-xs drop-shadow text-[#6E7FB9]">
                Forgot Password?
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-2">
            <button
              type="button"
              className="bg-[#6E7FB9] w-full text-white rounded-lg py-1.5 font-Poppins text-sm active:opacity-80"
            >
              Sign In
            </button>
            <NavLink to={"register"}>
              <h2 className="font-Poppins text-xs font-semibold text-gray-600">
                Don't have an account?{" "}
                <span className="text-[#6E7FB9]">Sign up now</span>
              </h2>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-pink-300 col-span-8">
        <img
          src={LoginImage}
          alt="Login Image"
          className="object-cover w-full h-screen"
        />
      </div>
    </section>
  );
};

export default LoginPage;
