const path = require('path');
const webpackMerge = require('webpack-merge');
const WEBPACK_MAIN_CONFIG = require('./webpack.config.main').default;

let webpack_config_prod = {
     mode: 'production',
     output:{
          path:path.resolve(__dirname,'..','..','..','dist'),
          filename:'main.[contenthash].js',
     }
}

module.exports = ()=>{
     return webpackMerge.merge(WEBPACK_MAIN_CONFIG,webpack_config_prod);
}