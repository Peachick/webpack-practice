const loaderUtils = require('loader-utils')

function loader(source) {
  const { publicPath = '' } = loaderUtils.getOptions(this)
  const filename = loaderUtils.interpolateName(this, '[name].[ext]', { options: source})
  this.emitFile(filename, source)
  return `module.exports="${publicPath}${filename}"`
}
loader.raw = true

module.exports = loader