const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/script.js',

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    plugins: [ new HtmlWebpackPlugin({ title: 'Development', }), new MiniCssExtractPlugin(),
    ]
};