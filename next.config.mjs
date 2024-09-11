/** @type {import('next').NextConfig} */

// a better way for redirecting without using middleware
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/:locale+/user-management',
            destination: '/:locale+/user-management/agents-requests',
            permanent: true,
          },
          {
            source: '/:locale+/property-management',
            destination: '/:locale+/property-management/property-types',
            permanent: true,
          },
          {
            source: '/:locale+/content-management',
            destination: '/:locale+/content-management/banners',
            permanent: true,
          },
          {
            source: '/:locale+/reports-and-complaints',
            destination: '/:locale+/reports-and-complaints/agents-and-properties',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
