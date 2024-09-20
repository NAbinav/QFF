"use client";
import React from "react";
import Home from "@/components/Home";
import Partner from "@/components/partners";
import About from "@/components/about";
import Cards from "@/components/Card";
import Speaker from "@/components/speaker";
import Footer from "@/components/Footer";
import { motion, spring } from "framer-motion";
const Page = () => {
  return (
    <div className="sm:text-xs flex flex-col gap-40 " id="home">
      <div className="h-full snap-center items-start justify-center">
        <Home />
      </div>
      <div id="about">
        <motion.div
          className=""
          initial={{ x: "-100%", filter: "blur(10px)" }}
          whileInView={{ x: "0", filter: "blur(0px)" }}
          transition={spring}
        >
          <About />
        </motion.div>
      </div>
      <div id="partner">
        <motion.div
          className=""
          initial={{ x: "-100%", filter: "blur(10px)" }}
          whileInView={{ x: "0", filter: "blur(0px)" }}
          transition={spring}
        >
          <Partner />
        </motion.div>
      </div>
      <div className="flex gap-10 flex-col justify-center my-10" id="schedule">
        <p className="text-6xl p-10 heading">SCHEDULE</p>
        <div className="text-lg m-12 text-justify font-thin">
          Qiskit Fall Fest is the world’s largest collection of student-run
          quantum computing events. As one of the 50 sponsored international
          universities selected to host it, we bring together a collection of
          talented quantum enthusiasts along with IBM Quantum members to mark a
          celebration of the advances that quantum computing has made in the
          past year, with experienced quantum scientists and budding young
          quantum enthusiasts collaborating to showcase their talents at the
          workshops and hackathons at the VIT Chennai campus. With open arms, we
          welcome you to the event and are hoping to see you there!!
        </div>
        <div className="flex justify-center self-center">
          <Cards />
        </div>
      </div>
      <div className="flex justify-center my-10" id="speaker">
        <Speaker />
      </div>
      <div className="flex flex-col snap-center align-middle justify-center self-center text ">
        <div
          className="text-3xl heading text-center max-sm:text-3xl"
          id="venue"
        >
          VENUE
        </div>
        <div className="flex max-sm:flex-col justify-around gap-16">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Page;
