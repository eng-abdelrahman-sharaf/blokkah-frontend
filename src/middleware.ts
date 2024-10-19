// // middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {
  getPathNameWithoutLocale,
  getPathNameLocale,
  addLocaleToPathName,
} from "@/lib/internationalization";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname: string = url.pathname;
  let pathNameWithoutLocale = pathname;
  const locale = getPathNameLocale(pathname);

  console.log("middleWare entered");

  if (locale) {
    pathNameWithoutLocale = getPathNameWithoutLocale(pathname);
  }

  // this line is in case that the dashboard middleware will not be used
  let finalPathname = pathNameWithoutLocale;

  // // applying dashboard middleware on pathName without Locale
  // let finalPathname = dashboardMiddleware(pathNameWithoutLocale);

  // if no need to apply middleware
  if (locale && finalPathname == pathNameWithoutLocale)
    return NextResponse.next();

  // adding locale to the pathname
  finalPathname = addLocaleToPathName(finalPathname, locale);

  url.pathname = finalPathname;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
      /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next (all internal paths)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - ar, en (language routes)
     */
    '/((?!api|_next|favicon.ico|sitemap.xml|robots.txt|ar|en).*)',

    // // match all dashboard end routes either starting with locale or not
    // '/(.*)/user-management',
    // '/(.*)/property-management',
    // '/(.*)/content-management',
    // '/(.*)/reports-and-complaints',
  ],
};