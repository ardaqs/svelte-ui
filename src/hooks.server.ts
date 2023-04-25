import type { Handle } from '@sveltejs/kit';
import { sequence } from "@sveltejs/kit/hooks";

import { initI18n, localeRegEx } from '$lib/i18n';

const handleLocale = (async ({ event, resolve }) => {
  // console.log(`pathname: ${event.url.pathname}`);
  const locale = getLocaleFromPathname(event.url.pathname);
  initI18n(locale);
  return await resolve(event);
}) satisfies Handle;

function getLocaleFromPathname(pathname: string): string | null {
  const matches = pathname.match(localeRegEx);
  // console.log('matches:', matches);
  if (matches && matches.length > 1) {
    return matches[1];
  }
  return null;
}

export const handle = sequence(handleLocale);
