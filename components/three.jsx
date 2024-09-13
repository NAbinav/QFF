import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "./Dialogue";
const one = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <a className="more text-base translate-y-6">More Details</a>
      </DialogTrigger>
      <DialogContent className="dialogue text-base">
        <div>VENUE : AB1 - Netaji Auditorium</div>
        <div>
          <span className="text-gray-500">10.00 AM - 10:45 AM</span>Plenary
          Speaker - 1{" "}
        </div>
        <div>
          <span className="text-gray-500">10:45 AM - 11:30 AM</span> Plenary
          Speaker - 2{" "}
        </div>
        <div>
          <span className="text-gray-500">11:30 AM - 12:30 PM</span> Panel
          Discussion{" "}
        </div>
        <div>
          <span className="text-gray-500">12:30 PM - 2:00 PM</span> Break{" "}
        </div>
        <br />
        <div>VENUE: Kasturba Auditorium </div>
        <div>
          {" "}
          <span className="text-gray-500">2:00 PM - 2:30 PM</span> Hackathon
          Briefing{" "}
        </div>
        <div>
          {" "}
          <span className="text-gray-500">7:00 PM - 8:00 PM</span> Hackathon
          Review{" "}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default one;
