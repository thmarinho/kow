export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: "strapi::cors",
    origin: ['http://0.0.0.0:4321'],
    headers: '*',
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
