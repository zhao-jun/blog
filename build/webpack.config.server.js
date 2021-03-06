const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const {include} = require('./config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader v15新增
const basicConfig = require('./webpack.config.base')

// 服务器配置，是用于生成传递给 VueServerRenderer.createBundleRenderer 的 server bundle

const isDev = process.env.NODE_ENV === 'development'

// 便于以后统一修改路径
const resolve = (dir) => path.join(__dirname, '..', dir)

const plugins = [
  // vue-loader v15 请确保引入这个插件！
  new VueLoaderPlugin(),
  // 可以全局使用
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"',
      VUE_ENV: '"server"'
    }
  }),
  // 将服务端的整个输出，生成vue-ssr-server-bundle.json
  new VueSSRServerPlugin()
]

module.exports = webpackMerge(basicConfig, {
  // 默认是web，此处是服务端渲染
  target: 'node',
  // 对 bundle renderer 提供 source map 支持
  devtool: 'source-map',
  entry: resolve('client/server-entry.js'),
  output: {
    // 告知 server bundle 使用 CommonJS 风格导出模块
    libraryTarget: 'commonjs2',
    // 不用hash，服务端不用考虑缓存的问题
    filename: 'server-entry.js',
    path: resolve('server-dist')
  },
  // 服务端渲染没必要打包，直接从node_moudle引入即可
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          // 不用提取，直接引入客户端打包静态
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ],
        // include
      }
    ]
  },
  plugins
})
