const { DefinePlugin } = require('webpack');

let version = '_.._';
let date = '_//_ - ___';
try {
  version = require('child_process').execSync('git describe --first-parent --tags').toString().trim().split('-')[0];
  date = require('child_process')
    .execSync('git log -1 --date=format:\'%d/%m/%Y\' --pretty=format:"%ad - %h"')
    .toString()
    .trim()
    .replace(/(')/g, '');
} catch (err) {}

module.exports = {
  style: {
    postcssOptions: {},
  },
  webpack: {
    plugins: [
      new DefinePlugin({
        'process.env.GIT_VERSION': JSON.stringify(version),
        'process.env.GIT_MORE_INFO': JSON.stringify(date),
      }),
    ],
    configure: (webpackConfig, { env, paths }) => {
      // Set publicPath for GitHub Pages subfolder
      webpackConfig.output.publicPath = '/CDSH_FE/';
      // Keep your ignoreWarnings
      webpackConfig.ignoreWarnings = [{ message: /Failed to parse source map/ }];
      return webpackConfig;
    },
  },
};