const path = require ('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        uikit: './ui-kit/colors-type.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist') 
    },
    plugins: [
        new HTMLWebpackPlugin({ 
            //chunks: ['main'],
            template: './index.pug' }),
        new HTMLWebpackPlugin({
            filename: './ui-kit/colors-type.html',
            template: './ui-kit/colors-type.pug'}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}

