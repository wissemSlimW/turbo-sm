export const PosterAttachSquare = ({
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
    <g id='attach-square'>
      <path
        id='Vector'
        d='M12.1999 11.8002L10.7899 13.2102C10.0099 13.9902 10.0099 15.2602 10.7899 16.0402C11.5699 16.8202 12.8399 16.8202 13.6199 16.0402L15.8399 13.8202C17.3999 12.2602 17.3999 9.73023 15.8399 8.16023C14.2799 6.60023 11.7499 6.60023 10.1799 8.16023L7.75988 10.5802C6.41988 11.9202 6.41988 14.0902 7.75988 15.4302'
        stroke='#EF4565'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        id='Vector_2'
        d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
        stroke='#EF4565'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
)
