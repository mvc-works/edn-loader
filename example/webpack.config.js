
let path = require('path')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.edn$/, use: '@mvc-works/edn-loader' }
    ]
  }
}
