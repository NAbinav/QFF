import React from "react";
import Card from "@/components/Card";
import One from "@/components/one";
import Home from "@/components/Home";
const page = () => {
  return (
    <div className="sm:text-xs" id="home">
      <Home></Home>
      <div className="flex justify-center my-10" id="events">
        <Card></Card>
      </div>
      <div className="flex justify-center my-10" id="events">
        <One></One>
      </div>
    </div>
  );
};

export default page;
