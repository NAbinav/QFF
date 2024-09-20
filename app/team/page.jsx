"use client";
import React from "react";
import Profile from "../../components/profile";
import p1 from "@/public/profile1.jpg";
import p2 from "@/public/profile2.jpg";
import p3 from "@/public/profile3.png";
import p5 from "@/public/profile5.jpg";
import p6 from "@/public/profile6.jpg";
import p7 from "@/public/profile7.jpg";
import p8 from "@/public/profile8.jpg";
import p9 from "@/public/profile9.jpg";
import p10 from "@/public/profile10.jpg";
import { motion, spring } from "framer-motion";
const Team = () => {
  return (
    <div className="flex flex-grow flex-wrap self-center text-center justify-center max-w-screen max-sm:justify-center max-sm:flex-col max-sm:text-center max-sm:snap-center align-middle max-sm:self-center max-sm:items-center my-14">
      <motion.div
        initial={{ x: "-10%", filter: "blur(40px)" }}
        whileInView={{ x: "0", filter: "blur(0px)" }}
        transition={spring}
        className="flex max-sm:flex-col justify-center "
      >
        <div className=" flex flex-grow flex-wrap self-center text-center  gap-6 justify-center max-w-7xl max-sm:justify-center max-sm:flex-col max-sm:text-center max-sm:snap-center align-middle max-sm:self-center max-sm:items-center my-14">
          <Profile
            props={{
              name: "Nandan Patel",
              dept: "Vice Captain",
              profile: p6,
              linkedin: "https://www.linkedin.com/in/nandan-patel-197760208/",
              github: "https://github.com/NandanPatel24",
              insta: "https://www.instagram.com/np_2411/",
            }}
          />
          <Profile
            props={{
              name: "Ashwin Sivakumar",
              dept: "Advisor",
              profile: p1,
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
              github: false,
              insta: "https://www.instagram.com/_.rithika_charan",
            }}
          />
          <Profile
            props={{
              name: "Harishankar K Nair",
              dept: "Captain",
              profile: p7,
              linkedin:
                "https://www.linkedin.com/in/harishankar-k-nair-423973247",
              github: false,
              insta: "https://www.instagram.com/_harishankar_k_nair/",
            }}
          />
          <Profile
            props={{
              name: "Kashish Mahendra",
              dept: "Team Manager",
              profile: p10,
              linkedin: "https://www.linkedin.com/in/kashish-mahendra2004/",
              github: "https://github.com/Kashish2705",
            }}
          />
          <Profile
            props={{
              name: "Kailash Shankar",
              dept: "Designing Lead",
              profile: p5,
              linkedin:
                "https://www.linkedin.com/in/kailash-shankar-b5796b288/",
              github: "https://github.com/AshwinSivakumar",
            }}
          />
          <Profile
            props={{
              name: "Aansh Sahni",
              dept: "Volunteer",
              profile: p8,
              linkedin: "https://www.linkedin.com/in/aansh-sahni-75464a247/",
              github: "https://github.com/AanshSahniumar",
              insta: "https://www.instagram.com/aansh_sahni",
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
              name: "Abinav N",
              dept: "Web Developer",
              profile: p9,
              linkedin: "https://www.linkedin.com/in/abinav-n-351358320/",
              github: "https://github.com/NAbinav",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
