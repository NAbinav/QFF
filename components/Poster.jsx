import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import poster from "../public/image.png";
const Poster = () => {
  const [showModal, setShowModal] = useState(false);
  showModal
    ? (parent.document.body.style.overflow = "hidden")
    : (parent.document.body.style.overflow = "auto");
  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="heading text-6xl text-center">POSTER</div>
      <a href="/poster">
        <Image src={poster} alt="poster" height={500}></Image>
      </a>
    </div>
  );
};

export default Poster;
