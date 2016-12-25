function WorkShop (canvas) {
  this.cvs = document.querySelector(canvas)
  this.ctx = this.cvs.getContext('2d')
}

WorkShop.prototype.size = function (w, h) {
  this.cvs.width = w
  this.cvs.height = h
}

WorkShop.prototype.background = function(color) {
  this.ctx.fillStyle = color
  this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height)
}

WorkShop.prototype.line = function (x, y, dx, dy) {
  this.ctx.beginPath()
  this.ctx.moveTo(x, y)
  this.ctx.lineTo(dx, dy)
  this.ctx.stroke()
}

WorkShop.prototype.stroke = function (color) {
  this.ctx.strokeStyle = color
}

WorkShop.prototype.translate = function (x, y) {
  this.ctx.translate(x, y)
}

WorkShop.prototype.rotate = function(angel) {
  this.ctx.rotate(angel)
}

WorkShop.prototype.push = function () {
  this.ctx.save()
}

WorkShop.prototype.pop = function () {
  this.ctx.restore()
}
