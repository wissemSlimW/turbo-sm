import { Message as Bold } from "../bold";
import { Message as Linear } from "../linear";
import { makeMultIcon } from "../multi-icon";

export const Message = makeMultIcon({
  bold: <Bold />,
  linear: <Linear />,
});
