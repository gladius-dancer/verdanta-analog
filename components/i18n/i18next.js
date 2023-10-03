module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-EN-US", "ru-RU-RU"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en-EN-US",
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en-EN-US",
      },
      {
        domain: "example.nl",
        defaultLocale: "ru-RU-RU",
      },
    ],
  },
};
