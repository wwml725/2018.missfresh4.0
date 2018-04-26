let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        //如果请求的路径是以/api开头的话，会有9000这个服务解析处理
        proxy: {
            '/api': 'http://localhost:9000'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            },
            {test: /\.less$/, loaders: ["style-loader", "css-loader", "less-loader"]},
            {
                test: /\.(jpg|png|gif|eot|svg|woff|woff2|ttf)$/i,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};