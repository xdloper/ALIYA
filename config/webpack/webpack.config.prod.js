const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackMainConfig = require('./webpack.config.main');

let webpack_config_prod = {
     mode: 'production',
     output:{
          path:path.resolve(__dirname,'..','..','dist'),
          filename:'main.[contenthash].js',
     }
}

module.exports = ()=>{
     return webpackMerge.merge(webpackMainConfig,webpack_config_prod);
}