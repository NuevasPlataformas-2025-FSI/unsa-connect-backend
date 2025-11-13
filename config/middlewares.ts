export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'"],
          "script-src": ["'self'"],
          "style-src": ["'self'", "'unsafe-inline'"],
          "img-src": ["'self'", "data:", "blob:", "https://ejavhzgchgptwgxrbexm.supabase.co"],
          "media-src": ["'self'", "data:", "blob:", "https://ejavhzgchgptwgxrbexm.supabase.co"],
          "connect-src": [
            "'self'",
            "https://ejavhzgchgptwgxrbexm.supabase.co"
          ],
          "frame-src": ["'self'", "https://ejavhzgchgptwgxrbexm.supabase.co"]
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
