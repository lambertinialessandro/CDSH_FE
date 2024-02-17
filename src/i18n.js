import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { defaultNS, ns, supportedLngs, fallbackLng, resources } from './translations';
import 'intl-pluralrules';

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns,
    defaultNS,
    detection: options,
    supportedLngs,
    fallbackLng,
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    keySeparator: '.',
    nsSeparator: ':',
    returnObjects: true,
  });

console.log('i18n', i18n);

export default i18n;
