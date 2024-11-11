import { BorderRadius } from "./borderRadiuses";
import { Border } from "./borders";
import { Colors } from "./colors";
import { Spacings } from "./spacings";
import { Typography } from "./typography";

export type Theme = {
  colors: Colors;
  spacings: Spacings;
  borders: Border;
  borderRadiuses: BorderRadius;
  typography: Typography;
  fontFamily: "Poppins";
};
