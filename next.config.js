const withPlugins = require("next-compose-plugins");
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

module.exports = withPlugins(
  [
    // [withPWA, {pwa: {disable: true, dest: "public", runtimeCaching}}],
  ],
  {
    webpack: (config, { dev, isServer }) => {
      // if (isServer) {
      //   require("./scripts/generate-sitemap");
      // }

      // Replace React with Preact only in client production build
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",
        });
      }

      return config;
    },
    i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
    },
    // i18n: { locales: ["en", "ru", "es", "zh"], defaultLocale: "en" },
    images: {
      domains: [
        "i.scdn.co", // Spotify Album Art
        "pbs.twimg.com", // Twitter Profile Picture
        "avatars.githubusercontent.com", // Twitter Profile Picture
      ],
    },
  }
);
