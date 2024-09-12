import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "./Dialogue";
const one = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <a className="more text-base translate-y-2">More Details</a>
      </DialogTrigger>
      <DialogContent className="dialogue text-base">
        <div>VENUE : AB1 - Netaji Auditorium</div>
        <div>
          <span className="text-gray-500">9.00 AM - 9:30 AM</span> Kickoff -
          Opening Ceremony{" "}
        </div>
        <div>
          <span className="text-gray-500">9.30 AM - 11:00 AM</span> Workshop
          Session - 1{" "}
        </div>
        <div>
          <span className="text-gray-500">11:00 AM - 11:15 AM</span> Break{" "}
        </div>
        <div>
          <span className="text-gray-500">11:15 AM - 12:30 PM</span> Workshop
          Session - 2{" "}
        </div>
        <br />
        <div>VENUE: Online </div>
        <div>
          {" "}
          <span className="text-gray-500">7:00 PM - 8:00 PM</span> MS Teams
          Webinar 1 - TBA{" "}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default one;
