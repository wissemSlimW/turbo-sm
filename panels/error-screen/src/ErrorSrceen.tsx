import { ROUTESNAMES } from "@repo/routes";
import { useMemo } from "react";
import { useLocation } from "react-router";
import { ComingSoon, NotFound } from "./components";
import { LangProvider } from "@repo/translation";
import { LANG } from "./contexts";
export const ErrorScreen = () => {
  const { pathname } = useLocation();
  const check = useMemo(() => {
    const path = pathname.split("/")[1];
    if (Object.values(ROUTESNAMES).includes(path! as any))
      return "underDevelopment";
    if (!Object.values(ROUTESNAMES).includes(path! as any)) return "notFound";
  }, [pathname]);
  console.log(check);
  return (
    <LangProvider data={LANG}>
      {check === "notFound" && <NotFound imageUrl="/pageNotFound.webp" />}
      {check === "underDevelopment" && (
        <ComingSoon imageUrl="/pageUnderConstruction.webp" />
      )}
    </LangProvider>
  );
};
