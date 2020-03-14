const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const buildDirectory = 'dist';
const outputDirectory = buildDirectory + '/client';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        path: join(__dirname, outputDirectory),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader'
                ],
            },
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin ({
            cleanOnceBeforeBuildPatterns: [join (__dirname, buildDirectory)]
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './public', 'index.html'),
            filename: './index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        })
    ]
};
