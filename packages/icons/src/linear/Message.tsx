import React from 'react'
export const Message = ({ width = '24', height = '24',...restProps}: React.SVGProps<SVGSVGElement>) =>
    <svg {...restProps} width={width} height={height}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="currentColor"  d="M8.5 19.001H8C4 19.001 2 18.001 2 13.001V8.00098C2 4.00098 4 2.00098 8 2.00098H16C20 2.00098 22 4.00098 22 8.00098V13.001C22 17.001 20 19.001 16 19.001H15.5C15.19 19.001 14.89 19.151 14.7 19.401L13.2 21.401C12.54 22.281 11.46 22.281 10.8 21.401L9.3 19.401C9.14 19.181 8.77 19.001 8.5 19.001Z"  strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path stroke="currentColor"  d="M15.9966 11.001H16.0055"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path stroke="currentColor"  d="M11.9956 11.001H12.0046"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path stroke="currentColor"  d="M7.99463 11.001H8.00361"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    