import { type NextRequest, NextResponse } from "next/server";

let locales = ["en", "ar"];

export function internMiddleware(request: NextRequest) {
  const url = request.nextUrl.clone();
    const pathname = url.pathname;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.endsWith(`/${locale}`) || pathname.endsWith(`/${locale}/`)
    );
        if (pathnameHasLocale) return NextResponse.next();
        const locale = "/en";
        url.pathname = `${pathname}${locale}`;
        return NextResponse.redirect(url);
}

export const internMatcher = [
  "/buyer",
];
