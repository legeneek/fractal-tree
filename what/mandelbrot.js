(function() {
  var ws = new WorkShop('#mandelbrot')
  var CPS = 2
  var MAX_ITERATIONS = 300
  var DELTA = 0.008

  ws.size(600, 600)
  ws.background('#a44235')
  
  function initialize () {
    ws.translate(ws.cvs.width / 2, ws.cvs.height / 2)
    ws.scale(1 / DELTA, -1 / DELTA)
  }

  function draw () {
    ws.fill('#000')
    for (var Re = -CPS; Re <= CPS; Re = Re + DELTA) { // Represents the Re-axis. Re represents the real part of a complex c value.
      next_c_value: // "continue next_c_value;" is equivalent to an old school GOTO statement (which can be very handy in deeply nested loops).
        for (var Im = -CPS; Im <= CPS; Im = Im + DELTA) { // Represents the Im-axis. Im represents the imaginary part of a complex c value.
          var z = new Complex(0, 0); // Represents Zo (where "o" indicates subscript 0).
          var c = new Complex(Re, Im); // Represents a complex c value, which either does or does not belong to the Mandelbrot set, as determined in the next FOR loop.

          for (var iterationCount = 1; iterationCount <= MAX_ITERATIONS; iterationCount++) {
            z = c.add( z.square() ); // Performs Zn+1 = (Zn)^2 + c
            if (z.modulus() > 2) {
              continue next_c_value; // The complex c value is not part of the Mandelbrot set, so immediately check the next one.
            } // if
          } // for

          // Assert: z.modulus() <= 2, therefore the complex c value is probably a member of the Mandelbrot set - increase MAX_ITERATIONS to improve this determination.

          ws.rect(Re, Im, DELTA, DELTA); // This c value is probably part of the Mandelbrot set, so color this pixel black. A "pixel" for the canvas is a DELTA x DELTA black square.
        } // for
    } // for
  }

  initialize()
  draw()

})()

