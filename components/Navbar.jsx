"use client";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const [dropmenu, setdropmenu] = useState(false);

  const cl = menu ? "display  box flex-col " : "hidden flex-col";
  const cla = dropmenu ? "display " : "hidden ";
  const box = dropmenu ? "p-4 " : "hidden ";
  return (
    <>
      <div className="hidden sm:block overflow-hidden">
        <div className="ul font-light  rounded-xl">
          <a className="ele li h-fit backdrop-blur-sm rounded-sm" href="/#home">
            Home
          </a>
          <div className="ele">
            <div
              className="li text-left w-fit flex backdrop-blur-sm rounded-sm"
              onClick={() => {
                setdropmenu(!dropmenu);
              }}
            >
              Event
              <MdArrowDropDown className="flex justify-center self-center text-xl" />
            </div>
            <div className={box + "flex flex-col gap-2 bg-[rgb(0,0,0,0.5)] "}>
              <a className={cla + "m-[1px]"} href="/#about">
                About
              </a>
              <a
                href="/#partner"
                className={cla + " bg-transparent m-[1px] text-left"}
              >
                Partners
              </a>
              <a
                href="/#schedule"
                className={cla + " bg-transparent m-[1px] text-left"}
              >
                Schedule
              </a>
              <a href="/#speaker" className={cla + " bg-transparent text-left"}>
                Speakers
              </a>
              <a href="/#venue" className={cla + " bg-transparent text-left"}>
                Venue
              </a>
            </div>
          </div>

          <a href="team" className="ele li h-fit backdrop-blur-sm rounded-sm">
            Team
          </a>
          <a className="ele li h-fit" a href="https://vitchennaievents.com/">
            Register
          </a>
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
        <ul className={cl + "font-light "}>
          <div className="ele li" id="first">
            <a href="/#home">Home</a>
          </div>
          <div className="ele">
            <div
              className="li text-left w-fit flex backdrop-blur-sm rounded-sm"
              onClick={() => {
                setdropmenu(!dropmenu);
              }}
            >
              Event
              <MdArrowDropDown className="flex justify-center self-center text-xl" />
            </div>
            <div className={box + "flex flex-col gap-2 bg-[rgb(0,0,0,0.5)] "}>
              <a className={cla + "m-[1px]"} href="/#about">
                About
              </a>
              <a
                href="/#partner"
                className={cla + " bg-transparent m-[1px] text-left"}
              >
                Partners
              </a>
              <a
                href="/#schedule"
                className={cla + " bg-transparent m-[1px] text-left"}
              >
                Schedule
              </a>
              <a href="/#speaker" className={cla + " bg-transparent text-left"}>
                Speakers
              </a>
              <a href="/#venue" className={cla + " bg-transparent text-left"}>
                Venue
              </a>
            </div>
          </div>
          <div className="ele li">
            <a href="/teams">Team</a>
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
