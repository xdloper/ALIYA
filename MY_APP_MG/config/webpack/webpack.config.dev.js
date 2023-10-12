const path = require('path');
const webpackMerge = require('webpack-merge');
const WEBPACK_MAIN_CONFIG = require('./webpack.config.main');

let webpack_config_dev = {
     mode: 'development',
     devServer: {
          static: {
               directory: path.join(__dirname, '../'), // HTML dosyasının bulunduğu üst klasör
          },
          port:1000,
          hot:true,
          open:true,
     },
     output:{
          path:path.resolve(__dirname,'..','..','..','dist/assets'),
          filename:'main.js',
          assetModuleFilename:'images/[name][hash][ext][query]'
     }
}

module.exports = ()=>{
     return webpackMerge.merge(WEBPACK_MAIN_CONFIG,webpack_config_dev);
}