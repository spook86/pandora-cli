/**
 * @fileOverview 常量
 * @author sizhao | 870301137@qq.com
 * @version 1.0.0 | 2018-06-26 | sizhao    // 初始版本
*/

const path = require('path')

const DEFAULT_NAME = '.pandora.conf.json'
const HOOK_DIR = '.pandora'
const CACHE_DIR = '.pandora/.cache'

module.exports = {
  DEFAULT_NAME,
  DEFAULT_CONF: path.join(process.cwd(), DEFAULT_NAME),
  DEFAULT_ENV: 'dev',
  ENV: {
    dev: 'development',
    test: 'test',
    pre: 'preproduction',
    prod: 'production'
  },
  HOOK_DIR,
  CACHE_DIR
}