"use client";
import React, { useState } from "react";
import Logo from "../../public/Logo Q Black.png";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const cl = menu ? "display box flex-col " : "hidden flex-col";
  return (
    <>
      <div className="hidden sm:block overflow-hidden">
        <div className="ul font-light">
          <div className="ele Logo  li">
            <Image src={Logo} height={100} width={100}></Image>
          </div>
          <div className="ele li">
            <a href="#home">Home</a>
          </div>
          <div className="ele li">
            <a href="#events">Event</a>
          </div>
          <div className="ele li">
            <a href="">Sponsers</a>
          </div>
          <div className="ele li">
            <a href="https://vitchennaievents.com/">Register</a>
          </div>
        </div>
      </div>
      <div className=" Navbar block justify-evenly sm:hidden">
        <ul>
          <div className="ele Logo">
            <Image src={Logo} height={75} width={75}></Image>
          </div>
          <div className="ele">
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
            <a href="#events">Event</a>
          </div>
          <div className="ele li">
            <a href="">Sponsers</a>
          </div>
          <div className="ele">
            <a href="https://vitchennaievents.com/">Register</a>
          </div>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
