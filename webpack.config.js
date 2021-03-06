path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: './src/server',
    resolve: {
        extensions: ['', '.js']
    },
    target: 'node',
    output: {
        filename: 'server.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel']
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
};