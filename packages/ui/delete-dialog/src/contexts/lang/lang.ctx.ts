import { useLangContext } from "@repo/translation";
import { Lang } from "./type";

export const useLang: () => { data: Lang } = () =>
  useLangContext() as { data: Lang };
