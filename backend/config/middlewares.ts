export default [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:4321',        // dev
        'http://127.0.0.1:4321',        // dev alternative
        'https://kow.thmarinho.Dev' // production
      ],
      headers: '*',                     // allow all headers
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

