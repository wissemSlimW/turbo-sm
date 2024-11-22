import { Gamepad as Bold } from "../bold";
import { Gamepad as Linear } from "../linear";
import { makeMultIcon } from "../multi-icon";

export const Gamepad = makeMultIcon({
  bold: <Bold />,
  linear: <Linear />,
});
