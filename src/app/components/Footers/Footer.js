import { Typography, useTheme } from '@mui/material';
import React from 'react';

export default function Footer() {
  const theme = useTheme();

  return (
    <>
      <footer
        className="relative pt-8 pb-6"
        style={{ background: theme.palette.background.default }}
      >
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            style={{ bottom: '-1px' }}
            className="absolute overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current"
              style={{ color: theme.palette.background.default }}
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <Typography variant="h4" className="text-3xl font-semibold">
                Let's keep in touch!
              </Typography>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-instagram-square"></i>
                </button>
                <button
                  className="bg-white text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-x-twitter"></i>
                </button>
                <button
                  className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-youtube"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-vimeo"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <Typography
                    variant="h6"
                    className="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                  >
                    KONTAKT
                  </Typography>
                  <ul className="list-unstyled">
                    <li>
                      <Typography
                        variant="p"
                        className="text-blueGray-600 font-semibold block pb-2 text-sm"
                      >
                        CDSH - Contemporary Dance School Hamburg GmbH
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="p"
                        className="text-blueGray-600 font-semibold block pb-2 text-sm"
                      >
                        Stresemannstraße 374 b in der »Alten Dosenfabrik«
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="p"
                        className="text-blueGray-600 font-semibold block pb-2 text-sm"
                      >
                        22761 Hamburg
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="p"
                        className="text-blueGray-600 font-semibold block pb-2 text-sm"
                      >
                        Tel. +49 (0)40 41924560
                      </Typography>
                      <Typography
                        variant="p"
                        className="text-blueGray-600 font-semibold block pb-2 text-sm"
                      >
                        info@cdsh.de
                      </Typography>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <Typography
                    variant="h6"
                    className="block uppercase text-blueGray-500 text-sm font-semibold mb-2"
                  >
                    Other Links
                  </Typography>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Impressum
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Datenschutz
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} by{' '}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  CDSH
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
