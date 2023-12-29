const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  scope: "/app",
  sw: "service-worker.js",
  // ... other PWA configuration options
});

module.exports = withPWA({
  // next.js config
});
