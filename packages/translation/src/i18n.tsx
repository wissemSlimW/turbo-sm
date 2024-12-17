import { useTranslation } from "react-i18next";
import { createContext, ReactNode, useContext, useMemo } from "react";
type Translation = Record<string, string>;
const LangCtx = createContext<{
  data: Translation;
}>({ data: {} });
export const useLangContext = () => useContext(LangCtx);

export const LangProvider = <T extends Translation>(props: {
  data: T;
  children: ReactNode;
}) => {
  const { t } = useTranslation();
  const data = useMemo(() => {
    const _data: Record<keyof T, string> = {} as Record<keyof T, string>;
    Object.keys(props.data).forEach(
      (key: keyof T) => (_data[key] = t(key as string))
    );
    return _data;
  }, [props.data]);
  return (
    <LangCtx.Provider value={{ data: data }}>{props.children}</LangCtx.Provider>
  );
};
