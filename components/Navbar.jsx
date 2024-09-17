"use client";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const cl = menu ? "display  box flex-col " : "hidden flex-col";
  return (
    <>
      <div className="hidden sm:block overflow-hidden">
        <div className="ul font-light backdrop-blur-sm bg-[rgb(255,255,255,0.08)] rounded-xl">
          <div className="ele li">
            <a href="#home">Home</a>
          </div>
          <div className="ele li">
            <a href="#about">About</a>
          </div>
          <div className="ele li">
            <a href="team">Team</a>
          </div>
          <div className="ele li">
            <a href="">Sponsors</a>
          </div>
          <div className="ele li">
            <a href="https://vitchennaievents.com/">Register</a>
          </div>
        </div>
      </div>
      <div className=" Navbar block justify-evenly sm:hidden">
        <ul>
          <div className="ele  m-5">
            {menu ? (
              <RiCloseFill
                className="text-4xl absolute right-2 z-50"
                onClick={() => {
                  setmenu(!menu);
                  console.log(menu);
                }}
              />
            ) : (
              <MdMenu
                className="text-4xl absolute right-2 z-50"
                onClick={() => {
                  setmenu(!menu);
                  console.log(menu);
                }}
              />
            )}
          </div>
        </ul>
        <ul className={cl + "font-light"}>
          <div className="ele li">
            <a href="#home">Home</a>
          </div>
          <div className="ele li ">
            <a href="#about">About</a>
          </div>
          <div className="ele li">
            <a href="#teams">Team</a>
          </div>
          <div className="ele li">
            <a href="">Sponsers</a>
          </div>
          <div className="ele li">
            <a href="https://vitchennaievents.com/">Register</a>
          </div>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
