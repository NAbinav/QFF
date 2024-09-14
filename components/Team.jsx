import React from "react";
import Profile from "./profile";
import p2 from "@/public/profile2.jpg";
import p3 from "@/public/profile3.png";
import p4 from "@/public/profile4.jpg";
import p5 from "@/public/profile5.jpg";
const Team = () => {
  return (
    <div className="h-full flex   flex-grow flex-nowrap self-center text-center  gap-6 justify-center max-sm:justify-center max-sm:flex-col max-sm:text-center max-sm:snap-center align-middle max-sm:self-center max-sm:items-center">
      <div className="" id="teams">
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
      </div>
      <div>
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
    </div>
  );
};

export default Team;
