import React from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { GrLinkNext } from "react-icons/gr";
// Dynamically import MapContainer and disable SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="w-screen p-10 text-base">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between h-full">
        {/* Contact Us Section */}
        <div className="w-full flex flex-col md:flex-row justify-between h-full">
          {/* Left - Contact Info */}
          <div className="w-full md:w-1/3 p-4 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 heading">CONTACT US</h2>
            <h3 className="font-semibold font-xl mb-4">STUDENT COORDINATOR</h3>
            <div className="flex gap-7">
              <div>
                <div className="mb-4">
                  <p>Nandan Patel</p>
                  <p>9099906520</p>
                </div>
                <div className="mb-4">
                  <p>Ashwin Sivakumar</p>
                  <p>6360910426</p>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <p>Hari Shankar K Nair</p>
                  <p>6282382764</p>
                </div>
                <div className="mb-4">
                  <p>Rithika N</p>
                  <p>9345459249</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle - Map */}
          <div className="w-full md:w-1/3 p-4 flex justify-center">
            <MapContainer
              center={[12.8422129, 80.1551188]}
              zoom={16}
              style={{ height: "300px", width: "100%", borderRadius: "20px" }}
              scrollWheelZoom={false}
              className="flex snap-center align-middle justify-center self-center"
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>

          {/* Right - Get in Touch */}
          <div className="w-full md:w-1/3 p-4  shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:text-black"
              />
              <a
                className="p-4 h-max bg-blue-500 rounded-r-lg flex justify-center self-center snap-center"
                href="mailto:quantumplators@gmail.com"
              >
                <GrLinkNext />
              </a>
            </div>
            <div className="flex flex-col mt-4 gap-5">
              <a
                href="https://www.instagram.com/the_quantumplators"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 "
              >
                <FaInstagram size={30} className="hover:text-pink-500" />{" "}
                @the_quantumplators
              </a>
              <a
                href="http://www.linkedin.com/company/quantumplators"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 "
              >
                <FaLinkedinIn size={30} className="hover:text-blue-500" />{" "}
                quantumplators
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            &copy; The Quantumplators 2023-24. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
