const { resolve } = require('path');

const rootPath = (path) => resolve(__dirname, path);

module.exports = env => ({
  mode: env && env.production ? 'production' : 'development',

  entry: {
    adze: rootPath('src/index.ts'),
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
    extensions: ['.js', '.ts'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["@babel/env", { "targets": { "node": 8 } }],
              "@babel/typescript"
            ],
            "plugins": [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-optional-chaining",
              "@babel/plugin-proposal-nullish-coalescing-operator",
              "lodash"
            ]
          }
        }
      },
    ],
  },
});
