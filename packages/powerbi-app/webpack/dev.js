const path = require('path')
const webpack = require('webpack')
const { base, rules, plugins } = require('./base')

const config = Object.assign({}, base, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    chunkFilename: 'scripts/[name].js',
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, 'devel')
  },
  module: { rules },
  plugins: [
    ...plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'devel'),
    publicPath: '/',
    historyApiFallback: {
      index: 'index.html'
    },
    port: 8001,
    inline: true,
    hot: true
  }
})

module.exports = config
