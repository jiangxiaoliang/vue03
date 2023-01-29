const  { Configuration } = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

/**
 * @type {Configuration}
 */
const config = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        filename: '[fullhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.ts', '.vue', '.css']
    },
    stats: 'errors-only',

    devServer: {
        port: 9001,
        proxy: {},
    },

    // externals: {
    //     vue: 'Vue' // cdn引入
    // },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(process.cwd(), 'tsconfig.json'),
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['You application is running at: http://localhost:9001']
            }
        })
    ]
}

module.exports = config