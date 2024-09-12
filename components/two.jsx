import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "./Dialogue";
const one = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <a className="more text-base translate-y-2">More Details</a>
      </DialogTrigger>
      <DialogContent className="dialogue text-base">
        <div>VENUE : Online - MS Teams</div>
        <div>
          <span className="text-gray-500">10.30 AM - 11:30 AM</span> Workshop
          Session - 3{" "}
        </div>
        <div>
          <span className="text-gray-500">11:30 AM - 11:45 AM</span> Break{" "}
        </div>
        <div>
          <span className="text-gray-500">11:45 AM - 1:00 AM</span> Workshop
          Session - 4{" "}
        </div>
        <div>
          <span className="text-gray-500">11:15 AM - 12:30 PM</span> Workshop
          Session - 2{" "}
        </div>
        <br />
        <div>VENUE: Online </div>
        <div>
          {" "}
          <span className="text-gray-500">7:00 PM - 8:00 PM</span> Webinar 2 -
          TBA{" "}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default one;
