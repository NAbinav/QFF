"use client";
import Typed from "../components/Typing";

export default function Home() {
  return (
    <div className="Home">
      <h1 className="text-6xl max-sm:text-4xl">
        Welcome to <span className="heading ">Qiskit Fall Fest 2024</span>
      </h1>
      <Typed />
    </div>
  );
}
