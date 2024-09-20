"use client";
import React from "react";
import Profile from "../../components/profile";
import p1 from "@/public/profile1.jpg";
import p2 from "@/public/profile2.jpg";
import p3 from "@/public/profile3.png";
import p4 from "@/public/profile4.jpg";
import p6 from "@/public/profile6.jpg";
import { motion, spring } from "framer-motion";
const Team = () => {
  return (
    <div className="flex flex-grow flex-wrap self-center text-center justify-center max-w-4xl max-sm:justify-center max-sm:flex-col max-sm:text-center max-sm:snap-center align-middle max-sm:self-center max-sm:items-center my-14">
      <motion.div
        initial={{ x: "-10%", filter: "blur(40px)" }}
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
              linkedin:
                "https://www.linkedin.com/in/kailash-shankar-b5796b288/",
              github: "https://github.com/AshwinSivakumar",
            }}
          />
          <Profile
            props={{
              name: "Aurum Joshi",
              dept: "Project Lead",
              profile: p2,
              linkedin:
                "https://www.linkedin.com/in/ashwin-sivakumar-a8b868120/",
              github: "https://github.com/AshwinSivakumar",
            }}
          />
          <Profile
            props={{
              name: "Rithika",
              dept: "Vice Captain",
              profile: p3,
              linkedin: "https://www.linkedin.com/in/rithika-n--",
              github: "https://github.com/AshwinSivakumar",
              insta: false,
            }}
          />
          <Profile
            props={{
              name: "Ashwin Sivakumar",
              dept: "yyyyyy",
              profile: p1,
              linkedin:
                "https://www.linkedin.com/in/ashwin-sivakumar-a8b868120/",
              github: "https://github.com/AshwinSivakumar",
            }}
          />
          <Profile
            props={{
              name: "Nandan Patel",
              dept: "Vice Captain",
              profile: p6,
              linkedin:
                "https://www.linkedin.com/in/ashwin-sivakumar-a8b868120/",
              github: "https://github.com/AshwinSivakumar",
              insta: "https://www.instagram.com/np_2411/",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
