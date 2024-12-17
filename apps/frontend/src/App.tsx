import { Chat } from "@feature/chat";
import { Feeds } from "@feature/feeds";
import { Navbar } from "@feature/navbar";
import { Sidebar } from "@feature/sidebar";
import { Layout } from "@panel/layout";
import { AppContextProvider } from "@repo/contexts";
import { themes } from "@repo/styles";
import { ThemeProvider } from "react-jss";

const App = () => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={themes()}>
        <Layout
          header={<Navbar />}
          body={<Feeds />}
          endSideBar={<Chat />}
          startSideBar={<Sidebar />}
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
