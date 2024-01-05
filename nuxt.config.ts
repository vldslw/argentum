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
  devtools: { enabled: true },
  modules: ["@sidebase/nuxt-auth", "nuxt-mongoose"],
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
  },
});
