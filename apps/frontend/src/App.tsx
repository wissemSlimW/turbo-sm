import { Feeds } from "@feature/feeds";
import { Layout } from "@panel/layout";
import { AppContextProvider } from "@repo/contexts";
import { themes } from "@repo/styles";
import { ThemeProvider } from "react-jss";

const App = () => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={themes()}>
        <Layout
          header={<div style={{ width: "100%", height: "100%" }}></div>}
          body={<Feeds />}
          endSideBar={<div style={{ width: "100%", height: "100%" }}></div>}
          startSideBar={
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            ></div>
          }
          midLayer={
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            ></div>
          }
        />
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default App;
