import {WorkShop} from './workshop'

const ws = new WorkShop('#fractal')
const len = 100
const rate = .67
let angel = Math.PI / 10

function draw () {
  ws.size(400, 400)
  ws.background('#000')
  ws.stroke('#fff')
  ws.translate(ws.cvs.width / 2, ws.cvs.height)
  const iter = branch(len)
  setInterval(function() {
    iter.next()
  }, 300)

}

function* branch (len) {
  ws.line(0, 0, 0, -len)
  ws.translate(0, -len)
  yield
  if (len > 10) {
    ws.push()
    ws.stroke('#f00')
    ws.rotate(angel)
    yield* branch(len * rate)
    ws.pop()
    ws.push()
    ws.stroke('#fff')
    ws.rotate(-angel)
    yield* branch(len * rate)
    ws.pop()
  }
}

draw()
