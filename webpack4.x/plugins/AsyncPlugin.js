class AsyncPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('AsyncPlugin', (compilation, cb) => {
      setTimeout(() => {
        console.log('文件发射后...')
        cb()
      }, 1000)
    })
    compiler.hooks.afterEmit.tapPromise('AsyncPlugin', (compilation) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('文件发射后1ms...')
          resolve()
        }, 1000)
      })
    })
  }
}

module.exports = AsyncPlugin