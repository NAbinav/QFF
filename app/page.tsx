import React from "react";
import Card from "@/components/Card";
import Home from "@/components/Home";

import p1 from "@/public/profile1.png";
import Profile from "@/components/profile";
const page = () => {
  return (
    <div className="sm:text-xs flex flex-col gap-40" id="home">
      <Home></Home>
      <div className="flex justify-center my-10" id="events">
        <Card></Card>
      </div>
      <div className="h-full flex w-full flex-grow flex-nowrap self-center text-center  gap-6 justify-evenly max-sm:justify-center max-sm:flex-col max-sm:w-[400px] max-sm:text-center ">
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
        <Profile
          props={{
            name: "Abinav N",
            dept: "Web Developer",
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

export default page;
