import React from "react";
import Logo from "../../public/Logo Q Black.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="Nav bodoni-moda">
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
          <p>Register</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
