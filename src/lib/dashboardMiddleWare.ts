// middleware.ts
const redirects: { [key: string]: string } = {
    '/user-management': '/user-management/agents-requests',
    '/property-management': '/property-management/property-types',
    '/content-management': '/content-management/banners',
    '/reports-and-complaints': '/reports-and-complaints/agents-and-properties',
};

export function dashboardMiddleware(pathname: string) {

    if (redirects[pathname]) {
        return redirects[pathname];
    }

    return pathname;
}



export const dashboardMatcher = [
    '/user-management',
    '/property-management',
    '/content-management',
    '/reports-and-complaints',
]