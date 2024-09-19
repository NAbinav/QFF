"use client";
import { motion, spring } from "framer-motion";
export default function Home() {
  return (
    <div className="Home">
      <div className="">
        <motion.div
          className=""
          initial={{ x: "-100%", filter: "blur(10px)" }}
          whileInView={{ x: "0", filter: "blur(0px)" }}
          transition={spring}
        >
          <div className="home z-50">
            <h1 className="text-6xl max-sm:text-4xl overflow-hidden">
              Welcome to
              <p className="heading font-extrabold text-5xl ">
                Qiskit Fall Fest 2024
              </p>
              <p className="text-xl">Oct 1-4 2024</p>
            </h1>
            <div className="flex">
              <a
                href="https://vitchennaievents.com"
                className="text-lg fixed font-thin right-48 register"
              >
                REGISTER
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
