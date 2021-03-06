const path = require('path')

const resolve = (dir) => path.join(__dirname, '..', dir)

module.exports = {
  include: [resolve('test'), resolve('client')],
  dev: {
    assetsPublicPath: '/public/',
    // 错误 /static/, `${assetsPublicPath}${assetsSubDirectory}`: /public//static/
    assetsSubDirectory: 'static/'
  },
  prod: {
    assetsPublicPath: '/public/',
    assetsSubDirectory: 'static/'
  }
}
