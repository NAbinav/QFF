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
        <p className="text-6xl p-10 heading">ABOUT THE EVENT</p>
        <div className="flex justify-center">
          <Card />
        </div>
      </div>
      <div className="flex justify-center my-10">
        <Team />
      </div>
      <div className="flex justify-center my-10">
        <Poster />
      </div>
      <div className="flex flex-col snap-center align-middle justify-center self-center gap-5 text">
        <div className="text-6xl heading">MAP</div>
        <MapContainer
          center={[12.8422129, 80.1551188]}
          zoom={17}
          style={{ height: "500px", width: "600px", borderRadius: "20px" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Page;
