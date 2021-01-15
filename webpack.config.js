const { resolve } = require('path');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const IfPlugin = require('if-webpack-plugin')

const rootPath = (path) => resolve(__dirname, path);

module.exports = env => ({
  mode: env.production ? 'production' : 'development',

  entry: {
    'adze': rootPath('src/index.ts'),
  },

  output: {
    path: rootPath('dist'),
    library: 'AdzeLib',
    libraryExport: '',
    libraryTarget: 'umd',
    globalObject: 'this',
  },

  devtool: env && env.production ? '' : 'inline-source-map',

  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },

    extensions: ['.js', '.ts'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ],
      },
    ],
  },

  plugins: [
    new IfPlugin(env.withAnalysis, new BundleAnalyzerPlugin()),
  ]
});
