const Webpack = require('webpack');
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    proxy: {
      '/inventory': {
        target: process.env.SERVER_URL,
        pathRewrite: { '^/inventory': '' }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new Webpack.DefinePlugin({
        'process.env.PROXY': JSON.stringify('/inventory')
      })
    ]
  }
}
;
