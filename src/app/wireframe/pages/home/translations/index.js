import i18next from 'i18next';
import en from './en';
import de from './de';

export const ns = 'home';

i18next.addResourceBundle('en', ns, en, true);
i18next.addResourceBundle('de', ns, de, true);
