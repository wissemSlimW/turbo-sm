import React from "react"

export const AddItem = ({ width = '24', height = '24',...restProps}: React.SVGProps<SVGSVGElement>) =>
    <svg  {...restProps } width={width} height={height}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path stroke="currentColor"  d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path stroke="currentColor"  d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path stroke="currentColor"  d="M14.87 15H18.13"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path stroke="currentColor"  d="M16.5 16.6301V13.3701"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
