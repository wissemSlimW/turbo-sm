import { Chat } from "@feature/chat";
import { Feeds } from "@feature/feeds";
import { Navbar } from "@feature/navbar";
import { Sidebar } from "@feature/sidebar";
import { Layout } from "@panel/layout";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { ErrorScreen, NotFoundPage } from "@panel/error-screen";
import { ROUTESNAMES } from "@repo/routes";
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
          <Route path={ROUTESNAMES.home} element={<Feeds />} />
          <Route path={"404"} element={<NotFoundPage />} />
          <Route path="*" element={<ErrorScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
