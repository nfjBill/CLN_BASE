export default {
  name: 'cln_base',
  proxyServer: {
    gateway: {
      platform: 'http://xxxx',
    },
    services: {
    },
    alias: {
    },
    proxy: {
    }
  },
  nuxt: {
    head: {
      title: '',
      meta: [{
        charset: 'utf-8'
      },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge,chrome=1'
        },
        {
          name: 'renderer',
          content: 'webkit'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
      ],
    },
    globalStyle: {
      compile: ['@rdc/sgp-ui/lib/theme-chalk/index.css'],
      sass: [],
      scss: [],
      less: [],
      stylus: [],
    },
    plugins: [
      '$common.plugins/sgp-ui',
      '$common.plugins/http',
      '$common.plugins/utils',
    ],
    modules: [
    ],
    http: {
      timeout: 20000,
    }
  }
}
