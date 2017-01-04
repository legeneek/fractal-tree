function Complex(x, y) {
  // Constructs the complex number x + yi.
  this.x = x || 0; // Default to 0 if this parameter is undefined.
  this.y = y || 0;
} // Complex

Complex.prototype.toString = function() {
  // Returns a string representing this complex number in the form "x + yi".
  return this.y >= 0 ? this.x + " + " + this.y + "i" : this.x + " - " + (-this.y) + "i";
} // toString

Complex.prototype.modulus = function() {
  // Returns a real number equal to the absolute value of this complex number.
  return Math.sqrt(this.x*this.x + this.y*this.y);
} // modulus

Complex.prototype.add = function(z) {
  // Returns a complex number equal to the sum of the given complex number and this complex number.
  return new Complex(this.x + z.x, this.y + z.y);
} // sum

Complex.prototype.square = function() {
  // Returns a complex number equal to the square of this complex number.
  var x = this.x*this.x - this.y*this.y;
  var y = 2*this.x*this.y;

  return new Complex(x, y);
} // square