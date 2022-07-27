class Test {
  apply(compiler) {
    compiler.hooks.done.tap('TestPlugin', (stats) => {
      console.log('打包完毕')
    })
  }
}

module.exports = Test