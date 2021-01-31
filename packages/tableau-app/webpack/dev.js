const path = require('path')
const webpack = require('webpack')
const { base, rules, plugins } = require('./base')

const config = Object.assign({}, base, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    chunkFilename: 'scripts/[name].js',
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, 'devel'),
    publicPath: '/'
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
    historyApiFallback: true,
    port: 8003,
    inline: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})

module.exports = config
