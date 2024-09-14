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
              <span className="">
                <p className="heading text-5xl">Qiskit Fall Fest 2024</p>
              </span>
              <div className="grad1   -translate-x-96 overflow-hidden fixed"></div>
              <div className="grad2 overflow-hidden fixed"></div>
            </h1>
            <Typed />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
