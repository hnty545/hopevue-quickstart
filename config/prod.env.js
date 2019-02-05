'use strict';
const merge = require('webpack-merge');
const baseEnv = require('./base.env');
module.exports = merge(baseEnv, {
  NODE_ENV: '"production"',
  CUSTOM_PARAMS: {
    baseURL: baseEnv.CUSTOM_PARAMS.parseBaseUrlGroupByBuildType(
      require('./baseUrl'),
      'prod'
    ),
    DEBUG: false
  }
});
