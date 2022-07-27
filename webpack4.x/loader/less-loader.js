const less = require('less')

function loader(source) {
  let res
  less.render(source, (err, { css, map }) => {
    res = css
  })
  return res
}

module.exports = loader