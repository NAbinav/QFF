import React from "react";
import Logo from "../../public/Web_Community-Page_Image.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="Nav">
      <ul>
        <li className="ele Logo ">
          <Image src={Logo} height={75} width={75}></Image>
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
