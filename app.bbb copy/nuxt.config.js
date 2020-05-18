const {config, extend} = require('./node_modules/yakuza0/nuxt');

module.exports = config({
  /*
  ** Headers of the page
  */
  mode: 'ssr',
  head: {
    title: 'CLN前端框架',
    meta: [
      {charset: 'utf-8'},
      {hid: 'description', name: 'description', content: ''},
    ],
    script: [
    ],
  },
  /*
  ** Global Style
  */
  // commonType: 'alone',
  // commonConfig: {
  //   store: false,
  //   plugins: false,
  // },
  globalStyle: {
    compile: [],
    sass: [],
    less: []
  },
  /*
  ** Add plugins
  */
  // plugins: [
  //   // '~/plugins/axios',
  //   // '~/plugins/tools',
  //   // '~/plugins/register/common',
  // ],
  plugins: [
  ],
  router: {
    // middleware: ['token'],
  },
  modules: [
  ],
  /*
  ** Customize the progress bar color
  */
  loading: false,
});
