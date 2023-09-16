/* eslint-disable no-unused-vars */
import React from "react";
import easyGologo from "../../assets/Logo/esayGologo.png";
import LogoBG from "../../assets/Logo/logoBG.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-0 z-40 navbar  sticky top-0   bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* Mobile navbar */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="cursor-pointer"></li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/">
                <p className="max-w-sm mx-auto flex justify-center mr-10">
                  Signin
                </p>
              </Link>
              <Link to="/">
                {" "}
                <p className="btn max-w-sm mx-auto flex justify-center mr-10 border-2 bg-[#3CBD96]  text-white rounded-2xl hover:bg-[#59e7bd]  hover:shadow-lg">
                  Register
                </p>
              </Link>
            </li>
          </ul>

          {/* Mobile navbar ends */}
        </div>

        <Link to="/" className=" md:ml-10 ">
          <img className=" h-30 w-24" src={easyGologo} alt="" />
          <div
            style={{
              height: "102px",
              left: "0",
              position: "absolute",
              top: "33px",
              width: "531px",
            }}
            className="hidden lg:block"
          >
            <p className=" ms-12 text-black mt-16 font-bold text-2xl">
              Easy Go
            </p>
            <img
              className="vector-4"
              style={{
                height: "150px",
                left: "-50px",
                position: "absolute",
                top: "-32px",

                width: "531px",
              }}
              alt="Vector"
              src={LogoBG}
            />
            <div className="group-25" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center items-center gap-5 px-1 cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg text-green-300   font-bold border-green-300"
                : "text-lg font-medium text-gray-300 hover:text-gray-500"
            }
          >
            Home
          </NavLink>

          <li className="cursor-pointer">
            <div className="dropdown">
              <label tabIndex={0} className=" m-1">
                Services
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="cursor-pointer">
            <Link to="/">Blog</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/">Support</Link>
          </li>

          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link to="/">
          <p className="max-w-sm mx-auto flex justify-center mr-10">Signin</p>
        </Link>
        <Link to="/">
          {" "}
          <p
            className="btn max-w-sm mx-auto flex justify-center mr-10  bg-[#3CBD96]  text-white rounded-2xl hover:bg-[#59e7bd]  hover:shadow-lg"
            style={{ boxsShadow: "0px 4px 0px #3cbd9640" }}
          >
            Register
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
