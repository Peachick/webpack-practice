/**
 * 我是注释.................
 */
const app = 222
console.log(app)

function App(name, age) {
  this.name = name
  this.age = age
}

App.prototype.run = function() {
  console.log('run: ', this.name, this.age)
}

const a = new App('webpack', 10)
a.run()


import bg from './img/1.jpeg'
const img = new Image(400)
img.src = bg
img.onload = () => document.body.appendChild(img)

import './index.css'
import './global.less'
