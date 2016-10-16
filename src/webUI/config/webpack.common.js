/**
 * @author: @ProuteauK
 */

const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
var CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');


/*
 * Webpack Constants
 */
const METADATA = {
  title: 'angular 2',
  baseUrl: '/'
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {
  metadata: METADATA,
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.browser.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helpers.root('src'),
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
	    {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          // these packages have problems with their sourcemaps
          helpers.root('node_modules/rxjs'),
	        helpers.root('node_modules/zone.js'),
          helpers.root('node_modules/@angular'),
          helpers.root('node_modules/@ng-bootstrap')
        ]
      }
    ],
    loaders: [
      { test: /\.js$/,    loader: 'babel',                      exclude: /node_modules/,  query: { preset: ['es2015'] }},
      { test: /\.ts$/,    loader: 'ts-loader',                  exclude: [/\.(spec|e2e)\.ts$/]},
      { test: /\.json$/,  loader: 'json-loader' },
      { test: /\.css$/,   loader: 'raw-loader' },
      { test: /\.html$/,  loader: 'raw-loader',                 exclude: [helpers.root('src/index.html')] }
    ]
  },
  plugins: [
    new ForkCheckerPlugin(),
    new OccurenceOrderPlugin(true),
    new CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    new CopyWebpackPlugin([
	    { from: '**/*.html',                                          to: 'app/component', context: 'src/app/component' },
	    { from: '**/*.css',                                           to: 'app/component', context: 'src/app/component' },
	    { from: 'src/assets',                                         to: 'assets' },
      { from: 'node_modules/chart.js/dist/Chart.js',                to: 'assets/static/css' },
      { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css',  to: 'assets/static/css' }
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
	  })
  ],
  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
