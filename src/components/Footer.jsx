import { Typography } from "@material-tailwind/react";
import React from "react";

const links = [
  {
    title: "Product",
    items: [
      "Employee Database",
      "Payroll",
      "Absences",
      "Time Tracking",
      "Shift Planner",
      "Recruiting",
    ],
  },
  {
    title: "Information",
    items: ["FAQ", "Blog", "Support", "News"],
  },
  {
    title: "Company",
    items: ["About Us", "Careers", "Contact Us", "Lift Media"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#330073]">
        <div className="w-full max-w-screen-3xl p-4 py-6 md:py-8">
          <div className="md:grid md:grid-cols-2 ms-3">
            <div className="my-5 mx-4 flex flex-col justify-center items-center">
              <a href="#">
                <img
                  src="src\images\markle-logo-white-text.webp"
                  class="h-14 md:h-20"
                  alt="MarkleTech Logo"
                />
              </a>
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
                        <a href="#" class="hover:text-white">
                          {item}
                        </a>
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
              <a href="" className="hover:text-white">Terms</a>
              <a href="" className="hover:text-white">Privacy</a>
              <a href="" className="hover:text-white">Cookies</a>
            </div>
            <div class="flex mt-4 sm:justify-center sm:mt-2">
              <a
                href="#"
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
                href="#"
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
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
