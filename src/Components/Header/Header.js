import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div classNameName="header-container">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-bold text-3xl tracking-tight">
            SMART TECHNOLOGY
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-48">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/home"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-2xl"
            >
              HOME
            </Link>
            <Link
              to="/reviews"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-2xl"
            >
              REVIEWS
            </Link>
            <Link
              to="/dashboard"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-2xl"
            >
              DASHBOARD
            </Link>
            <Link
              to="/blog"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-2xl"
            >
              BLOG
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-2xl"
            >
              ABOUT
            </Link>
          </div>
          <div>
            <Link
              to="/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 radius-50 text-2Xl"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
