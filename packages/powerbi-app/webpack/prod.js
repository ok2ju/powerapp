const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const { base, rules, plugins } = require('./base')

const config = Object.assign({}, base, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    chunkFilename: 'scripts/[name].[contenthash].js',
    filename: 'scripts/[name].[contenthash].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  module: { rules },
  plugins: [
    ...plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin(),
    new WebpackManifestPlugin()
  ]
})

module.exports = config
