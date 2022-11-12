const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const name = ['index', 'about-me', 'projects']
module.exports = []

for(let i = 2; i >= 0; i--) {
    module.exports.push({
        mode: 'development',
        devtool: false,
        entry: `./src/scripts/${name[i]}.js`,
        output: {
            filename: `${name[i]}.js`,
            path: path.resolve(__dirname, 'dist', 'scripts'),
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
                {
                    test: /\.(svg|png|jpe?g|gif)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: '../imgs',
                        name: '[name].[ext]'
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src') + `/${name[i]}.html`,
                filename: `../${name[i]}.html`,
                scriptLoading: 'blocking',
            }),
            new MiniCssExtractPlugin({
                filename: `../styles/${name[i]}.css`,
            }),
        ],
    })
    if (i === 0) {
        module.exports[i] = {
            ...module.exports[i],
            devServer: {
                static: {
                    directory: path.resolve(__dirname, 'dist')
                }, 
                port: 3000,
                open: true,
                hot: true,
                historyApiFallback: {
                    index: 'index.html'
                },
                devMiddleware: {
                    writeToDisk: true,
                },
            }
        }
    }
}