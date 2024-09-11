"use client";
import React, { useState } from "react";
import Logo from "../../public/Logo Q Black.png";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const cl = menu ? "display box flex-col" : "hidden flex-col";
  return (
    <>
      <div className="Nav bodoni-moda hidden sm:block">
        <ul>
          <li className="ele Logo ">
            <Image src={Logo} height={100} width={100}></Image>
          </li>
          <li className="ele ">
            <p>Home</p>
          </li>
          <li className="ele">
            <p>Event</p>
          </li>
          <li className="ele">
            <p>Sponsers</p>
          </li>
          <li className="ele">
            <a href="https://vitchennaievents.com/">Register</a>
          </li>
        </ul>
      </div>
      <div className="Nav block sm:hidden">
        <ul>
          <li className="ele Logo ">
            <Image src={Logo} height={75} width={75}></Image>
          </li>
          <li className="ele text-cyan-50">
            {menu ? (
              <RiCloseFill
                className="text-4xl"
                onClick={() => {
                  setmenu(!menu);
                  console.log(menu);
                }}
              />
            ) : (
              <MdMenu
                className="text-4xl"
                onClick={() => {
                  setmenu(!menu);
                  console.log(menu);
                }}
              />
            )}
          </li>
        </ul>
        <ul className={cl}>
          <li className="ele">
            <p>Home</p>
          </li>
          <li className="ele">
            <p>Event</p>
          </li>
          <li className="ele">
            <p>Sponsers</p>
          </li>
          <li className="ele">
            <a href="https://vitchennaievents.com/">Register</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
