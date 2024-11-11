import React from 'react'

export const Divider = ({
  width = '2',
  height = '12',
  ...restProps
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...restProps}
    width={width}
    height={height}
    viewBox='0 0 2 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M1.292 11.772H0.2V0.96H1.292V11.772Z' fill='#5F6C7B' />
  </svg>
)
