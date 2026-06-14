import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the metadata routes without a dot (opengraph-image)
    // - … the ones containing a dot (e.g. `favicon.ico`, `sitemap.xml`)
    '/((?!api|_next|_vercel|opengraph-image|.*\\..*).*)',
  ],
};
