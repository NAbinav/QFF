import React from "react";
import Card from "@/app/components/Card";
import Home from "@/app/components/Home";
const page = () => {
  return (
    <div className="sm:text-xs" id="home">
      <Home></Home>
      <div className="flex justify-center my-10" id="events">
        <Card></Card>
      </div>
    </div>
  );
};

export default page;
