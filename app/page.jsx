"use client";
import React from "react";
import dynamic from "next/dynamic";
import Home from "@/components/Home";
import Partner from "@/components/partners";
import About from "@/components/about";
import Table from "@/components/table";
import Speaker from "@/components/speaker";
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
      <Partner />
      <div className="flex gap-10 flex-col justify-center my-10" id="events">
        <p className="text-6xl p-10 heading">SCHEDULE</p>
        <div className="text-lg m-12 text-justify font-thin">
          Qiskit Fall Fest is the world’s largest collection of student-run
          quantum computing events. As one of the 50 sponsored international
          universities selected to host it, we bring together a collection of
          talented quantum enthusiasts along with IBM Quantum members to mark a
          celebration of the advances that quantum computing has made in the
          past year, with experienced quantum scientists and budding young
          quantum enthusiasts collaborating to showcase their talents at the
          workshops and hackathons at the VIT Chennai campus. With open arms, we
          welcome you to the event and are hoping to see you there!!
        </div>
        <div className="flex  justify-center">
          <Table></Table>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <Speaker />
      </div>
      {/* <div className="flex justify-center my-10">
        <Poster />
      </div> */}
      <div className="flex flex-col snap-center align-middle justify-center self-center gap-5 text ">
        <div className="text-5xl heading text-center max-sm:text-3xl">MAP</div>
        <div className="flex justify-around gap-16">
          <div className="text-lg  max-sm:text-3xl">
            <p className="text-lg">Address:</p>
            <br />
            Vellore Institute of Technology - Chennai, <br />
            Kelambakkam - Vandalur Rd, Rajan Nagar,
            <br /> Chennai, Tamil Nadu 600127
          </div>
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
          <div className="text-lg text-justify max-sm:text-3xl w-96">
            <p className="text-lg text-justify">Contact:</p>
            <br />
            9876543210
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
