// required importants
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');
const path = require('path');

const pluginConfig = require('./config/plugin.js')


// CONSTANT
const ENVPATH = path.resolve(__dirname,'..','dotenv', '.env');

//setup
dotenv.config({path:ENVPATH});

/* eğer react içi kullanmak istiyorsan react ön yükleyici gerekir devDepend olarak kurulu tek yapman gereken '@babel/preset-react' bunu js yerindeki presets arrayine eklemek */ 
const config = { 
     entry:path.join(__dirname,'..','..','..','src/index.js'),
     module:{
          rules:[
               {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                         presets: ['@babel/preset-env']
                       }
                    }
               },
               {                
                    test: /\.(s[ac]|c)ss$/i,                
                    include: path.resolve(__dirname, '../../../src/styles/global.scss'),
                    exclude: /node_modules/,
                    use: [
                    {                    
                         loader: MiniCssExtractPlugin.loader,                                                 
                    },
                    
                    "css-loader",                  
                    "postcss-loader",                                                 
                    "sass-loader",                                  
                    ],           
               },
               {
                    test: /\.geojson$/,
                    type: 'json',
               },
               {
                    test: /\.(png|svg|jpg|gif|ico)$/,
                    type:'asset/resource',

                  }
          ]
     }
}



module.exports = config