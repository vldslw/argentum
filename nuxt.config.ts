// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      guthubClientId: process.env.GITHUB_CLIENT_ID,
    },
    githubSecret: process.env.GITHUB_SECRET,
    authSecret: process.env.AUTH_SECRET,
    authOrigin: process.env.AUTH_ORIGIN,
  },
  css: ["normalize.css/normalize.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/_colors.scss" as *;
            @use "~/assets/scss/_breakpoints.scss" as *;
          `,
        },
      },
    },
  },
  devtools: { enabled: true },
  modules: [
    "@sidebase/nuxt-auth",
    "nuxt-mongoose",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: [400, 700],
        },
      },
    ],
  ],
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
  },
});
