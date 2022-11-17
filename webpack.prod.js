const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const name = ['index', 'about-me', 'projects']
module.exports = []

for(let i = 0; i < name.length; i++) {
    module.exports.push({
        mode: 'production',
        entry: `./src/scripts/${name[i]}.js`,
        output: {
            filename: `${name[i]}.[contenthash].js`,
            path: path.resolve(__dirname, 'dist'),
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
                        outputPath: 'imgs',
                        name: '[name].[contenthash].[ext]'
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src') + `/${name[i]}.html`,
                filename: `${name[i]}.html`,
                scriptLoading: 'blocking',
            }),
            new MiniCssExtractPlugin({
                filename: `${name[i]}.[contenthash].css`,
            }),
        ],
    })
}