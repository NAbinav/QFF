import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "./Dialogue";
const one = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <a className="more text-base translate-y-6">More Details</a>
      </DialogTrigger>
      <DialogContent className="dialogue text-base">
        <div>VENUE : Kasturba Auditorium </div>
        <div>
          <span className="text-gray-500">9:00 AM - 10:00 AM</span> Hackathon
          Review 2{" "}
        </div>
        <div>
          <span className="text-gray-500">11:00 AM - 11:30 AM</span> Project
          Showcase Session{" "}
        </div>
        <div>
          <span className="text-gray-500">1:00 PM - 3:00 PM</span> Hackathon
          Review 3{" "}
        </div>
        <div>
          <span className="text-gray-500">3:30 PM - 4:00 PM</span> Closing
          Ceremony{" "}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default one;
