// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@hebilicious/vue-query-nuxt', '@nuxt/ui', 'nuxt-auth-utils'],
  plugins: ['~/modules/api/api.plugin.ts', '~/modules/auth/auth.plugin.ts'],
  routeRules: {
    '/backend-api/**': {
      proxy: `${process.env.API_URL || 'http://localhost:4200/api'}/**`
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
