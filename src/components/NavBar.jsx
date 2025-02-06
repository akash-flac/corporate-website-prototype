import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { ModeToggle } from "./DartkModeToggler";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  EllipsisHorizontalIcon,
  FingerPrintIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  LightBulbIcon,
  PencilSquareIcon,
  PercentBadgeIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  BriefcaseIcon,
  CloudIcon,
  CloudLightningIcon,
  Code2,
  CodeIcon,
  HandshakeIcon,
  LucideCloudLightning,
  MegaphoneIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { NavLink, Route } from "react-router";

const about = [
  {
    name: "About Company",
    description:
      "Learn more about who we are, what we stand for, and how we bring value to our customers",
    href: "/about-company",
    icon: InformationCircleIcon,
  },
  {
    name: "Mission",
    description:
      "Discover our goals, values, and commitment to making a positive impact in our industry and beyond",
    href: "/our-mission",
    icon: LightBulbIcon,
  },
  {
    name: "Client Reviews",
    description:
      "Hear directly from our satisfied clients about their experiences working with us",
    href: "/client-reviews",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "FAQs",
    description:
      "Find quick answers to commonly asked questions and get the information you need effortlessly",
    href: "/FAQs",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Careers",
    description:
      "Explore exciting career opportunities and join our team to shape the future together",
    href: "/careers",
    icon: BriefcaseIcon,
  },
  {
    name: "Become Our Agent",
    description:
      "Partner with us as an agent and help bring our solutions to a broader audience",
    href: "/become-our-agent",
    icon: HandshakeIcon,
  },
];

const services = [
  {
    name: "Software Development",
    description:
      "Custom software solutions tailored to meet your unique business needs and challenges",
    href: "/services/software-development",
    icon: Code2,
  },
  {
    name: "UI/UX Design",
    description:
      "Craft visually stunning and user-friendly designs to enhance user experience and engagement",
    href: "#",
    icon: PencilSquareIcon,
  },
  {
    name: "Digital Marketing",
    description:
      "Boost your online presence and grow your business with targeted and effective marketing strategies",
    href: "#",
    icon: MegaphoneIcon,
  },
  {
    name: "Mobile App Development",
    description:
      "Build high-performance mobile applications for iOS and Android platforms to expand your reach",
    href: "#",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "DevOps Consultation",
    description:
      "Streamline your development process with our DevOps practices to ensure efficient delivery and scalability",
    href: "#",
    icon: Cog6ToothIcon,
  },
  {
    name: "MVP Development",
    description:
      "Quickly bring your ideas to life with minimum viable product (MVP) development services",
    href: "#",
    icon: RocketLaunchIcon,
  },
  {
    name: "Web Development",
    description:
      "Create fast, secure, and scalable websites tailored to your business goals and user needs",
    href: "#",
    icon: GlobeAltIcon,
  },
  {
    name: "e-commerce",
    description:
      "Build seamless and feature-rich online stores to deliver exceptional shopping experiences",
    href: "#",
    icon: ShoppingBagIcon,
  },
  {
    name: "Low Code - No Code",
    description:
      "Empower your team with low-code and no-code solutions to develop apps faster and more efficiently",
    href: "#",
    icon: LucideCloudLightning,
  },
  {
    name: "Testing and QA",
    description:
      "Ensure your product's quality with thorough testing and quality assurance services",
    href: "#",
    icon: CheckBadgeIcon,
  },
  {
    name: "SaaS Products",
    description:
      "Develop scalable and user-friendly SaaS applications to meet modern business demands",
    href: "#",
    icon: CloudIcon,
  },
  {
    name: "See All Services",
    description:
      "Explore the full range of services we offer to help your business thrive",
    href: "/services",
    icon: EllipsisHorizontalIcon,
  },
];

const industries = [
  {
    name: "Finance & FinTech",
    // description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Travel & Hospitality",
    // description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Real Estate & Construction",
    // description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Health & Wellness",
    // description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Transportation & Logistics",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Professional services",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Media & Entertainment",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Retail & e-Commerce",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Education",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Manufacturing",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Telecommunications",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "View All Industries",
    // description: "Build strategic funnels that will convert",
    href: "/industries",
    icon: EllipsisHorizontalIcon,
  },
];

const solutions = [
  {
    name: "ERP",
    // description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "e-learning",
    // description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "CRM",
    // description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Operations Management System",
    // description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "CMS",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "e-Commerce",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Supply Chain Management",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Web Portals",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "OTT Platform",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Fleet Management",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Financial Management",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Project Management System",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Human Resources Management System",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Hospital Management System",
    // description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "View All Products",
    // description: "Build strategic funnels that will convert",
    href: "/our-products",
    icon: EllipsisHorizontalIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 lg:px-8 relative z-10 bg-black"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Markle Tech</span>
            <img
              alt=""
              src="src\images\markle-tech-new-logo.png"
              className="h-8 md:h-10 lg:h-12 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-100">
              About
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-10 top-full z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="grid grid-cols-2 gap-4 p-4">
                {about.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      {/* {item.icon} */}
                      {item.icon ? (
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      ) : (
                        <Code2
                          aria-hidden="true"
                          className="size-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      )}
                    </div>
                    <div className="flex-auto">
                      <NavLink
                        to={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </NavLink>
                      <p className="mt-1 text-xs text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-100">
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-24 top-full z-10 mt-3 w-screen max-w-3xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="grid grid-cols-3 gap-4 p-5">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      {/* <p className="mt-1 text-xs text-gray-600">
                        {item.description}
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-lg font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-100">
              Industries
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-56 top-full z-10 mt-3 w-screen max-w-3xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="grid grid-cols-3 gap-4 p-5">
                {industries.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-100">
              Solutions
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute mt-2 w-screen z-10 overflow-hidden -left-96 max-w-3xl rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="grid grid-cols-3 gap-4 p-5">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-2 text-lg hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/pricing" className="text-lg font-semibold text-gray-100">
            Pricing
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/contact-us" className="text-lg font-semibold text-gray-100">
            Contact Us
          </a>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              {/* <span className="sr-only"></span> */}
              <img
                alt=""
                src="src\images\markle-logo-black-text.svg"
                className="h-8 md:h-10 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-black"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    About
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...about, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Industries
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...industries, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Solutions
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...solutions, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-lg/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default NavBar;
