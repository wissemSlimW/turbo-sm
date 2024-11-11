export const PosterGallery = ({
  width = '25',
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
    <g id='gallery'>
      <path
        id='Vector'
        d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
        stroke='#8BBF07'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        id='Vector_2'
        d='M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z'
        stroke='#8BBF07'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        id='Vector_3'
        d='M2.67004 18.9505L7.60004 15.6405C8.39004 15.1105 9.53004 15.1705 10.24 15.7805L10.57 16.0705C11.35 16.7405 12.61 16.7405 13.39 16.0705L17.55 12.5005C18.33 11.8305 19.59 11.8305 20.37 12.5005L22 13.9005'
        stroke='#8BBF07'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
)
