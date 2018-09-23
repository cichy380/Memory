const BrowserSyncPlugin =   require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin =   require('html-webpack-plugin');
const path              =   require('path');

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
                    options: {
                        minimize: true,
                    },
                }],
                exclude: [/node_modules/, /src/],
            },
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: path.resolve(__dirname, './src/index.html'),
            filename: path.resolve(__dirname, './dist/index.html')
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
        })

    ]
};
