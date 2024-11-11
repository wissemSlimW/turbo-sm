export const Like = ({
  width = '34',
  height = '34',
  ...restProps
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...restProps}
    width={width}
    height={height}
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11.8867 26.1955V11.8022C11.8867 11.2355 12.0567 10.683 12.3684 10.2155L16.2359 4.46383C16.845 3.54299 18.3609 2.89133 19.65 3.37299C21.0384 3.84049 21.9592 5.39883 21.6617 6.78716L20.925 11.4197C20.8684 11.8447 20.9817 12.2272 21.2225 12.5247C21.4634 12.7938 21.8175 12.9638 22.2 12.9638H28.0225C29.1417 12.9638 30.105 13.4172 30.6717 14.2105C31.21 14.9755 31.3092 15.9671 30.955 16.973L27.47 27.5838C27.0309 29.3405 25.1184 30.7713 23.22 30.7713H17.695C16.7459 30.7713 15.4142 30.4455 14.805 29.8363L12.9917 28.4338C12.2976 27.9096 11.8867 27.0738 11.8867 26.1955Z'
      fill='#2C84D8'
    />
    <path
      d='M7.38075 9.03711H5.92159C3.72575 9.03711 2.83325 9.88711 2.83325 11.9838V26.2354C2.83325 28.3321 3.72575 29.1821 5.92159 29.1821H7.38075C9.57659 29.1821 10.4691 28.3321 10.4691 26.2354V11.9838C10.4691 9.88711 9.57659 9.03711 7.38075 9.03711Z'
      fill='#2C84D8'
    />
  </svg>
)
