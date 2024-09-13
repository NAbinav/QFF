import React from "react";
import Card from "@/components/Card";
import Home from "@/components/Home";
import Team from "@/components/Team";
import About from "@/components/about";
const page = () => {
  return (
    <div className="sm:text-xs flex flex-col gap-40" id="home">
      <div className="h-full snap-center items-start justify-center">
        <Home />
      </div>
      <About />
      <div className="flex gap-10 flex-col justify-center my-10" id="events">
        <p className="text-6xl p-10 heading">ABOUT THE EVENT</p>
        <div className="flex justify-center">
          <Card />
        </div>
      </div>
      <div className="flex justify-center my-10" id="">
        <Team />
      </div>
    </div>
  );
};

export default page;
