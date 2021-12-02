/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  mode: 'development',
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
};
module.exports = webpackMerge.merge(baseConfig, mainConfig);
