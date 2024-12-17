import { findOne } from "@repo/api";
import i18n, { ModuleType } from "i18next";
import { initReactI18next } from "react-i18next";

const firebaseBackend = {
  type: "backend" as ModuleType,
  read: async (language: string, namespace: string, callback: Function) => {
    const translation = await findOne({
      collection: "translations",
      id: language,
    });
    callback(null, translation);
  },
};
// react-i18next configuration
const reactI18n = i18n
  // Load the backend plugin to fetch translations from a server
  .use(firebaseBackend)

  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    backend: {
      loadPath: "/{{lng}}/{{ns}}", // This is a placeholder; Firebase backend handles loading
    },
  });

export default reactI18n;
