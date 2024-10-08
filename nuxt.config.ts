// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/fonts',
    'dayjs-nuxt'
  ],
  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google' },
      { name: 'Poppins', provider: 'google' },
      { name: 'Pacifico', provider: 'google' },
    ]
  }
})