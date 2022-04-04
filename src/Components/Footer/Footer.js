import React from "react";
import { GiConcentrationOrb } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="footer-container text-center bg-stone-700 py-6 text-slate-100 flex items-center justify-center absolute b-0 w-full mx-auto">
      <h2 className="text-2xl flex items-center justify-center">
        All Reservers by
        <span className="text-orange-500 flex mr-2">
          <p className="mr-2 px-3 items-center">
            <GiConcentrationOrb />
          </p>
          SMART TECHNOLOGY
        </span>
      </h2>
    </div>
  );
};

export default Footer;
