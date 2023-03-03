import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import { default as SvgComponent } from "./assets/404";

const About = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/* Headers */}

        <main className="h-screen w-full max-w-6xl pt-20  flex flex-col justify-center items-center mx-auto">
          <div className="w-full h-full flex items-center p-5  overflow-hidden relative">
            <div className="flex flex-col md:flex-row h-full w-full text-white relative md:flex items-center text-center md:text-left ">
              <SvgComponent />
              <div className="w-full">
                <div className="mb-10 font-light">
                  <h1 className="font-[Jura-Bold] uppercase text-3xl lg:text-5xl text-orange-300 mb-10 select-none">
                    You seem to be lost!
                  </h1>
                  <p className="text-white">
                    The page you're looking for isn't available.
                    <br />
                    Try searching again or use the button below to go back home.
                  </p>
                </div>
                <div className="mb-20 md:mb-0">
                  <Link
                    to="/#"
                    className="btn-sm text-white  hover:bg-orange-500 "
                  >
                    <svg
                      className="w-3 h-3 fill-current text-white flex-shrink-0 mr-3 mb-0.5"
                      viewBox="0 0 12 12"
                      transform="rotate(180)"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                    <span>Go Back</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
