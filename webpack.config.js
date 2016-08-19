/* eslint-disable */
const path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//{index:'./index.js'},

  // entry: {
  //   A: ['webpack-hot-middleware/client', './src/a.js'],
  //   B: ['webpack-hot-middleware/client', './src/b.js']
  // },

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',

    './index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
    filename: 'js/index.js'

  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('js/comm.js'),
    // 给js中剥离的css的文件指定名称
    new ExtractTextPlugin('/css/index.css'),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      //{test: /\.js$/,loader: 'babel', query: {presets: ['es2015','react']},exclude: [nodeModulesPath]},
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=2048&name=imgs/[name]_[hash:4].[ext]'
      }

    ]
  }
}