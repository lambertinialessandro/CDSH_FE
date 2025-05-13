import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import 'intl-pluralrules';
import { initReactI18next } from 'react-i18next';
import { defaultNS, fallbackLng, ns, resources, supportedLngs } from './translations';

const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
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
      escapeValue: false,
    },
    keySeparator: '.',
    nsSeparator: ':',
    returnObjects: true,
  });

export default i18n;
