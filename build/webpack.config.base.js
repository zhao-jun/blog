const path = require('path')
const {include} = require('./config')
const utils = require('./utils')

// 便于以后统一修改路径
const resolve = (dir) => path.join(__dirname, '..', dir)

// 客户端和服务端共用webpack配置
module.exports = {
  // webpack4新增
  mode: process.env.NODE_ENV || 'development',
  target: 'web', // 默认值
  entry: resolve('client/client-entry.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('client-dist/public'),
    publicPath: 'http://127.0.0.1:8000/public'
    // 两种写法都可以
    // publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve('client')
    }
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        include,
        enforce: 'pre',
        options: {
          // https://github.com/webpack-contrib/eslint-loader/issues/248
          // eslint-loader v2.1.1存在BUG，目前固定版本v2.1.0
          fix: true
        }
      },
      {
        test: /\.vue$/,
        // 依赖css-loader、vue-template-compiler
        loader: 'vue-loader',
        include
        // 推荐include
        // exclude: /node_modules/
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            // 依赖file-loader
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
          }
        ]
      }
    ]
  }
}
