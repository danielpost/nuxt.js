module.exports = {
  generate: {
    routes: [
      '/users/1',
      '/users/2',
      { route: '/users/3', payload: { id: 3000 } }
    ],
    interval: 200,
    subFolders: true
  },
  hooks: {
    ready(nuxt) {
      nuxt.__hook_called__ = true
    },
    bad: null,
    '': true
  },
  transition: false,
  build: {
    postcss: [
      require('postcss-cssnext')()
    ]
  }
}
