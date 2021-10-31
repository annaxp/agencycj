// const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')

const PAGES_DIR = path.join(__dirname, './src/pages')
const DATA_DIR = path.join(__dirname, './src/data')

// function parseFilesTokens({ dir, filter = /(.)*.json/, callback }) {
//   const result = {}
//   ;(function recurseHandler(dir, filter, callback) {
//     if (!fs.existsSync(dir)) {
//       console.error('no dir ', dir)
//       return
//     }
//     try {
//       fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
//         const filename = dir + '/' + file.name
//         if (fs.lstatSync(filename).isDirectory()) {
//           recurseHandler(filename, filter, callback)
//         } else if (filter.test(filename)) {
//           Object.assign(result, callback(filename))
//         }
//       })
//     } catch (e) {
//       console.error(e)
//     }
//   })(dir, filter, callback)
//   return result
// }

// function parseTokens(filename) {
//   try {
//     // const data = fs.readFileSync(filename, 'utf8')
//     const data = require(filename)
//     return data
//   } catch (e) {
//     console.error(e)
//   }
// }

// const data = parseFilesTokens({
//   dir: DATA_DIR,
//   callback: parseTokens,
// })

// console.log(data)

// const indexPage = require(DATA_DIR + '/pages/index')
// const projectsPage = require(DATA_DIR + '/pages/projects')
// const servicesPage = require(DATA_DIR + '/pages/services')
// const page404 = require(DATA_DIR + '/pages/404')

// const services = require(DATA_DIR + '/infoblocks/services')
// const projects = require(DATA_DIR + '/infoblocks/projects')

const isDev = process.env.NODE_ENV === 'development'

const htmlWebPackDefault = isDev
  ? { minify: false, inject: 'body' }
  : { minify: true, inject: 'body' }

const fileName = (ext) => `[name].[contenthash].${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: PAGES_DIR + '/index/index.js',
  },
  mode: process.env.mode,
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
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
    new HtmlWebpackPlugin({
      ...htmlWebPackDefault,
      template: `${PAGES_DIR}/index/index.pug`,
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      ...htmlWebPackDefault,
      template: `${PAGES_DIR}/services/index.pug`,
      filename: './services/index.html',
    }),
    new HtmlWebpackPlugin({
      ...htmlWebPackDefault,
      template: `${PAGES_DIR}/projects/index.pug`,
      filename: './projects/index.html',
    }),
    new HtmlWebpackPlugin({
      ...htmlWebPackDefault,
      template: `${PAGES_DIR}/page404/index.pug`,
      filename: './404.html',
    }),
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
    new CleanWebpackPlugin(),
  ],
  ...(isDev ? { devtool: 'source-map' } : {}),
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
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: `${fileName('[ext]')}`,
      //         outputPath: 'assets/fonts/',
      //       },
      //     },
      //   ],
      // },
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
