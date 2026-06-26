/**
 * TEMPORARY DIAGNOSTIC — remove once the Vercel build is green.
 *
 * In production, Next.js masks render errors as
 *   "An error occurred in the Server Components render. The specific message
 *    is omitted in production builds..."
 * and during `next build` it does NOT print the real cause to the log.
 *
 * `onRequestError` receives the *unmasked* error (full message + stack), and it
 * fires during static prerendering/export too — so this prints the real error
 * straight into the Vercel build log. Look for the VELARO PRERENDER ERROR block.
 */
export function onRequestError(
  error: unknown,
  request: { path?: string; method?: string },
  context: unknown
) {
  const e = error as { message?: string; stack?: string; digest?: string };
  console.error('\n========== VELARO PRERENDER ERROR ==========');
  console.error('path   :', request?.path);
  console.error('digest :', e?.digest);
  console.error('message:', e?.message);
  console.error('context:', JSON.stringify(context));
  console.error('stack  :\n' + (e?.stack ?? '(no stack)'));
  console.error('============================================\n');
}
