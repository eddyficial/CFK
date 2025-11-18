import * as React from 'react';

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="150"
      height="38"
      viewBox="0 0 150 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_104_2)">
        <path
          d="M37.8 0H0V4.2H37.8V0Z"
          fill="#E84444"
        />
        <path
          d="M37.8 6.39999H0V10.6H37.8V6.39999Z"
          fill="#E84444"
        />
        <path
          d="M26.8 12.9H0V17.1H26.8V12.9Z"
          fill="#E84444"
        />
        <path
          d="M26.8 19.3H0V23.5H26.8V19.3Z"
          fill="#E84444"
        />
        <path
          d="M37.8 25.8H0V30H37.8V25.8Z"
          fill="#E84444"
        />
        <path
          d="M37.8 32.3H0V36.5H37.8V32.3Z"
          fill="#E84444"
        />
      </g>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: 'pre' }}
        fontFamily="Inter"
        fontSize="12"
        fontWeight="bold"
        letterSpacing="0.05em"
      >
        <tspan x="45" y="11.5">CHAUFFEURS</tspan>
      </text>
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: 'pre' }}
        fontFamily="Inter"
        fontSize="12"
        fontWeight="bold"
        letterSpacing="0.05em"
      >
        <tspan x="45" y="23.5">KENYA</tspan>
      </text>
      <text
        fill="#E84444"
        xmlSpace="preserve"
        style={{ whiteSpace: 'pre' }}
        fontFamily="Inter"
        fontSize="12"
        fontWeight="bold"
        letterSpacing="0.05em"
      >
        <tspan x="45" y="35.5">FREIGHT</tspan>
      </text>
      <defs>
        <clipPath id="clip0_104_2">
          <rect width="37.8" height="36.5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
