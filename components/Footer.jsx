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
            <div className="mb-4">
              <h3 className="font-semibold font-xl mb-4">
                STUDENT COORDINATOR
              </h3>
              <p>Student1</p>
              <p>Email: stu1@gmail.com</p>
              <p>Phone: 9876543210</p>
            </div>
            <div className="mb-4">
              <p>Student2</p>
              <p>Email: stu2@gmail.com</p>
              <p>Phone: 9876543210</p>
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
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-500"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500"
              >
                <FaLinkedinIn size={30} />
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
