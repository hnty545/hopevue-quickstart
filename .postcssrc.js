// https://github.com/michael-ciniawsky/postcss-load-config

const wxss =
  process.env.TARGET_PLATFORM === '"mp"' ? { 'postcss-mpvue-wxss': {} } : {};

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    ...wxss
  }
};
