"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="h-screen bg-cover bg-center flex justify-start text-white"
      style={{
        backgroundImage: "url('src/images/hero-image.png')",
      }}
    >
      <div className="relative isolate px-10 max-w-5xl py-56 sm:py-48 lg:py-56 text-left">
        {/* <div className=""> */}
          <h1 className="text-5xl tracking-normal uppercase sm:text-6xl md:text-7xl lg:text-8xl font-black">
            Data to enrich your online business
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates similique quidem ex, rerum numquam qui minus, delectus,
            dolore aut quae! Eius nulla, corrupti quia consectetur quod totam
            veritatis facilis.
          </p>
        {/* </div> */}
      </div>
    </div>
  );
}
