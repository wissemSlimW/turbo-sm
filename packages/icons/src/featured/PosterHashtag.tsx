export const PosterHashtag = ({
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
    <g id='hashtag-1'>
      <path
        id='Vector'
        d='M10 3L8 21'
        stroke='#FFC300'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        id='Vector_2'
        d='M16 3L14 21'
        stroke='#FFC300'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        id='Vector_3'
        d='M3.5 9H21.5'
        stroke='#FFC300'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        id='Vector_4'
        d='M2.5 15H20.5'
        stroke='#FFC300'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
)
