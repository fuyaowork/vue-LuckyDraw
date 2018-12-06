module.exports = {
  assetsDir: 'static',
  baseUrl: './',
  // productionSourceMap: false,
  // crossorigin: process.env.crossorigin,
  lintOnSave: process.env.NODE_ENV !== 'production', // 在生产构建时禁用 eslint-loader
  devServer: {
    proxy: {
      '/base': {
        target: 'http://cjypwapapi.ynbyweishang.com',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/base' : '/',     // rewrite path
        },
      },
      '/code': {
        target: 'http://api.xsmore.com',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/code' : '/',     // rewrite path
        },
      }
    }
  },
}