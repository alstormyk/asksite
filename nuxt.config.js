require('babel-polyfill')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'asksite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Public repository of askcreative.space' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/css/style.css',
    '~/node_modules/bulma-timeline/dist/bulma-timeline.min.css',
    '~/node_modules/prismjs/themes/prism.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ac3b61' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-bulma-slim',
    'nuxtent',
    'nuxt-netlify-cms'
  ],
  sitemap: {
    hostname: 'https://asksite.netlify.com',
    generate: true, // Enable me when using nuxt generate
    exclude: [
      '/admin',
      '/successMessage',
      '/successNews'
    ]
  },
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/vee-validate.js' }
  ],
}
