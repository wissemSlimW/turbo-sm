import { createContext, useContext } from "react";
import { AppCtx } from "./type";

const generateAppCtxDefaultVAlues = (): AppCtx["data"] => {
    
  return {
    comments: [],
    media: [],
    posts: [],
    users: [],
  };
};
export const AppContext = createContext<AppCtx>({
  data: generateAppCtxDefaultVAlues(),
});
export const useAppContext =()=> useContext(AppContext);
