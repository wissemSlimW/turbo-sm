import { useLocation } from "react-router";

export const useActiveLink = () => {
  const { pathname } = useLocation();
  return pathname.split("/")[1];
};
