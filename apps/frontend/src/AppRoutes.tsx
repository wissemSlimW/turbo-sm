import { Chat } from "@feature/chat";
import { Feeds } from "@feature/feeds";
import { Navbar } from "@feature/navbar";
import { Sidebar } from "@feature/sidebar";
import { Layout } from "@panel/layout";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { ErrorScreen } from "@panel/error-screen";
export const Approutes = () => {
  const routerLayout = () => {
    return (
      <Layout
        header={<Navbar />}
        body={<Outlet />}
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
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={routerLayout()}>
          <Route path="" element={<Feeds />} />
          <Route path="*" element={<ErrorScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
