import { Close } from "@mui/icons-material";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export const Menuitem = ({showMenu,active}) => {
 

  return (
    <ul className={active ? "flex-col flex-center  fixed inset-0  left-1/4 bg-black/20 backdrop-blur-lg  gap-8 justify-center  md:hidden" : "hidden"}>
      < Close onClick={showMenu} className='cursor-pointer'/>

      <li>
        <Link to="/">Home</Link>{" "}
      </li>

      <li>
        <Link to="/">Testimonial</Link>{" "}
      </li>
      <li>
        <Link to="/">Infor</Link>{" "}
      </li>
      <li>
        <Link to="/">Jobs</Link>{" "}
      </li>
      <li>
        <Link to="/">About</Link>{" "}
      </li>
      <li>
        <Link to="/">Contact</Link>{" "}
      </li>
    </ul>
  );
};
export default Menuitem;