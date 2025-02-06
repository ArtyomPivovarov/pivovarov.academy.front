// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    public: {
      // Keys within public, will be also exposed to the client-side
      apiUrl: process.env.API_URL
    }
  },
  modules: [
    '@hebilicious/vue-query-nuxt',
    'nuxt-auth-utils',
    '@vueuse/nuxt'
  ],
  plugins: ['~/modules/api/api.plugin.ts', '~/modules/auth/auth.plugin.ts'],
  routeRules: {
    '/backend-api/**': {
      proxy: `${process.env.API_URL || 'http://localhost:4200/api'}/**`
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  tailwindcss: {
    configPath: '@/tailwind.config.ts',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
