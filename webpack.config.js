const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
    hash: true
});
var webpack = require('webpack');
module.exports = {
    entry: './code/js/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'js/bundle.min.js'
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'eval-sourcemap',
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader : ['babel-loader']
                /*use: {
                    loader: ['babel-loader']
                }*/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },

        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'phones.css'}),
        new webpack.optimize.OccurrenceOrderPlugin() ,
        htmlPlugin
    ]
};
