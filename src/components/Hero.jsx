"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Banner from "./Banner";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center justify-start text-white"
        style={{
          backgroundImage: "url('src/images/hero-image.png')",
        }}
      >
        <Banner />
        <NavBar />
        <div className="relative isolate px-10 max-w-5xl py-10 sm:py-32 lg:py-56 text-left">
          <h1 className="text-2xl tracking-normal uppercase sm:text-5xl md:text-6xl lg:text-7xl font-black">
            Transforming ideas into digital solutions
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            As a leading software development establishment, we turn complex
            challenges into innovative digital solutions. Be it website
            development or app development, we empower organizations to
            innovate, automate, and grow in today’s fast-paced digital
            ecosystem.
          </p>
        </div>
      </div>
    </>
  );
}
