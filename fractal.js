var ws = new WorkShop('canvas')
var len = 100
var rate = .67
var angel = 0
var step = Math.PI / 60

function draw () {
  ws.size(400, 400)
  ws.background('#000')
  ws.stroke('#fff')
  ws.translate(ws.cvs.width / 2, ws.cvs.height)
  branch(len)
}

function branch (len) {
  ws.line(0, 0, 0, -len)
  ws.translate(0, -len)
  if (len > 3) {
    ws.push()
    ws.rotate(angel)
    branch(len * rate)
    ws.pop()
    ws.push()
    ws.rotate(-angel)
    branch(len * rate)
    ws.pop()
  }
}

setInterval(function () {
  angel += step
  draw()
}, 1000 / 24)