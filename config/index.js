/**
 * @file 项目所有的配置文件
 */

const path = require('path');
const swPrecacheConfig = require('./sw-precache');

module.exports = {
  swPrecache: swPrecacheConfig
};
