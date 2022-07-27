function loader(source) {
  return `
    var style = document.createElement('style')
    style.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(style)
  ` 
}

module.exports = loader