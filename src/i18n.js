import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
        translation: {
            title: "English",
            reply: "Replay The Journey",
            about: "About",
            home: "Home",
        },
    },
    ar: {
        translation: {
            title: "عربي",
            reply: "عيد الرحلة من جديد",
            about: "Su di me",
            home: "Casa",
        },
    },
},
});

export default i18n;

