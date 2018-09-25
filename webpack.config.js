const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = function (env, argv) {
    let productionMode = argv.mode === 'production',
        plugins = [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'),
                filename: 'index.html',
                inject: 'body', // Inject assets into the given / 'body' = all JS will be placed at the bottom of body elem.
                minify: {
                    collapseWhitespace: productionMode, // Collapse white space that contributes to text nodes in a document tree
                    removeComments: productionMode,
                },
            }),
            new MiniCssExtractPlugin({
                filename: 'css/styles.css'
            }),
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:8080/'
            }),
        ];

    productionMode && plugins.push(new OptimizeCssAssetsPlugin());

    return {
        entry: path.resolve(__dirname, './src/index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/app.js',
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
                                sourceMap: !productionMode,
                            }
                        },
                        {
                            loader: 'sass-loader', // compiles Sass to CSS
                            options: {
                                sourceMap: !productionMode,
                            },
                        },
                    ],
                },
                {
                    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    exclude: /images/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '../fonts/'
                        }
                    }]
                },
            ],
            // resolve: {
            //     modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            // },
        },
        devtool: productionMode ? 'eval' : 'source-map',
        plugins: plugins,
        performance: {
            hints: false,
        },
    }
};
