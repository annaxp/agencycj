const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')

const { data } = require('./getData.js')
const { infoblocks } = data
const { projects, services, tags } = infoblocks

const pagesDir = path.join(__dirname, './src/views/pages')
const buildDir = 'public_html'

const isDev = process.env.NODE_ENV === 'development'

const fileName = (ext) => `[name]${isDev ? '' : '.[contenthash]'}.${ext}`

const devOptions = isDev
  ? {
      devtool: 'source-map',
      devServer: {
        contentBase: path.join(__dirname, buildDir),
        compress: true,
        port: 9000,
      },
      stats: {
        children: true,
        errorDetails: true,
      },
    }
  : {}

const htmlWebPackDefault = {
  inject: true,
  minify: false,
}

const htmlIndex = new HtmlWebpackPlugin({
  ...htmlWebPackDefault,
  template: `${pagesDir}/index.pug`,
  filename: 'index.html',
  chunks: ['common_vendors', 'common', 'index'],
  data,
})

const html404page = new HtmlWebpackPlugin({
  ...htmlWebPackDefault,
  template: `${pagesDir}/page404.pug`,
  filename: '404.html',
  data,
})

const htmlProjectsPages = projects.map((categoryData, index) => {
  const category = 'projects'
  return new HtmlWebpackPlugin({
    ...htmlWebPackDefault,
    template: `${pagesDir}/${category}.pug`,
    filename: `${category}/${categoryData.code}.html`,
    chunks: ['common_vendors', 'common', 'detail'],
    data,
    dataId: index,
  })
})

const htmlServicesPages = services.map((categoryData, index) => {
  const category = 'services'
  return new HtmlWebpackPlugin({
    ...htmlWebPackDefault,
    template: `${pagesDir}/${category}.pug`,
    filename: `${category}/${categoryData.code}.html`,
    chunks: ['common_vendors', 'common', 'detail'],
    data,
    dataId: index,
  })
})

const htmlTagsPages = tags.map((categoryData, index) => {
  const category = 'services'
  return new HtmlWebpackPlugin({
    ...htmlWebPackDefault,
    template: `${pagesDir}/tags.pug`,
    filename: `${category}/${categoryData.code}.html`,
    chunks: ['common_vendors', 'common', 'detail'],
    data,
    dataId: index,
  })
})

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: `./assets/styles/${fileName('css')}`,
})

// const cleanPlugin = new CleanWebpackPlugin({
//   ...(isDev
//     ? { cleanOnceBeforeBuildPatterns: [`!${buildDir}/**`] }
//     : { cleanOnceBeforeBuildPatterns: [`!${buildDir}/mail.php`] }),
// })

const cleanPlugin = new CleanWebpackPlugin()

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    common: './app/common.js',
    index: './app/index.js',
    detail: './app/detail.js',
  },
  mode: process.env.NODE_ENV,
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/views/pages'),
      '@blocks': path.resolve(__dirname, './src/views/blocks'),
      '@components': path.resolve(__dirname, './src/views/components'),
      '@mixins': path.resolve(__dirname, './src/views/mixins'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@componentsStyles': path.resolve(
        __dirname,
        './src/assets/styles/components',
      ),
      '@blocksStyles': path.resolve(__dirname, './src/assets/styles/blocks'),
      '@scripts': path.resolve(__dirname, './src/assets/js'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
  output: {
    filename: `./assets/js/${fileName('js')}`,
    path: path.resolve(__dirname, buildDir),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common_vendors: {
          test: /[\\/]node_modules[\\/](swiper)[\\/]/,
          name: 'common_vendors',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    htmlIndex,
    html404page,
    ...htmlProjectsPages,
    ...htmlServicesPages,
    ...htmlTagsPages,
    miniCssExtractPlugin,
    new CopyPlugin({
      patterns: [
        { from: 'assets/images', to: 'upload/images' },
        { from: 'assets/videos', to: 'upload/videos' },
        { from: 'assets/styles/fonts.css', to: 'assets/styles/fonts.css' },
        { from: 'assets/fonts', to: 'assets/fonts' },
      ],
    }),
    cleanPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
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
    ],
  },
  ...devOptions,
}
