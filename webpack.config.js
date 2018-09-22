const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                }],
                exclude: [/node_modules/, /src/],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: path.resolve(__dirname, './dist/index.html'),
            inject: 'body', // Inject assets into the given / 'body' = all JS will be placed at the bottom of body elem.
            minify: {
                collapseWhitespace: true, // Collapse white space that contributes to text nodes in a document tree
                removeComments: true,
            },
        }),
    ]
};