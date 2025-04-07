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
  vite: {
    server: {
      hmr: {
        clientPort: 443,
      },
      watch: {
        usePolling: true,
      },
      strictPort: false,
      allowedHosts: [".ngrok-free.app"], // <-- wildcard domain or exact match
    },
  },
  typescript: {
    typeCheck: false,
    strict: false,
  },
  css: ["~/assets/css/general.css", "~/assets/css/frame.css"],

  runtimeConfig: {
    public: {
      directus: {
        url: process.env.DIRECTUS_URL,
        token: process.env.DIRECTUS_TOKEN,
      },
    },
    directus: {
      token: "uLD8U2-lBi2QSwZ7B1hTszBjAXBI_FHE",
      devtools: "true",
    },
  },
});
