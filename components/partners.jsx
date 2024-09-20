import React from "react";
import Club from "../public/Logo Q Black.png";
import Image from "next/image";
import { SiQiskit } from "react-icons/si";
import { motion, spring } from "framer-motion";
const About = () => {
  return (
    <div className=" flex flex-col gap-10" id="about">
      <div className="heading text-5xl px-28">PARTNERS</div>
      <motion.div
        className=""
        initial={{ x: "-10%", filter: "blur(40px)" }}
        whileInView={{ x: "0", filter: "blur(0px)" }}
        transition={spring}
      >
        <div className="flex justify-around snap-center align-middle max-sm:flex-col">
          <Image
            src={Club}
            alt="club"
            className="h-72 w-72 max-sm:w-40 max-sm:h-40"
          ></Image>
          <div className="m-4 max-w-[70%]">
            <span className="heading p-0 relative top-0 text-5xl">
              Quantumplators
            </span>
            <p>
              <br />
            </p>
            <p className="text-lg font-light text-justify">
              Introducing Quantumplators, the pioneering Quantum Computing
              Special Team at VIT Chennai.
              <br />
              Quantumplators is a dynamic force driven by passionate college
              students, charting new territories in the ever-expanding world of
              quantum computing. Our mission is to propel VIT Chennai into the
              quantum era by fostering quantum literacy, preparing for
              cutting-edge quantum hackathons, and providing ample research
              opportunities. With our dedicated student leaders at the helm, we
              aim to lead the charge in quantum exploration.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        className=""
        initial={{ x: "-10%", filter: "blur(40px)" }}
        whileInView={{ x: "0", filter: "blur(0px)" }}
        transition={spring}
      >
        <div className="flex snap-center align-middle justify-around max-sm:flex-col">
          <div className="text-[200px] w-[288px] text-4xl max-sm:w-40 flex justify-center">
            <SiQiskit className=" text-white" />
          </div>
          <div className="m-4  max-w-[70%] ">
            <span className="heading p-0 relative top-0 text-5xl">
              IBM Qiskit
            </span>
            <p>
              <br />
            </p>
            <p className="text-lg font-light text-justify">
              Qiskit is an open-source framework developed by IBM for quantum
              computing. It allows users to create and run quantum programs on
              both simulators and real quantum hardware. Qiskit includes tools
              for building quantum circuits, simulating quantum systems, and
              developing quantum algorithms.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
