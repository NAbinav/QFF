"use client";
import React from "react";
import Profile from "../../components/profile";
import p2 from "@/public/profile2.jpg";
import p3 from "@/public/profile3.png";
import p4 from "@/public/profile4.jpg";
import p5 from "@/public/profile5.jpg";
import { motion, spring } from "framer-motion";
const Team = () => {
  return (
    <div className="flex flex-grow flex-wrap self-center text-center justify-center max-w-4xl max-sm:justify-center max-sm:flex-col max-sm:text-center max-sm:snap-center align-middle max-sm:self-center max-sm:items-center my-14">
      <motion.div
        initial={{ x: "-100%", filter: "blur(10px)" }}
        whileInView={{ x: "0", filter: "blur(0px)" }}
        transition={spring}
        className="flex max-sm:flex-col justify-center "
      >
        <div className=" flex flex-grow flex-wrap self-center text-center  gap-6 justify-center max-w-4xl max-sm:justify-center max-sm:flex-col max-sm:text-center max-sm:snap-center align-middle max-sm:self-center max-sm:items-center my-14">
          <Profile
            props={{
              name: "Kailash Shankar",
              dept: "Designing Lead",
              profile: p4,
            }}
          />
          <Profile
            props={{
              name: "Aurum Joshi",
              dept: "Project Lead",
              profile: p2,
            }}
          />
          <Profile
            props={{
              name: "Rithika",
              dept: "Vice Captain",
              profile: p3,
            }}
          />
          <Profile
            props={{
              name: "xxxx",
              dept: "yyyyyy",
              profile: p5,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
