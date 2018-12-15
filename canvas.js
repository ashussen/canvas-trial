var canvas = document.querySelector('canvas');
var colors = ['#f0941d','#0071b3','#00a5e6','#80bb42','#ee411f'];
var totalShapes = 10;
var maxShapeSize = 150;
var minShapeSize = 30;
var opacity = 0.3;
var shapes = new Array();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.globalAlpha = opacity;

function Circle(x, y, radius) {
  var colorNumber = Math.floor(Math.random() * colors.length);
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.centerX = x;
  this.centerY = y;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = colors[colorNumber];
    c.fill();
  }
}

function Square(x, y, size) {
  var colorNumber = Math.floor(Math.random() * colors.length);
  this.x = x;
  this.y = y;
  this.size = size;
  this.centerX = x + size/2;
  this.centerY = y + size/2;
  this.radius = Math.hypot(size/2, size/2);
  this.draw = function() {
    c.fillStyle = colors[colorNumber];
    c.fillRect(this.x, this.y, this.size, this.size);
  }

}

function Triangle(x, y, size) {
  var colorNumber = Math.floor(Math.random() * colors.length);
  this.height = Math.floor(size * 433/500);
  this.x = x;
  this.y = y;
  this.size = size;
  this.centerX = (this.x + (this.x + this.size/2) + (this.x - this.size/2)) / 3;
  this.centerY = (this.y + (this.y + this.height) + (this.y + this.height)) / 3;
  this.radius = this.centerY - this.y;

  this.draw = function() {
    c.fillStyle = colors[colorNumber];
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x + this.size/2, this.y + this.height);
    c.lineTo(this.x - this.size/2, this.y + this.height);
    c.fill();
  }
}

function getRandomLength(min, max) {
  var addition = (max-min) * Math.random();
  var randomLength = min + addition;
  return Math.floor(randomLength);
}

function getDistance(x1, y1, x2, y2) {
  return Math.hypot(x2-x1, y2-y1)
}

function distance(ax, ay, bx,by) {
  return Math.hypot(ax-bx, ay-by);
}

function isOverlapping(shape) {
  var overlapping = false;

  for(var j = 0; j < shapes.length; j++) {
    var distance = getDistance(shape.centerX, shape.centerY, shapes[j].centerX, shapes[j].centerY);
    if( distance < shape.radius + shapes[j].radius) {
      overlapping = true;
      break;
    }
  }

  return overlapping;
}


//sorting not overlapping shapes
for(var i = 0; i < totalShapes; i++) {
  var size = getRandomLength(minShapeSize, maxShapeSize);
  var x  = Math.floor(Math.random()*(canvas.width - size));
  var y  = Math.floor(Math.random()*(canvas.height - size));
  var colorNumber = Math.floor(Math.random()*colors.length);

  var randomizeShape = Math.floor(Math.random() * 3 + 1);
  console.log(randomizeShape);

  if(shapes.length < 1) {
    //initiate the first shape
    shapes.push(new Square(x, y, size));
  }

  switch(randomizeShape) {
    case 1:
      var square = new Square(x, y, size);
      if(!isOverlapping(square)) { shapes.push(square); }
      break;
     case 2:
      var circle = new Circle(x, y, size);
      if(!isOverlapping(circle)) { shapes.push(circle); }
      break;
     case 3:
      var triangle = new Triangle(x, y, size);
      if(!isOverlapping(triangle)) { shapes.push(triangle); }
      break;
   }
}

//actually drawing not overlapping shapes
for(var i = 0; i < shapes.length; i++) {
  shapes[i].draw();
}

console.log(shapes);

