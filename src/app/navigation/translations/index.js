import i18next from 'i18next';
import en from './en';
import de from './de';
/* import es from './es';
import it from './it'; */

export const ns = 'navigation';

i18next.addResourceBundle('en', ns, en, true);
i18next.addResourceBundle('de', ns, de, true);
/* i18next.addResourceBundle('es', ns, es, true);
i18next.addResourceBundle('it', ns, it, true); */
