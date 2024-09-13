import React from "react";
import One from "./one";
import Two from "./two";
import Three from "./three";
import Four from "./four";
const Card = () => {
  return (
    <div className="">
      <ul className="eventlist">
        <li>
          <div className="card text-center items-center ">
            <p className="text-lg font-semibold">DAY-1 OCTOBER 1 2024</p>
            <p className="text-lg">
              <span className="heading">Venue:</span> AB1 Nethaji Auditorium
            </p>
            <div className="p-2 m-2">
              <One />
            </div>
          </div>
        </li>
        <li>
          <div className=" card text-center items-center ">
            <p className="text-lg font-semibold">DAY-2 OCTOBER 2 2024</p>
            <p className="text-lg">
              <span className="heading">Venue:</span> Online - MS Teams
            </p>
            <div className="p-2 m-2">
              <Two />
            </div>
          </div>
        </li>
        <li>
          <div className=" card text-center items-center ">
            <p className="text-lg font-semibold">DAY-3 OCTOBER 3 2024</p>
            <p className="text-lg">
              <span className="heading">Venue:</span> AB1 Nethaji Auditorium
            </p>
            <div className="p-2 m-2">
              <Three />
            </div>
          </div>
        </li>
        <li>
          <div className=" card text-center items-center ">
            <p className="text-lg font-semibold">DAY-4 OCTOBER 4 2024</p>
            <p className="text-lg">
              <span className="heading">Venue:</span> Kasturba Auditorium
            </p>
            <div className="p-2 m-2">
              <Four />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
