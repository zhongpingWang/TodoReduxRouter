/* eslint-disable */
const path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {index:'./index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
    filename: 'js/[name].js'
   
  },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('js/comm.js'), 
        // 给js中剥离的css的文件指定名称
        new ExtractTextPlugin('/css/[name].css')
    ],

  module: {
    loaders: [

      {test: /\.js$/,loader: 'babel', query: {presets: ['es2015','react']},exclude: [nodeModulesPath]},
      {test: /\.less$/,loader: ExtractTextPlugin.extract('style', 'css!less')},
      {test: /\.(png|jpg)$/,loader: 'url?limit=2048&name=imgs/[name]_[hash:4].[ext]'} 

    ]
  }
}