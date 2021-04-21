import React from "react";
import './Loader.css';

function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16.5"
      viewBox="0 0 10 16.5"
      className="loader"
    >
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path
            strokeWidth="5.58"
            d="M.2 9.74c-.2.3.06.8.53.69l3.62-.76c.34-.07.58.33.5.57l-1.64 5.61c-.08.26.13.57.43.58.16 0 .3-.05.41-.22 2.16-3.43 4.18-6.76 5.77-9.78.18-.3-.1-.75-.45-.68-1.18.23-2.42.46-3.63.75-.53.12-.7-.3-.65-.58C5.43 4.01 6 2.28 6.42.65a.44.44 0 00-.27-.52c-.44-.17-.59.2-.64.27C3.69 3.55 1.76 6.98.19 9.74z"
          ></path>
        </clipPath>
      </defs>
      <path
        fill="none"
        stroke="#b92d3a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M7.22-1.53L1.32 9.6l7.17-2.72L2.78 18"
        className="path"
        clipPath="url(#a)"
        opacity="0.89"
      ></path>
    </svg>
  );
}

export default Loader;