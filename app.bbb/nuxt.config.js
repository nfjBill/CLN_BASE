const {config, extend} = require('yakuza0/nuxt');

module.exports = config({
  mode: 'ssr',
  head: {
    title: 'aaa',
    meta: [
      {charset: 'utf-8'},
      {hid: 'description', name: 'description', content: ''},
    ],
    script: [
    ],
  },
  globalStyle: {
    compile: [],
    sass: [],
    less: []
  },
  plugins: [
  ],
  router: {
  },
  modules: [
  ],
  loading: false,
});
