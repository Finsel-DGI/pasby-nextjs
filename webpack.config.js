const path = require('path');

module.exports = {
  entry: './src/index.ts', // Entry point of your SDK
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'PasbyNext',
      type: 'umd',
    },
    globalObject: 'this',
  },
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    axios: 'axios',
    'js-cookie': 'js-cookie',
    next: 'next',
    'next': 'next'
  },
};
