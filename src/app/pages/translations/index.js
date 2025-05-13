import i18next from 'i18n';
import en from './en';
import de from './de';

export const ns = 'pages';

i18next.addResourceBundle('en', ns, en, true);
i18next.addResourceBundle('de', ns, de, true);
