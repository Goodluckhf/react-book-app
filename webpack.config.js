"use strict";

const path = require('path');
const webpack = require("webpack");
const env = process.env.NODE_ENV || "development";

module.exports = {
    entry: path.resolve('public', 'js', 'app.js'),
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'public', 'dist')
    },

    //watch: env === "development",
    watchOptions: {
        aggregateTimeout: 100
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    //devtool: env === "development" ? "cheep-inline-module-source-map" : "eval",
    devtool: "cheep-inline-module-source-map",

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }]
    }
};

if(env === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: false
            }
        })
    );
}
