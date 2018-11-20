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

  this.draw = function() {
    c.fillStyle = colors[colorNumber];
    c.fillRect(this.x, this.y, this.size, this.size);
  }

  this.draw();
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

function isOverlapping(x, y) {
  for(var i = 0; i < shapes.length; i++) {
    if(shapes[i] instanceof Square) {
      if(x > shapes[i].x && x < shapes[i].x + shapes[i].size ||   // if x is between the other shapes
         y > shapes[i].y && x < shapes[i].y + shapes[i].size ){   // if y is between the other shapes
        return true;
      }
    }
  }
  return false;
}

function distance(ax, ay, bx,by) {
  return Math.hypot(ax-bx, ay-by);
}

//for(var i = 0; i < totalShapes; i++) {
//  var size = getRandomLength(minShapeSize, maxShapeSize);
//  var x  = Math.floor(Math.random()*(canvas.width - size));
//  var y  = Math.floor(Math.random()*(canvas.height - size));
//  var colorNumber = Math.floor(Math.random()*colors.length);
//
//  if(!isOverlapping(x,y)) {
//    switch(Math.floor(Math.random() * 1)) {
//      case 1:
//        shapes.push(new Square(x, y, size)); break;
//      case 2:
//        shapes.push(new Circle(x, y, size)); break;
//      case 3:
//        shapes.push(new Triangle(x, y, size)); break;
//      default:
//        shapes.push(new Square(x, y, size)); break;
//    }
//  }
//}

//c.beginPath();
//c.moveTo(0,0);
//c.lineTo(100,0);
//c.lineTo(100,100);
//c.lineTo(0,100);
//c.fill();
//
//c.beginPath();
//c.arc(50, 50, 50, 0, Math.PI * 2, false);
//c.fillStyle = 'green';
//c.fill();

console.log(distance(0,0,50,50));

console.log(shapes);


