const path = require('path')

const resolve = (...p) => path.resolve(__dirname, './', ...p)
const TestPlugin = require(resolve('plugins/Test'))
const AsyncPlugin = require(resolve('plugins/AsyncPlugin'))
const FileListPlugin = require(resolve('plugins/FileListPlugin'))

module.exports = {
  mode: 'development',
  entry: resolve('src/index.js'),
  resolveLoader: {
    modules: ['node_modules', resolve('loader')]
  },
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css/ig,
        use: ['style-loader']
      },
      {
        test: /\.less/ig,
        use: ['style-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png|jpeg|svg)$/ig,
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit: 100 * 1024,
              limit: 1024 * 1024,
              publicPath: '/dist/'
            }
          }
        ]
      },
      {
        test: /\.js$/ig,
        use: [
          {
            loader: 'banner',
            options: {
              author: 'Peachick',
              description: 'xxxx',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new TestPlugin(),
    new AsyncPlugin(),
    new FileListPlugin(),
  ]
}