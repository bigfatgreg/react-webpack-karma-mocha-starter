module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    files: [
      '__test__/test.bundle.js'
    ],
    frameworks: [ 'chai', 'mocha' ],
    plugins: [
      require('karma-webpack'),
      require('karma-chrome-launcher'),
      require('karma-chai'),
      require('karma-mocha'),
      require('karma-sourcemap-loader')
    ],
    preprocessors: {
      '__test__/test.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.jsx?$/
          }
        ],
      },
			watch: true
    },
    webpackMiddleware: {
      noInfo: true,
    }
  });
};