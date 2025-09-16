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
              <p className="heading effect-shine font-extrabold text-5xl ">
                Fall Fest 2025
              </p>
          
              
            </h1>
          </div>         
          <div className="two"> 
            <img className="glow-img effect-shine transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-700" 
            src="/badge.png" alt="Badge" />
          </div> 
          <div className="three">
            <div className="flex flex-col items-center justify-center gap-4"> {/* Aligns the date and button */}
              <h1 className="text-6xl max-sm:text-4xl overflow-hidden">
                October
                <p className="heading effect-shine font-extrabold text-5xl">29th - 31st</p>
              </h1>
              <a
                href="https://vitchennaievents.com"
                className="text-lg font-thin register effect-shine transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-700 hover:text-white"
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
