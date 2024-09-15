import React from "react";
import Image from "next/image";
import poster from "../public/image.png";
const Poster = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="heading text-6xl text-center ">POSTER</div>
      <a href="/poster">
        <Image
          src={poster}
          alt="poster"
          height={500}
          className="flex justify-center items-center snap-center self-center align-middle"
        ></Image>
      </a>
    </div>
  );
};

export default Poster;
