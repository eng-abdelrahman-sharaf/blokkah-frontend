// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { internMiddleware, internMatcher } from "@/lib/internationalization";
import {
  dashboardMiddleware,
  dashboardMatcher,
} from "@/lib/dashboardMiddleWare";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

  if (dashboardMatcher.includes(pathname)) {
    return dashboardMiddleware(request);
  } else if (pathname.startsWith("/buyer")) {
    return internMiddleware(request);
  } else return NextResponse.next();
}

export const config = {
    matcher: internMatcher.concat(dashboardMatcher),
};