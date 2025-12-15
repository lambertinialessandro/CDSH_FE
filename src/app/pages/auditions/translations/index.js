import i18next from 'i18n';
import de from './de';
import en from './en';

export const ns = 'auditions';

i18next.addResourceBundle('en', ns, en, true);
i18next.addResourceBundle('de', ns, de, true);
