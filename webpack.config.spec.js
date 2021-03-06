const path = require('path');
const srcPath = path.join(__dirname, './spec');

module.exports = {
  entry: path.join(srcPath, 'spec.entry'),
  output: {
    path: srcPath,
    filename: 'spec.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
            plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread']
          }
        }]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'spec'),
      path.join(__dirname, 'lib'),
      'node_modules'
    ]
  }
};
