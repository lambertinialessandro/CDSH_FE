import i18n from 'i18next';
import i18next from 'i18n';

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

i18next.addResourceBundle('en', defaultNS, resources.en, true);
i18next.addResourceBundle('de', defaultNS, resources.de, true);
