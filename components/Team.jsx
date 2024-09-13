import React from "react";
import Profile from "./profile";
import p1 from "@/public/profile1.png";
import p2 from "@/public/profile2.jpg";

const Team = () => {
  return (
    <div className="h-full flex   flex-grow flex-nowrap self-center text-center  gap-6 justify-center max-sm:justify-center max-sm:flex-col max-sm:text-center max-sm:snap-center align-middle max-sm:self-center max-sm:items-center">
      <div className="" id="teams">
        <Profile
          props={{
            name: "Kailash Shankar",
            dept: "Designing Lead",
            branch: "ECM",
            profile: p1,
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
            name: "Kailash Shankar",
            dept: "Designing Lead",
            branch: "ECM",
            profile: p1,
          }}
        />
        <Profile
          props={{
            name: "Abinav N",
            dept: "Web Developer",
            branch: "ECM",
            profile: p1,
          }}
        />
      </div>
    </div>
  );
};

export default Team;
