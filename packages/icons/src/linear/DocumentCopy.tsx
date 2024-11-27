export const DocumentCopy = ({
  width = "24",
  height = "24",
  ...restProps
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...restProps}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M17 13.9v3c0 4-1.6 5.6-5.6 5.6H7.6c-4 0-5.6-1.6-5.6-5.6v-3.8c0-4 1.6-5.6 5.6-5.6h3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M11.6 2.5h4M7 5.5c0-1.66 1.34-3 3-3h2.62m9.38 6v6.19c0 1.55-1.26 2.81-2.81 2.81m2.81-9h-3c-2.25 0-3-.75-3-3v-3l6 6Zm-5 5.4h-3.2c-2.4 0-3.2-.8-3.2-3.2V7.5l6.4 6.4Z"
    />
  </svg>
);
