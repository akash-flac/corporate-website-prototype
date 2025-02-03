import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Banner from "./Banner";
import NavBar from "./NavBar";

export default function Hero({ bgImage, heading, content }) {
  return (
    <>
      <div
        className={`h-screen bg-cover bg-center justify-start text-white`}
        style={{
          // backgroundImage: "url('src/images/hero-image.png')",
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* the below div is for overlay, "relative z-10" has been added to navbar so that text remains above */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <Banner />
        <NavBar />
        <div className="relative isolate px-10 max-w-5xl py-10 sm:py-32 lg:py-56 text-left">
          <h1 className="text-2xl tracking-normal uppercase sm:text-5xl md:text-6xl lg:text-7xl font-black">
            {heading}
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
            {content}
          </p>
        </div>
      </div>
    </>
  );
}
