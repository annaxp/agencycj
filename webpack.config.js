const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')

const { data } = require('./getData.js')
const { infoblocks } = data
const { projects, services } = infoblocks

const PAGES_DIR = path.join(__dirname, './src/pages')

const isDev = process.env.NODE_ENV === 'development'

const devOptions = isDev
  ? {
      devtool: 'source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
      },
      stats: {
        children: true,
        errorDetails: true,
      },
    }
  : {}

const htmlWebPackDefault = isDev
  ? { minify: false, inject: true }
  : { minify: true, inject: true }

const htmlIndex = new HtmlWebpackPlugin({
  ...htmlWebPackDefault,
  template: `${PAGES_DIR}/index.pug`,
  filename: `./index.html`,
})

const html404page = new HtmlWebpackPlugin({
  ...htmlWebPackDefault,
  template: `${PAGES_DIR}/page404/index.pug`,
  filename: `./404.html`,
})

const htmlProjectsPages = Object.keys(projects).map((key) => {
  const category = 'projects'
  const categoryData = projects[key]
  return new HtmlWebpackPlugin({
    ...htmlWebPackDefault,
    template: `${PAGES_DIR}/${category}/index.pug`,
    filename: `./${category}/${categoryData.code}.html`,
  })
})

const htmlServicesPages = Object.keys(services).map((key) => {
  const category = 'services'
  const categoryData = services[key]
  return new HtmlWebpackPlugin({
    ...htmlWebPackDefault,
    template: `${PAGES_DIR}/${category}/index.pug`,
    filename: `./${category}/${categoryData.code}.html`,
  })
})

const fileName = (ext) => `[name]${isDev ? '' : '.[contenthash]'}.${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    common: './common.js',
    index: './index.js',
    detail: './detail.js',
  },
  mode: process.env.mode,
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@blocks': path.resolve(__dirname, './src/blocks'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@scripts': path.resolve(__dirname, './src/assets/js'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
  output: {
    filename: `./assets/${fileName('js')}`,
    path: path.resolve(__dirname, 'public'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    htmlIndex,
    html404page,
    ...htmlProjectsPages,
    ...htmlServicesPages,
    ...(isDev
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: `./assets/styles/${fileName('css')}`,
            chunkFilename: `./assets/styles/${fileName('css')}`,
          }),
        ]),
    new CopyPlugin({
      patterns: [
        { from: 'assets/images', to: 'assets/images' },
        { from: 'assets/videos', to: 'assets/videos' },
      ],
    }),
    new CleanWebpackPlugin({
      ...(isDev ? { cleanOnceBeforeBuildPatterns: ['!public/**'] } : {}),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
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
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
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
      /** 
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
      */
    ],
  },
  ...devOptions,
}
