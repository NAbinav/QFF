import React from "react";
import "./cards.css";
const Card = () => {
  return (
    <div className="">
      <ul className="eventlist">
        <li>
          <div className=" card text-center items-center ">
            <p className="text-xl font-semibold">DAY-1</p>
            <p className="text-xl">
              <span className="heading">Venue:</span> AB1 Nethaji Auditorium
            </p>
            <button className="text-xl more">More details</button>
          </div>
        </li>
        <li>
          <div className=" card text-center items-center ">
            <p className="text-xl font-semibold">DAY-2</p>
            <p className="text-xl">
              <span className="heading">Venue:</span> Online - MS Teams
            </p>
            <button className="text-xl more">More details</button>
          </div>
        </li>
        <li>
          <div className=" card text-center items-center ">
            <p className="text-xl font-semibold">DAY-3</p>
            <p className="text-xl">
              <span className="heading">Venue:</span> AB1 Nethaji Auditorium
            </p>
            <button className="text-xl more">More details</button>
          </div>
        </li>
        <li>
          <div className=" card text-center items-center ">
            <p className="text-xl font-semibold">DAY-4</p>
            <p className="text-xl">
              <span className="heading">Venue:</span> Kasturba Auditorium
            </p>
            <button className="text-xl more">More details</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
