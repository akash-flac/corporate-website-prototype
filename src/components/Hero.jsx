import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Banner from "./Banner";
import NavBar from "./NavBar";

export default function Hero({ bgImage, heading, content, bgVideo }) {
  return (
    <>
      <div className="relative h-screen text-white overflow-hidden">
        {/* Background: Video or Image */}
        {bgVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10">
          <Banner />
          <NavBar />
          <div className="px-10 max-w-5xl py-10 sm:py-32 lg:py-56 text-left">
            <h1 className="text-2xl tracking-normal uppercase sm:text-5xl md:text-6xl lg:text-7xl font-black">
              {heading}
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
