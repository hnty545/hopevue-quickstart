'use strict';
const path = require('path');
let dev;
if (process.env.RUN_TYPE === '"dev"') {
  let env;
  if (process.argv[6] === '--env.target=development') {
    env = require('./dev.env');
  } else if (process.argv[6] === '--env.target=testing') {
    env = require('./test.env');
  } else if (process.argv[6] === '--env.target=production') {
    env = require('./prod.env');
  } else {
    env = require('./dev.env');
  }
  let target = env.CUSTOM_PARAMS.baseURL;
  let debugApiPath = {};
  const debug_api_paths = env.CUSTOM_PARAMS.debugApiPath;
  for (let api in debug_api_paths) {
    let debug_api_path = env.CUSTOM_PARAMS.debugApiPath[api]
      .replace('"', '')
      .replace('"', '');
    let debug_api_match_path = '^' + debug_api_path;
    let pathRewrite = {};
    pathRewrite[debug_api_match_path] = '/';
    debugApiPath[debug_api_path] = {
      target: target[api].replace('"', '').replace('"', ''),
      changeOrigin: true,
      secure: false,
      pathRewrite: pathRewrite,
      onProxyRes(proxyRes, req, res) {
        var cookies = proxyRes.headers['set-cookie'];
        if (cookies == null || cookies.length == 0) {
          delete proxyRes.headers['set-cookie'];
          return;
        }
        for (var i = 0, n = cookies.length; i < n; i++) {
          if (cookies[i].match(/^JSESSIONID=[^;]+;[\s\S]*Path=\/[^;]+/)) {
            cookies[i] = cookies[i].replace(/Path=\/[^;]+/, 'Path=/');
          }
        }
        proxyRes.headers['set-cookie'] = cookies;
      }
    };
  }
  dev = {
    target: target,
    // Paths
    assetsRoot: path.resolve(
      __dirname,
      process.env.TARGET_PLATFORM === '"mp"' ? '../dist/mp' : '../dist/h5'
    ),
    assetsSubDirectory: process.env.TARGET_PLATFORM === '"mp"' ? '' : 'static',
    assetsPublicPath: '/',
    proxyTable: {
      ...debugApiPath,
      historyApiFallback: true
    },
    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 9999, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    /**
     * Source Maps
     */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: '#cheap-module-eval-source-map',
    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: true
  };
}

module.exports = {
  dev: dev,
  build: {
    // Template for index.html
    index: path.resolve(
      __dirname,
      process.env.TARGET_PLATFORM === '"mp"'
        ? '../dist/mp/index.html'
        : '../dist/h5/index.html'
    ),
    // Paths
    assetsRoot: path.resolve(
      __dirname,
      process.env.TARGET_PLATFORM === '"mp"' ? '../dist/mp' : '../dist/h5'
    ),
    assetsSubDirectory: process.env.TARGET_PLATFORM === '"mp"' ? '' : 'static',
    assetsPublicPath: './',
    useEslint: true,
    showEslintErrorsInOverlay: false,
    /**
     * Source Maps
     */
    devtool: '#source-map',
    cacheBusting: true,
    cssSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
