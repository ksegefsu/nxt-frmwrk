module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      foo: 'bar',
      amp: undefined
    },
    title: 'nuxt-framework',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'keywords', content: 'foo, bar' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: '//twemoji.maxcdn.com' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700,800&amp;subset=cyrillic', rel: 'stylesheet' }
    ],
    script: [
      // { src: 'http://use.edgefonts.net/source-sans-pro.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    {src: '~assets/css/main.scss', lang: 'scss'},
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
    '~plugins/ga.js'
  ],
  /*
  ** Build configuration
  */
  build: {
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
  }
}
