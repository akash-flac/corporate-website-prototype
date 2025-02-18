import { Typography } from "@material-tailwind/react";
import React from "react";
import { Logo } from "../data/home/homepage";
import { Link } from "react-router";

const links = [
  {
    title: "Products",
    items: [
      { name: "ERP", href: "/solutions/erp" },
      { name: "CRM", href: "/solutions/crm" },
      { name: "e-commerce", href: "/solutions/e-commerce" },
      { name: "OTT Platform", href: "/solutions/erp" },
    ],
  },
  {
    title: "Information",
    items: [
      { name: "FAQs", href: "/about/faqs" },
      { name: "Blogs", href: "/*" },
      { name: "Support", href: "/contact-us" },
      // { name: "News", href: "/*" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Us", href: "/about/company" },
      { name: "Careers", href: "/about/careers" },
      { name: "Contact Us", href: "/contact-us" },
      // { name: "Lift Media", href: "/*" },
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#330073]">
        <div className="w-full max-w-screen-2xl p-2 py-6 md:py-8">
          <div className="md:grid md:grid-cols-2 ms-3 md:ms-0">
            <div className="my-5 mx-4 flex flex-col justify-center items-center">
              <Link to="/">
                <img src={Logo} class="h-14 md:h-20" alt="MarkleTech Logo" />
              </Link>
              <div className="md:my-6">
                <hr class="w-full my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
                <p className="text-white text-justify max-w-lg">
                  Subscribe to our newsletter and unlock a world of exclusive
                  benefits. Be the first to know about our latest products,
                  special promotions, and exciting updates.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 mx-4 sm:place-content-center md:mx-5 md:place-items-start">
              {links.map((link, index) => (
                <div key={index}>
                  <h2 class="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    {link.title}
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    {link.items.map((item, i) => (
                      <li key={i} class="mb-2">
                        <Link to={item.href} class="hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
          <div class="flex flex-col items-center sm:flex md:flex-row sm:items-center sm:justify-around">
            <Typography
              variant="small"
              className="mb-2 text-center font-normal text-white md:mb-0"
            >
              &copy; {currentYear} <a href="#">Markle Tech</a>. All Rights
              Reserved.
            </Typography>

            <div className="flex gap-8 text-gray-400 font-light">
              <a href="" className="hover:text-white">
                Terms
              </a>
              <a href="" className="hover:text-white">
                Privacy
              </a>
              <a href="" className="hover:text-white">
                Cookies
              </a>
            </div>
            <div class="flex mt-4 sm:justify-center sm:mt-2">
              <a
                href="https://www.facebook.com/markletechandmedia/"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.instagram.com/markletechandmedia/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill-rule="evenodd"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Instagram page</span>
              </a>
              <a
                href="https://in.linkedin.com/company/markle-tech-and-mediaagency"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                >
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                </svg>
                <span className="sr-only">LinkedIn page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
