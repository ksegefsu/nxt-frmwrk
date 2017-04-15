module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      foo: 'bar',
      amp: undefined,
      lang: 'ru'
    },
    title: 'nuxt-framework',
    meta: [
      // { content: 'IE=edge', 'http-equiv': 'X-UA-Compatible' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'theme-color', content: '#ffffff' }
      // { name: 'keywords', content: 'foo, bar' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel:  'manifest', href: 'manifest.json' },
      { rel: 'mask-icon', href: 'safari-pinned-tab', color: '#5bbad5' },
      { rel: 'dns-prefetch', href: '//twemoji.maxcdn.com' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' }
      // { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700,800&amp;subset=cyrillic', rel: 'stylesheet' }
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jarallax/1.7.3/jarallax.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    {src: '~assets/scss/main.scss', lang: 'scss'},
    'flexboxgrid/dist/flexboxgrid.min.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'orange' },
  /*
  ** Plugins (GA etc)
  */
  plugins: [
    '~plugins/ga.js',
    '~plugins/vue2-scrollspy',
    {src: '~plugins/skrollr', ssr: false},
    {src: '~plugins/vue-parallax-js', ssr: false},
    {src: '~plugins/vue-scrollto', ssr: false},
    {src: '~plugins/vue-lazyload', ssr: false}
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-lazyload',
      'skrollr'
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    minify: {
      removeRedundantAttributes: false
    }
  }
}
