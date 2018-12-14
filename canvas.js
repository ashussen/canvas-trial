var canvas = document.querySelector('canvas');
var colors = ['#f0941d','#0071b3','#00a5e6','#80bb42','#ee411f'];
var totalShapes = 10;
var maxShapeSize = 150;
var minShapeSize = 30;
var shapes = new Array();

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
  this.x = x;
  this.y = y;
  this.size = size;

  this.draw = function() {
    c.fillStyle = colors[colorNumber];
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x + this.size/2, this.y + this.size/2);
    c.lineTo(this.x - this.size/2, this.y + this.size/2);
    c.fill();
  }

  this.draw();
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
    console.log('Distance :' + distance);
    console.log('Combined Radius:' + square.radius + shapes[j].radius);
    if( distance < shape.radius + shapes[j].radius) {
      overlapping = true;
      break;
    }
  }

  return overlapping;
}

for(var i = 0; i < totalShapes; i++) {
  var size = getRandomLength(minShapeSize, maxShapeSize);
  var x  = Math.floor(Math.random()*(canvas.width - size));
  var y  = Math.floor(Math.random()*(canvas.height - size));
  var colorNumber = Math.floor(Math.random()*colors.length);


  var randomizeShape = Math.floor(Math.random() * 1 + 1);
  console.log(randomizeShape);

  if(randomizeShape == 1) {
    if(shapes.length < 1) {
        shapes.push(new Square(x, y, size));
      } else {
        var square = new Square(x, y, size);

        if(!isOverlapping(square)) {
          shapes.push(square);
        }
      }

  }
  //switch(Math.floor(Math.random() * 1)) {
  //  case 1:
  //    if(shapes.length < 1) {
  //      shapes.push(new Square(x, y, size));
  //    } else {
  //      var square = new Square(x, y, size);

  //      if(!isOverlapping(square)) {
  //        shapes.push(square);
  //      }
  //    }
 //     break;
 //   case 2:
      //shapes.push(new Circle(x, y, size)); break;
 //   case 3:
      //shapes.push(new Triangle(x, y, size)); break;
 //   default:
      //shapes.push(new Square(x, y, size)); break;
 // }
}

for(var i = 0; i < shapes.length; i++) {
  shapes[i].draw();
}

console.log(shapes);


