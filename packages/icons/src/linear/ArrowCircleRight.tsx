import React from 'react'
export const ArrowCircleRight = ({ width = '25', height = '24',...restProps}: React.SVGProps<SVGSVGElement>) => (
  <svg {...restProps} width={width} height={height} viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path stroke="currentColor" 
      d='M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path stroke="currentColor" 
      d='M11.24 15.53L14.76 12L11.24 8.46997'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
