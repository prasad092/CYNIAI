import React from "react";

export default function WhatWeDo() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden
    bg-gradient-to-r from-[#081226] to-[#1a4b66]">

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center">

        {/* LEFT TEXT */}
        <div className="md:w-1/2 text-white space-y-6">
          <h2 className="text-6xl font-bold leading-tight">
            What We <br /> Do
          </h2>

          <p className="text-lg text-gray-300 max-w-md">
            We design, develop, and deploy powerful AI solutions to help
            businesses automate, innovate, and scale faster.
          </p>
        </div>

        {/* RIGHT ANIMATED DOT BLOB */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="services-blob" />
        </div>

      </div>
    </section>
  );
}