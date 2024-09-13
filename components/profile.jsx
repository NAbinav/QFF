import React from "react";
import Image from "next/image";
const profile = ({ props }) => {
  return (
    <div className=" profilecard flex max-sm:self-center flex-col snap-center max-sm:justify-evenly align-middle text-center items-center font-[300] text-base gap-5  h-[300px] w-[500px] border-[1px] border-white bg-[rgba(255,255,255,0.1)] rounded-xl group hhover:bg-gradient-to-r hhover:from-[rgb(61,106,255,0.14)] hhover:to-[rgb(255,56,212,0.163)] max-sm:h-28 max-sm:w-full    max-sm:flex-row profilecard">
      <Image
        className="rounded-full w-32 h-32   border-white border-2 group-hover:w-36 group-hover:h-36 transition-all duration-300 max-sm:w-16 max-sm:h-16 max-sm:group-hover:w-16 max-sm:group-hover:h-16"
        src={props.profile}
        height={200}
        width={200}
      ></Image>
      <div>
        <p className="p-2 font-[400] group-hover:text-lg max-sm:group-hover:text-base transition-all duration-300">
          {props.name}
        </p>
        <p className="p-2 group-hover:text-lg transition-all duration-300 max-sm:group-hover:text-base">
          {props.dept}
        </p>
      </div>
    </div>
  );
};

export default profile;
