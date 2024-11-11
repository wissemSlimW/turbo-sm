export const joinClassNames = (...classNames: (string | false | undefined)[]) =>
  classNames.filter((x) => x).join(" ");
