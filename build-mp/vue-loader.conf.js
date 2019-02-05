'use strict';
const utils = require('./utils');
const config = require('../config');
const isBuild = process.env.RUN_TYPE === '"build"';
const sourceMapEnabled = isBuild
  ? config.build.cssSourceMap
  : config.dev.cssSourceMap;

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isBuild
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: isBuild ? config.build.cacheBusting : config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};
