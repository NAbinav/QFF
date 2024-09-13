import React from "react";
import Card from "@/components/Card";
import Home from "@/components/Home";
import Team from "@/components/Team";

import p1 from "@/public/profile1.png";
import Profile from "@/components/profile";
const page = () => {
  return (
    <div className="sm:text-xs flex flex-col gap-40" id="home">
      <Home></Home>
      <div className="flex justify-center my-10" id="events">
        <Card></Card>
      </div>
      <div className="flex justify-center my-10" id="">
        <Team />
      </div>
    </div>
  );
};

export default page;
