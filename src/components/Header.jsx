import React from "react";
import Menu, { Menuitem } from './Menu'
import { Link } from "react-router-dom";
import { MenuOpenOutlined } from "@mui/icons-material";


import { useState } from 'react';

export const Header = () => {
  const [active,setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="fixed w-full text-black   flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center uppercase">
        <h1>
          Lo<span className="block text-6 ">Go</span>
        </h1>
        </div>

        <nav>

          <div className="absolute right-6 md:hidden top-6 scale-150 cursor-pointer ">
            <MenuOpenOutlined onClick={showMenu} className="scale-150"/>
           
          </div>

          <ul className="hidden md:flex w-full text-black gap-8 p-6 uppercase bg-white/10">

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
          <Menuitem showMenu={showMenu} active={active}/>
        </nav>
      
    </div>
  );
};
export default Header;
