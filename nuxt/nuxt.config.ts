// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          "Josefin+Sans": true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100],
          },
          Inter: "200..700",
          "Crimson Pro": {
            wght: "200..900",
            ital: "200..700",
          },
          "Helvetica Neue": [100, 300],
        },
      },
    ],
    "@nuxt/ui",
    "nuxt-directus",
  ],

  typescript: {
    typeCheck: false,
    strict: false,
  },
  css: ["~/assets/css/general.css", "~/assets/css/frame.css"],

  runtimeConfig: {
    public: {
      directus: {
        url: "http://localhost:8055",
        token: "DmoGuqXpiPR6XBb33d7cFjCJpguz0OYU",

      },
    },
    directus: {
      token: "DmoGuqXpiPR6XBb33d7cFjCJpguz0OYU",
      devtools: "true",
    },
  },
  
});
