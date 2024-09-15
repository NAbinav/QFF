"use client";
import React from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js
import Card from "@/components/Card";
import Home from "@/components/Home";
import Team from "@/components/Team";
import About from "@/components/about";
import Poster from "@/components/Poster";
import "leaflet/dist/leaflet.css";

// Dynamically import MapContainer and disable SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Page = () => {
  return (
    <div className="sm:text-xs flex flex-col gap-40 " id="home">
      <div className="h-full snap-center items-start justify-center">
        <Home />
      </div>
      <About />
      <div className="flex gap-10 flex-col justify-center my-10" id="events">
        <p className="text-6xl p-10 heading">SCHEDULE</p>
        <div className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          sint, perferendis accusamus deleniti molestiae, consequuntur omnis et
          nulla quam quis facilis repellendus sunt adipisci laborum repellat rem
          corporis vero optio.
        </div>
        <div className="flex  justify-center">
          <Card />
        </div>
      </div>
      <div className="flex justify-center my-10">
        <Team />
      </div>
      <div className="flex justify-center my-10">
        <Poster />
      </div>
      <div className="flex flex-col snap-center align-middle justify-center self-center gap-5 text ">
        <div className="text-5xl heading text-center max-sm:text-3xl">MAP</div>

        <MapContainer
          center={[12.8422129, 80.1551188]}
          zoom={16}
          style={{ height: "300px", width: "300px", borderRadius: "20px" }}
          scrollWheelZoom={false}
          className="flex snap-center align-middle justify-center self-center "
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
        <div className="text-lg text-left max-sm:text-3xl">
          <p className="text-lg text-left">Address:</p>
          <br />
          Vellore Institute of Technology - Chennai, <br />
          Kelambakkam - Vandalur Rd, Rajan Nagar,
          <br /> Chennai, Tamil Nadu 600127
        </div>
      </div>
    </div>
  );
};

export default Page;
