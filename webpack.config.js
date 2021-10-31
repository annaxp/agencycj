const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')

const PAGES_DIR = path.join(__dirname, './src/pages/')

const isDev = process.env.mode === 'development'

const fileName = (ext) => `[name].[contenthash].${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: PAGES_DIR + 'index/index.js',
    projects: PAGES_DIR + 'projects/index.js',
    projects: PAGES_DIR + 'services/index.js',
  },
  mode: process.env.mode,
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@scripts': path.resolve(__dirname, './src/assets/js'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `./assets/${fileName('js')}`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}index/index.pug`,
      filename: './index.html',
      minify: false,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}services/index.pug`,
      filename: './services/index.html',
      minify: false,
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}projects/index.pug`,
      filename: './projects/index.html',
      minify: false,
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: `./assets/styles/${fileName('css')}`,
    }),
    new CopyPlugin({
      patterns: [
        { from: 'assets/images', to: 'assets/images' },
        { from: 'assets/videos', to: 'assets/videos' },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    browsers: ['ie >= 11', 'last 4 version'],
                  }),
                ],
                // sourceMap: true,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.pug$/i,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${fileName('[ext]')}`,
              outputPath: 'assets/fonts/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
  stats: {
    children: true,
  },
}
