import { Close } from "@mui/icons-material";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export const Menuitem = ({ showMenu, active }) => {
  return (
    <div
      className={`${ 
        active ? "hidden" : "absolute top-17 w-1/2 right-0 bg-grey-800 backdrop-blur() "
      }`}
    >
      <ul className="flex md:hidden flex-col gap-3 p-2">
        <li>
          <Link className="flex w-full hover:bg-black hover:text-white p-1 rounded-md " to="/">Home</Link>
        </li>

        <li>
          <Link className="flex w-full hover:bg-black hover:text-white p-1 rounded-md " to="/">Testimonial</Link>
        </li>
        <li>
          <Link className="flex w-full hover:bg-black hover:text-white p-1 rounded-md " to="/">Infor</Link>
        </li>
        <li>
          <Link className="flex w-full hover:bg-black hover:text-white p-1 rounded-md " to="/">Jobs</Link>
        </li>
        <li>
          <Link className="flex w-full hover:bg-black hover:text-white p-1 rounded-md " to="/">About</Link>
        </li>
        <li>
          <Link className="flex w-full hover:bg-black hover:text-white p-1 rounded-md " to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default Menuitem;
