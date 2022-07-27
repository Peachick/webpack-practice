const { sources } = require('webpack')

class FileListPlugin {
  constructor(params = { filename: 'list.md' }) {
    this.filename = params.filename
  }
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('FileListPlugin', (compilation) => {
      compilation.hooks.processAssets.tap('FileListPlugin', assets => {
        // let content = '## 文件名    资源大小\r\n'
        // Object.entries(assets).forEach(([fileName, { _value }]) => {
        //   console.log(fileName, _value.slice(0, 200))
        //   content += `- ${fileName}   ${_value.length}\r\n`
        // })
        for (const asset in assets) {
          if (asset.endsWith('.js')) {
            compilation.updateAsset(asset, source => {
              return new sources.RawSource(
                source.source().replace(/\/\*(\*)*(.*)\*\//g, ($, $1, $2) => `/** 添加指纹... ${$2}*/`)
              );
            });
          }
        }
      })
    })
  }
}

module.exports = FileListPlugin