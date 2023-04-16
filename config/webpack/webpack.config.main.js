// required importants
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

// CONSTANT
const DOTENVPATH = path.resolve(__dirname,'..','dotenv', '.env');

// plugin imports
const HTMLWEBPACKPLUGIN = require('html-webpack-plugin');
const MINICSSEXTRACTPLUGIN = require('mini-css-extract-plugin');

//setup
dotenv.config({path:DOTENVPATH});

module.exports = { 
     entry:path.join(__dirname,'..','..','src/index.jsx'),
     module:{
          rules:[
               {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                         presets: ['@babel/preset-env', '@babel/preset-react']
                       }
                    }
               },
               {                
                    test: /\.(s[ac]|c)ss$/i,                
                    use: [
                    {                    
                      loader: MINICSSEXTRACTPLUGIN.loader,                                  
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
                    loader: 'file-loader',
                    options:  {
                         name: '[name].[ext]',
                              }
                         }]    
               },
          ]
     },
     plugins:[
          new MINICSSEXTRACTPLUGIN(
               {
                    filename: 'main.[contenthash].css',
               }
          ),
          new HTMLWEBPACKPLUGIN({
               inject: true,
               hash: true,
               title:process.env.X_NAME,
               favicon: path.join(__dirname,'..','..','src/public/icons/favicon.ico'),
               template: path.join(__dirname,'..','..','src/public/index.html'),  
               filename: 'index.html',
          }),
          new webpack.DefinePlugin({
               "process.env": JSON.stringify(process.env)
          })
     ]
}