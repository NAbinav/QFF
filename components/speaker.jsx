import React from "react";
import Profile from "@/components/speaker_profile";
import p2 from "@/public/speaker1.jpg";
import p3 from "@/public/speaker2.jpg";
import { Linkedin } from "lucide-react";
const Team = () => {
  return (
    <div>
      <div className="heading text-4xl max-sm:text-xl">SPEAKERS</div>
      <div className="flex max-sm:flex-col justify-center">
        <div className=" flex flex-grow flex-wrap self-center text-center  gap-6 justify-around max-w-4xl max-sm:justify-center max-sm:flex-col max-sm:text-center max-sm:snap-center align-middle max-sm:self-center max-sm:items-center my-14">
          <Profile
            props={{
              name: "Pawel Gora",
              dept: "University of Warsaw",
              profile: p2,
              x: "https://x.com/PawelGora",
              meta: "https://www.facebook.com/gora.pawel",
              scholar: "https://scholar.google.pl/citations?user=GbZr2MQAAAAJ",
            }}
          />
          <Profile
            props={{
              name: "Alain Chancé",
              dept: "Founder CEO Alainquant LLC",
              profile: p3,
              linkedin: "https://www.linkedin.com/in/alainchance/",
              x: "https://x.com/Alain_Chance",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
