// import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  return (
      <div className="bg-[#260651] relative items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 justify-evenly hidden md:flex">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <img src="src\images\8years.png" alt="8 years" className="" />
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm/6 text-white">
            <strong className="font-semibold uppercase">
              Contact@markletech.com
            </strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline size-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <strong className="font-semibold uppercase">
              IN: +91-7982 332 070
            </strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline size-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            <strong className="font-semibold uppercase">
              USA: +1-628 277 4060 
            </strong>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <img src="src\images\socials.png" alt="" className="" />
        </div>
      </div>
  );
}
