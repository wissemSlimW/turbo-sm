export const Clap = ({
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
    <g clipPath='url(#clip0_8114_79566)'>
      <mask
        id='mask0_8114_79566'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='34'
        height='34'>
        <path d='M0 0H34V34H0V0Z' fill='white' />
      </mask>
      <g mask='url(#mask0_8114_79566)'>
        <path
          d='M2.43987 20.8467C2.43987 20.8467 1.1926 19.6916 2.34771 18.4435C3.50281 17.1971 4.75097 18.3531 4.75097 18.3531L10.5408 23.7161C10.4496 23.6302 10.9434 22.9297 10.8701 22.8617L2.83355 15.4183C2.83355 15.4183 1.58629 14.2632 2.74139 13.0169C3.89739 11.7687 5.14466 12.9247 5.14466 12.9247L12.7034 19.926C12.6855 19.9099 13.2483 19.272 13.2376 19.2621L4.4745 11.1451C4.4745 11.1451 3.22723 9.98998 4.38234 8.74272C5.53834 7.49635 6.7856 8.65145 6.7856 8.65145L15.5478 16.7685C15.5585 16.7775 16.1589 16.1744 16.1768 16.1914L7.98634 8.60493C7.98634 8.60493 6.73908 7.44982 7.89418 6.20256C9.05018 4.95619 10.2974 6.11129 10.2974 6.11129L18.9576 14.1326C21.5219 16.5081 22.0999 15.8845 22.0999 15.8845L19.7843 13.7398L17.11 11.2641C17.11 11.2641 15.8627 10.109 17.0187 8.86082C18.1747 7.61356 19.4211 8.76866 19.4211 8.76866L26.281 15.1231C30.4129 18.9508 30.6608 25.4045 26.8322 29.5373C23.0045 33.6701 16.5499 33.9161 12.4171 30.0893C12.1988 29.8871 11.8069 29.4961 11.8239 29.4773L11.7943 29.5113L2.43987 20.8467Z'
          fill='#958B88'
        />
        <path
          d='M5.03459 19.1026C5.03459 19.1026 3.78733 17.9475 4.94243 16.7003C6.09754 15.4521 7.3448 16.6072 7.3448 16.6072L13.1355 21.972C13.0434 21.8862 13.5382 21.1856 13.4648 21.1176L5.42828 13.6743C5.42828 13.6743 4.18101 12.5191 5.33612 11.2719C6.49122 10.0246 7.73849 11.1797 7.73849 11.1797L15.2972 18.1819C15.2802 18.1649 15.843 17.5279 15.8323 17.518L7.06922 9.4001C7.06922 9.4001 5.82196 8.24589 6.97707 6.99862C8.13217 5.75136 9.37943 6.90647 9.37943 6.90647L18.1416 15.0226C18.1532 15.0334 18.7527 14.4303 18.7706 14.4464L10.5811 6.85994C10.5811 6.85994 9.3338 5.70484 10.4889 4.45847C11.644 3.2112 12.8913 4.36631 12.8913 4.36631L21.5523 12.3885C24.1158 14.7632 24.6946 14.1395 24.6946 14.1395L22.3782 11.9948L19.7047 9.5191C19.7047 9.5191 18.4583 8.36399 19.6125 7.11673C20.7685 5.86947 22.0158 7.02457 22.0158 7.02457L28.8749 13.3781C33.0076 17.2058 33.2546 23.6604 29.4269 27.7923C25.5983 31.9251 19.1446 32.1712 15.0118 28.3435C14.7926 28.1422 14.4016 27.7512 14.4186 27.7333L14.3882 27.7673L5.03459 19.1026Z'
          fill='#FFCEB7'
        />
        <path
          d='M22.8525 6.67363C22.6854 6.67336 22.5217 6.6263 22.38 6.53779C22.2383 6.44929 22.1242 6.32286 22.0506 6.17284C21.977 6.02281 21.9469 5.85519 21.9637 5.68894C21.9805 5.5227 22.0435 5.36448 22.1456 5.23221L24.8102 1.783C24.9551 1.59518 25.1688 1.47264 25.4041 1.44236C25.6395 1.41207 25.8772 1.47651 26.065 1.6215C26.2528 1.76649 26.3754 1.98015 26.4057 2.21549C26.436 2.45082 26.3715 2.68854 26.2265 2.87637L23.5611 6.32558C23.4777 6.43413 23.3703 6.522 23.2474 6.58236C23.1245 6.64272 22.9894 6.67395 22.8525 6.67363ZM17.8947 7.15768C17.6574 7.15768 17.4299 7.06342 17.2621 6.89562C17.0943 6.72782 17 6.50024 17 6.26295V1.78926C17 1.55196 17.0943 1.32438 17.2621 1.15659C17.4299 0.988791 17.6574 0.894525 17.8947 0.894525C18.132 0.894525 18.3596 0.988791 18.5274 1.15659C18.6952 1.32438 18.7895 1.55196 18.7895 1.78926V6.26295C18.7895 6.50024 18.6952 6.72782 18.5274 6.89562C18.3596 7.06342 18.132 7.15768 17.8947 7.15768ZM26.3205 9.54395C26.1368 9.54388 25.9576 9.48724 25.8073 9.38174C25.657 9.27624 25.5428 9.127 25.4803 8.95431C25.4401 8.84399 25.422 8.72681 25.4271 8.60949C25.4322 8.49217 25.4603 8.37699 25.5099 8.27055C25.5595 8.16411 25.6296 8.06849 25.7162 7.98915C25.8028 7.90981 25.9041 7.84831 26.0145 7.80816L30.1151 6.31663C30.2255 6.27644 30.3428 6.25841 30.4602 6.26355C30.5776 6.26869 30.6929 6.29691 30.7994 6.34659C30.9059 6.39628 31.0016 6.46645 31.081 6.55312C31.1604 6.63978 31.2219 6.74123 31.2621 6.85168C31.3023 6.96213 31.3203 7.07941 31.3152 7.19683C31.31 7.31425 31.2818 7.42951 31.2321 7.53602C31.1825 7.64254 31.1123 7.73822 31.0256 7.81761C30.939 7.89701 30.8375 7.95855 30.7271 7.99874L26.6265 9.48937C26.5284 9.5252 26.4249 9.54367 26.3205 9.54395Z'
          fill='#FFAC33'
        />
      </g>
    </g>
    <defs>
      <clipPath id='clip0_8114_79566'>
        <rect width='34' height='34' fill='white' />
      </clipPath>
    </defs>
  </svg>
)