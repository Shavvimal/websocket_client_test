import React from "react";

function Logo({ classname }) {
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 381.4 416.44"
    >
      <defs>
        <radialGradient
          id="a"
          cx={9.68}
          cy={87.88}
          r={449.83}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#FE9D01" />
          <stop offset={1} stopColor="#BE3941" />
        </radialGradient>
        <radialGradient id="b" cx={11.24} cy={89.04} r={447.6} xlinkHref="#a" />
        <radialGradient id="c" cx={9.2} cy={87.41} r={451.09} xlinkHref="#a" />
      </defs>
      <path
        d="M183 0C124.34 29.33 64.66 58.67 6 88c60.33 30.16 120.17 60.84 180.5 91 58.66-29.33 117.84-59.17 176.5-88.5V90C302.67 60 243.33 30 183 0Zm104 90-101.5 51L82 89.5v-1l100.5-51 104.5 52Z"
        fillRule="evenodd"
        fill="url(#a)"
      />
      <path
        d="M368 100.13V320l-37-29.6V166.23L229 217v131.84l97.3-48.65 55.1 43.69c-19.4 9.57-27.4 13.74-47.65 23.83-5.79-4.84-12-9.68-17.88-14.4-40.53 20.19-83.07 42.95-123.61 63.13.17-75.78.09-153.47 0-229 58.25-29.12 117.5-58.19 175.74-87.31Z"
        fillRule="evenodd"
        fill="url(#b)"
      />
      <path
        d="M0 98.06v227.13c60 29.91 120 61.34 180 91.25V187.31Zm142 250.38L38 296.69V165.06l104 51.75Z"
        fillRule="evenodd"
        fill="url(#c)"
      />
    </svg>
  );
}

export default Logo;
