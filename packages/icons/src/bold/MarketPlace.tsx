export const MarketPlace = ({
  width = "24",
  height = "24",
  ...restProps
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...restProps}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M4.581 1c-1.38 0-2.597.905-2.993 2.227l-.816 2.72A6.45 6.45 0 0 0 .5 7.8c0 1.425.573 2.716 1.501 3.655L2 11.5v4.57c0 1.355 0 2.471.119 3.355.124.928.396 1.747 1.053 2.403.656.657 1.475.928 2.403 1.053.884.12 2 .119 3.354.119h6.142c1.354 0 2.47 0 3.354-.119.928-.125 1.747-.396 2.403-1.053.657-.656.928-1.475 1.053-2.403.12-.884.119-2 .119-3.354V11.5l-.001-.045A5.183 5.183 0 0 0 23.5 7.8a6.47 6.47 0 0 0-.272-1.854l-.816-2.719A3.125 3.125 0 0 0 19.42 1H4.58zM20 12.716V16c0 1.442-.002 2.424-.1 3.159-.096.706-.263 1.033-.486 1.255-.222.223-.55.39-1.255.485-.551.074-1.24.094-2.159.1V17.5a2.5 2.5 0 0 0-2.5-2.5h-3A2.5 2.5 0 0 0 8 17.5v3.498c-.918-.005-1.608-.025-2.159-.099-.706-.095-1.033-.262-1.255-.485-.223-.222-.39-.55-.485-1.255C4.002 18.424 4 17.443 4 16v-3.284A5.192 5.192 0 0 0 5.7 13a5.18 5.18 0 0 0 3.15-1.062A5.18 5.18 0 0 0 12 13a5.18 5.18 0 0 0 3.15-1.062A5.18 5.18 0 0 0 18.3 13a5.2 5.2 0 0 0 1.7-.284zM14 21h-4v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V21z"></path>{" "}
  </svg>
);
