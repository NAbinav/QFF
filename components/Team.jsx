import React from "react";
import Profile from "./profile";
import p1 from "@/public/profile1.png";
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
            name: "Abinav N",
            dept: "Web Developer",
            branch: "ECM",
            profile: p1,
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
