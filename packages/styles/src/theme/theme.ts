import { BORDER_RADIUSES } from "./borderRadiuses";
import { BOREDERS } from "./borders";
import { COLORS } from "./colors";
import { SPACINGS } from "./spacings";
import { Theme } from "./type";
import { TYPOGRAPHY } from "./typography";

export const themes = (): Theme => {
  return {
    borderRadiuses: BORDER_RADIUSES,
    borders: BOREDERS,
    colors: COLORS,
    fontFamily: "Poppins",
    spacings: SPACINGS,
    typography: TYPOGRAPHY,
  };
};