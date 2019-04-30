'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');
const MpvuePlugin = require('webpack-mpvue-asset-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var glob = require('glob');
var relative = require('relative');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const envConfig =
  process.env.RUN_TYPE === '"build"' ? config.build : config.dev;

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !envConfig.showEslintErrorsInOverlay
  }
});

function getEntry(rootSrc) {
  var map = {};
  glob.sync(rootSrc + '/views/**/main.js').forEach(file => {
    var key = relative(rootSrc, file).replace('.js', '');
    map[key] = file;
  });
  return map;
}

const appEntry = { app: resolve('./src/main-mp.js') };
const pagesEntry = getEntry(resolve('./src'), 'views/**/main.js');
const entry = Object.assign({}, appEntry, pagesEntry);

module.exports = {
  entry: entry,
  target: require('mpvue-webpack-target'),
  output: {
    path: envConfig.assetsRoot,
    filename: '[name].js',
    publicPath: envConfig.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.styl'],
    alias: {
      vue: 'mpvue',
      axios: 'axios/dist/axios',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      ...(envConfig.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'mpvue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.vue$/,
        loader: 'mpvue-config-loader',
        exclude: [resolve('src/components')],
        options: {
          transform: function(fileName, resourcePath) {
            if (fileName === 'App-mp') {
              //匹配App-mp.vue
              fileName = 'app';
            } else {
              //匹配**/main.js
              fileName = path.join(fileName, '..', 'main');
            }
            return fileName;
          }
        }
      },
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('test')],
        use: [
          'babel-loader',
          {
            loader: 'mpvue-loader',
            options: Object.assign({ checkMPEntry: true }, vueLoaderConfig)
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('/img/[name].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('/media/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('/fonts/[name].[ext]')
        }
      }
    ]
  },
  plugins: [
    new MpvuePlugin(),
    new CopyWebpackPlugin(
      [
        {
          from: '**/*.json',
          to: ''
        }
      ],
      {
        context: 'src/'
      }
    ),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist/mp/static'),
        ignore: ['.*']
      }
    ])
  ]
};
