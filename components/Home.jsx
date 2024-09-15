"use client";
import Typed from "./Typing";
import { motion, spring } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div className="">
        <motion.div
          className=""
          initial={{ x: "-100%", filter: "blur(10px)" }}
          animate={{ x: "0", filter: "blur(0px)" }}
          transition={spring}
        >
          <div className="Home z-50">
            <h1 className="text-6xl max-sm:text-4xl overflow-hidden">
              Welcome to
              <p className="heading font-extrabold text-5xl ">
                Qiskit Fall Fest 2024
              </p>
              <p className="text-xl">Oct 1-5 2024</p>
              <div className="grad1   -translate-x-96 overflow-hidden fixed"></div>
              <div className="grad2 overflow-hidden fixed"></div>
            </h1>
            <div className="flex">
              <Typed />
              <div className="text-lg fixed font-thin right-48 register">
                REGISTER
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
