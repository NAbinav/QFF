"use client";
import Typed from "../components/Typing";
import { motion, spring } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className=""
      initial={{ x: "-100%", filter: "blur(10px)" }}
      animate={{ x: "0", filter: "blur(0px)" }}
      transition={spring}
    >
      <div className="Home">
        <h1 className="text-6xl max-sm:text-4xl">
          Welcome to <span className="heading ">Qiskit Fall Fest 2024</span>
        </h1>
        <Typed />
      </div>
    </motion.div>
  );
}
