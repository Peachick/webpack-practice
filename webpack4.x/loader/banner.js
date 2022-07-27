const loaderUtils = require('loader-utils')

// 文件添加 banner loader
function loader(source) {
  const cb = this.async()
  const opts = loaderUtils.getOptions(this)
  setTimeout(() => {
    cb(null, `/* name: ${opts.name}\ndescription: ${opts.description} */` + source)
  }, 1000)
  return `/** name: ${opts.name}\ndescription: ${opts.description} **/` + source
}

module.exports = loader