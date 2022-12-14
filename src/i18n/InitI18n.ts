import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { Locale } from 'src/types/Locale.enum';

import resources from './resources';

const initI18n = async () => {
  const lang = window.localStorage.getItem('lang');

  return i18n.use(initReactI18next).init({
    resources,
    lng: lang ? JSON.parse(lang) : window.navigator.language,
    fallbackLng: Locale.EN,
    defaultNS: 'common',

    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // not needed since react escapes by default
    },
  });
};

export default initI18n;
