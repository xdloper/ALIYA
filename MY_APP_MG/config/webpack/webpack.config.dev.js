const path = require('path');
const webpackMerge = require('webpack-merge');
const WEBPACK_MAIN_CONFIG = require('./webpack.config.main');

let webpack_config_dev = {
     mode: 'development',
     devServer:{
          static:path.join(__dirname,'..','..','..','src/public/index.html'),
          port:1000,
          hot:true,
          open:true,
     },
     output:{
          path:path.resolve(__dirname,'..','..','..','dist'),
          filename:'main.js',

     }
}

module.exports = ()=>{
     return webpackMerge.merge(WEBPACK_MAIN_CONFIG,webpack_config_dev);
}