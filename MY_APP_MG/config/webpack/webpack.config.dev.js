
const path = require('path');
const webpackMerge = require('webpack-merge');
const WEBPACK_MAIN_CONFIG = require('./webpack.config.main');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const getWebpackConfig = (pluginConfig) => {
  return {
    mode: 'development',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      port: 1000,
      hot: true,
      open: true,
    },
    plugins: [
      ...pluginConfig,
      new HtmlWebPackPlugin({
        inject: 'body',
        hash: true,
        title: process.env.X_NAME,
        favicon: path.join(__dirname, '..', '..', '..', 'src/public/icons/favicon.ico'),
        template: path.join(__dirname, '..', '..', '..', 'src/public/index.html'),
        filename: path.join('index.html'),
        minify: false,
      }),
    ],
    output: {
      path: path.resolve(__dirname, '..', '..', '..', 'dist/assets'),
      filename: 'js/main.js',
      assetModuleFilename: 'images/[name][hash][ext][query]',
    },
  };
};

module.exports = (env, args) => {
  const pluginConfig = require('./config/plugin.js');
  const mergedConfig = getWebpackConfig(pluginConfig);
  return webpackMerge.merge(WEBPACK_MAIN_CONFIG, mergedConfig);
};