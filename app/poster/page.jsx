import React from "react";
import Image from "next/image";
import poster from "../../public/Qiskit Fall Fest Poster.png";
import { RiCloseFill } from "react-icons/ri";
const page = () => {
  return (
    <div className="flex flex-row justify-center snap-center self-center items-center ">
      <Image src={poster} width={400} alt="poster"></Image>
      <RiCloseFill />
    </div>
  );
};

export default page;
