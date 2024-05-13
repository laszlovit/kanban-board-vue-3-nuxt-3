// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/vello.css'],
  ssr: false,
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt'],
  colorMode: {
    preference: 'light',
  },
});
