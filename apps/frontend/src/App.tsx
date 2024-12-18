import { AppContextProvider } from "@repo/contexts";
import { themes } from "@repo/styles";
import { ThemeProvider } from "react-jss";
import { Approutes } from "./AppRoutes";

const App = () => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={themes()}>
        <Approutes />
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default App;
