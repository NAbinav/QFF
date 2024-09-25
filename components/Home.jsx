"use client";
import { motion, spring } from "framer-motion";
export default function Home() {
  return (
    <div className="check">
      <motion.div
        className=""
        initial={{ x: "-10%", filter: "blur(40px)" }}
        whileInView={{ x: "0", filter: "blur(0px)" }}
        transition={spring}
      >
        <div className="home z-50">
          <div className="one">
            <h1 className="text-6xl max-sm:text-4xl overflow-hidden">
              IBM Qiskit
              <p className="heading font-extrabold text-5xl ">
                Fall Fest 2024
              </p>
          
              
            </h1>
          </div>         
          <div className="two"> 
            <img src="/badge.png"></img>
          </div> 
          <div className="three">
  <div className="flex flex-col items-center justify-center gap-4"> {/* Aligns the date and button */}
    <h1 className="text-6xl max-sm:text-4xl overflow-hidden">
      October
      <p className="heading font-extrabold text-5xl">1st - 4th</p>
    </h1>
    <a
      href="https://vitchennaievents.com"
      className="text-lg font-thin register"
    >
      REGISTER
    </a>
  </div>
</div>
        </div>
      </motion.div>
    </div>
  );
}
