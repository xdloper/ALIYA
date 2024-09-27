// plugin imports
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const pluginConfig = [
    new MiniCssExtractPlugin(
         {
              filename: 'style/main.[contenthash].css',
         }
    ),
    new webpack.DefinePlugin({
         "process.env": JSON.stringify(process.env)
    })
]

module.exports = pluginConfig