// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const redirects: { [key: string]: string } = {
    '/user-management': '/user-management/agents-requests',
    '/property-management': '/property-management/property-types',
    '/content-management': '/content-management/banners',
    '/reports-and-complaints': '/reports-and-complaints/agents-and-properties',
};

export function dashboardMiddleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const pathname = url.pathname;

    if (redirects[pathname]) {
        url.pathname = redirects[pathname];
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}



export const dashboardMatcher = [
    '/user-management',
    '/property-management',
    '/content-management',
    '/reports-and-complaints',
]