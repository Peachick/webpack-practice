const loaderUtils = require('loader-utils')
const fileLoader = require('./file-loader')

const getFileExt = fileName => fileName.match(/\.([^.]+)$/i)[1]

function loader(source) {
  const { limit } = loaderUtils.getOptions(this)
  if (limit && limit > source.length) {
    return `module.exports="data:image/${getFileExt(this.resourcePath)};base64,${source.toString('base64')}"`
  } else {
    return fileLoader.call(this, source)
  }
}
loader.raw = true

module.exports = loader