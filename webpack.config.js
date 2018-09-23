const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function (env, argv) {
    let productionMode = argv.mode === 'production',
        plugins = [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'),
                filename: 'index.html',
                inject: 'body', // Inject assets into the given / 'body' = all JS will be placed at the bottom of body elem.
                minify: {
                    collapseWhitespace: true, // Collapse white space that contributes to text nodes in a document tree
                    removeComments: true,
                },
            }),
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            }),
        ];

    productionMode && plugins.push(new OptimizeCssAssetsPlugin());

    return {
        entry: path.resolve(__dirname, './src/index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app.js',
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
                    use: [{
                        loader: 'html-loader',
                    }],
                    exclude: [/node_modules/, /src/],
                },
                {
                    test: /\.(scss)$/,
                    use: [
                        // 'style-loader',
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader', // translates CSS into CommonJS modules
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'sass-loader', // compiles Sass to CSS
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },

            ]
        },
        devtool: productionMode ? 'eval' : 'source-map',
        plugins: plugins,
        performance: {
            hints: false,
        },
    }
};