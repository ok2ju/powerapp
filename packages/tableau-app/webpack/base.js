const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const dir = {
  source: path.join(__dirname, '..', 'src'),
  build: path.join(__dirname, '..', 'dist'),
  modules: path.join(__dirname, '..', 'node_modules')
}

const base = {
  entry: {
    bundle: './src/index',
    widget: './src/widgets/report'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      dir.modules,
      dir.source
    ]
  }
}

const rules = [{
  enforce: 'pre',
  test: /\.jsx?$/,
  exclude: [dir.modules],
  use: 'standard-loader'
}, {
  test: /\.jsx?$/,
  exclude: [dir.modules],
  use: 'babel-loader'
}]

const plugins = [
  new HTMLWebpackPlugin({
    filename: 'index.html',
    template: './src/index.ejs',
    inject: true
  }),
  new WebpackManifestPlugin({
    publicPath: '/'
  })
]

module.exports = { dir, base, rules, plugins }
