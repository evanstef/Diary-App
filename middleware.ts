import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

export const isProtectRoute = createRouteMatcher([
    '/dashboard(.*)',
])
 
export default clerkMiddleware((auth, req) => {
    if (isProtectRoute(req)) auth().protect();
  });
 
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)'], // Run middleware on API routes
};