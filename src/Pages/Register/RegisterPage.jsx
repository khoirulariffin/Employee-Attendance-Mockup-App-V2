import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginImage } from "../../Assets";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyLocation } from "../../store/actions/companyLocation";
import { fetchBusiness } from "../../store/actions/businessAction";

const RegisterPage = () => {
  const { companyLocation } = useSelector((state) => state.companyLocation);
  const { business } = useSelector((state) => state.business);
  const dispatch = useDispatch();
  const companyLocations = companyLocation.data;
  const businesses = business.data;

  useEffect(() => {
    dispatch(fetchCompanyLocation());
    dispatch(fetchBusiness());
  }, []);

  //   useEffect(() => {
  //     console.log(businesses);
  //   }, [business]);

  return (
    <section className="grid grid-cols-12 min-h-screen">
      <div className="col-span-4 flex justify-center items-center">
        <div className="flex flex-col w-4/5 gap-4">
          <div className="text-center mb-4">
            <h1 className="font-Poppins font-semibold text-3xl text-[#3B3E43]">
              Sign Up
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
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="passwordConfirmation"
              className="font-Poppins font-semibold opacity-70 text-sm"
            >
              Password Confirmation
            </label>
            <div className="flex flex-row border shadow rounded-lg overflow-hidden items-center px-2">
              <FontAwesomeIcon icon="fa-key" />
              <div className="flex flex-row justify-between items-center w-full">
                <input
                  type="password"
                  name="password"
                  id="passwordConfirmation"
                  className="border-none w-full focus:outline-none px-3 py-2"
                  placeholder="******"
                />
                <FontAwesomeIcon
                  icon="fa-regular fa-eye-slash"
                  className="opacity-50"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="companyName"
              className="font-Poppins font-semibold opacity-70 text-sm"
            >
              Company Name
            </label>
            <div className="flex flex-row border shadow rounded-lg overflow-hidden justify-center items-center px-2">
              <FontAwesomeIcon icon="fa-regular fa-building" />
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="border-none w-full focus:outline-none px-3 py-2"
                placeholder="Sinarmas Land"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="companyLocation"
              className="font-Poppins font-semibold opacity-70 text-sm"
            >
              Company Location
            </label>
            <div className="flex flex-row border shadow rounded-lg overflow-hidden justify-between items-center px-2">
              <FontAwesomeIcon icon="fas fa-map-marked-alt" />
              <select
                name="companyLocation"
                id="companyLocation"
                className="w-full px-2 py-2"
              >
                {companyLocations?.map((location) => {
                  return (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="business"
              className="font-Poppins font-semibold opacity-70 text-sm"
            >
              Business
            </label>
            <div className="flex flex-row border shadow rounded-lg overflow-hidden justify-between items-center px-2">
              <FontAwesomeIcon icon="fas fa-briefcase" />
              <select
                name="business"
                id="business"
                className="w-full px-2 py-2"
              >
                {businesses?.map((business) => {
                  return (
                    <option key={business.id} value={business.id}>
                      {business.business_name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="numberOfEmployees"
              className="font-Poppins font-semibold opacity-70 text-sm"
            >
              Number of Employees
            </label>
            <div className="flex flex-row border shadow rounded-lg overflow-hidden justify-center items-center px-2">
              <FontAwesomeIcon icon="fas fa-user-friends" />
              <input
                type="number"
                name="numberOfEmployees"
                id="numberOfEmployees"
                className="border-none w-full focus:outline-none px-3 py-2"
                placeholder="20"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-2">
            <NavLink
              to={"/"}
              className={
                "bg-[#6E7FB9] w-full text-white text-center rounded-lg py-1.5 font-Poppins text-sm active:opacity-80"
              }
            >
              Sign Up
            </NavLink>
            <NavLink to={"/"}>
              <h2 className="font-Poppins text-xs font-semibold text-gray-600">
                Already have an account?{" "}
                <span className="text-[#6E7FB9]">Sign in now</span>
              </h2>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-pink-300 col-span-8 h-full">
        <img
          src={LoginImage}
          alt="Login Image"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default RegisterPage;
