// required importants
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

// CONSTANT
const ENVPATH = path.resolve(__dirname,'..','dotenv', '.env');

// plugin imports
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                      options: { publicPath: "" },                  
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
                    use: [{
                      loader: 'file-loader', // veya 'url-loader' kullanabilirsiniz
                      options: {
                         name: '[name].[ext]',
                      }
                    }]
                  }
          ]
     },
     plugins:[
          new MiniCssExtractPlugin(
               {
                    filename: 'main.[contenthash].css',
               }
          ),
          new HtmlWebPackPlugin({
               inject: true,
               hash: true,
               title:process.env.X_NAME,
               favicon: path.join(__dirname,'..','..','..','src/public/icons/favicon.ico'),
               template: path.join(__dirname,'..','..','..','src/public/index.html'),  
               filename: 'index.html',
          }),
          new webpack.DefinePlugin({
               "process.env": JSON.stringify(process.env)
          })
     ]
}

module.exports = config