import React, { useLayoutEffect } from "react";
import { AppContext } from "./appContext";
import { AppCtx } from "./type";
import { seedData } from "../seeds";

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [data, setData] = React.useState<AppCtx["data"]>({});

  useLayoutEffect(() => {
    // seedData().then((res) => setData(res));
  }, []);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
