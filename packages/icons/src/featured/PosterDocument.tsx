export const PosterDocument = ({
  width = '50',
  height = '50',
  ...restProps
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...restProps}
    width={width}
    height={height}
    viewBox='0 0 50 50'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'>
    <rect width='50' height='50' fill='url(#pattern0)' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
        <use xlinkHref='#image0_13075_43911' transform='scale(0.00195312)' />
      </pattern>
      <image
        id='image0_13075_43911'
        width='512'
        height='512'
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
)
