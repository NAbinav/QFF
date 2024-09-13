import React from "react";
import Card from "@/components/Card";
import Home from "@/components/Home";
import Team from "@/components/Team";
import About from "@/components/about";
const page = () => {
  return (
    <div className="sm:text-xs flex flex-col gap-40" id="home">
      <Home></Home>
      <About />
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
