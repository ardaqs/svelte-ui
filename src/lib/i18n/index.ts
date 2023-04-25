import { addMessages, register, init, getLocaleFromNavigator, getLocaleFromPathname } from 'svelte-i18n';
import { building } from '$app/environment';
import { base } from '$app/paths';

if (building) {
  const en = await import('./translations/en.json');
  const ru = await import('./translations/ru.json');
  addMessages('en', en);
  addMessages('ru', ru);
} else {
  register('en', () => import('./translations/en.json'));
  register('ru', () => import('./translations/ru.json'));
}

export const defaultLocale = 'en';
export const supportedLocales = ['en', 'ru'];

const joinedLocales = supportedLocales.join('|'); // 'en|ru'

// export const localeRegEx = new RegExp(`^/(${joinedLocales})($|/)`); // /^\/(en|ru)($|\/)/
export const localeRegEx = new RegExp(`^${base}/(${joinedLocales})/`); // /^\/math\/func\/(en|ru)\//

/**
 * @param locale - passed by a hook in order to properly pre-render static pages
 */
export function initI18n(locale: string | null = null) {
  // console.log(`initI18n (locale=${locale})`);
  init({
    initialLocale: building ? locale : getLocale(),
    fallbackLocale: defaultLocale
  });
}

function getLocale(): string | null {
  let locale = null;

  if (!locale) {
    locale = getLocaleFromPathname(localeRegEx);
    // console.log('locale from path: ', locale);
  }

  if (!locale) {
    locale = getLocaleFromLocalStorage();
    // console.log('locale from localStorage: ', locale);
  }

  if (!locale) {
    locale = getLocaleFromNavigator();
    // console.log('locale from navigator: ', locale);
  }

  locale = trimLocale(locale);
  // console.log('trimmed locale: ', locale);

  return locale;
}

export function getLocaleFromLocalStorage(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  return window.localStorage.getItem('lang');
}

export function trimLocale(locale: string | null): string | null {
  if (locale) {
    if (locale.startsWith('en')) { return 'en' } else
    if (locale.startsWith('ru')) { return 'ru' }
  }
  return locale;
}

initI18n();
