var canvas = document.querySelector('canvas');
var colors = ['#f0941d','#0071b3','#00a5e6','#80bb42','#ee411f'];
var totalShapes = 10;
var maxShapeSize = 200;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function Circle(x, y, radius) {
  var colorNumber = Math.floor(Math.random() * colors.length);
  this.x = x;
  this.y = y;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = colors[colorNumber];
    c.fill();
  }

  this.draw();
}

for(var i = 0; i < totalShapes; i++) {
  var size = Math.floor(Math.random()*maxShapeSize);
  var x  = Math.floor(Math.random()*(canvas.width - size));
  var y  = Math.floor(Math.random()*(canvas.height - size));
  var colorNumber = Math.floor(Math.random()*colors.length);

  c.fillStyle = colors[colorNumber];
  c.fillRect(x, y, size, size);
}

for(var i = 0; i < totalShapes; i++) {
  var size = Math.floor(Math.random()*maxShapeSize);
  var x  = Math.floor(Math.random()*(canvas.width - size));
  var y  = Math.floor(Math.random()*(canvas.height - size));

  new Circle(x, y, size);
}



