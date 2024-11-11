import React from 'react'

export const ThumbsUp = ({
  width = '24',
  height = '24',
  ...restProps
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...restProps}
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M7.47998 18.3505L10.58 20.7505C10.98 21.1505 11.88 21.3505 12.48 21.3505H16.28C17.48 21.3505 18.78 20.4505 19.08 19.2505L21.48 11.9505C21.98 10.5505 21.08 9.35046 19.58 9.35046H15.58C14.98 9.35046 14.48 8.85046 14.58 8.15046L15.08 4.95046C15.28 4.05046 14.68 3.05046 13.78 2.75046C12.98 2.45046 11.98 2.85046 11.58 3.45046L7.47998 9.55046'
      stroke='#5F6C7B'
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
    <path
      d='M2.38 18.3504V8.55039C2.38 7.15039 2.98 6.65039 4.38 6.65039H5.38C6.78 6.65039 7.38 7.15039 7.38 8.55039V18.3504C7.38 19.7504 6.78 20.2504 5.38 20.2504H4.38C2.98 20.2504 2.38 19.7504 2.38 18.3504Z'
      stroke='#5F6C7B'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
