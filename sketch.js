var ball = {
  x: 20,
  y: 200,
  size: 15,
  speed: 3,

  display: function () {
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.x += this.speed;
  },

  checkForBounce: function () {
    if (this.x > width - this.size / 2) this.bounce();
    if (this.x < 0 + this.size / 2) this.unbounce();
  },

  bounce: function () {
    this.speed = -3;
  },

  unbounce: function () {
    this.speed = 3;
  }
};

var setup = function() {
  createCanvas(600, 400);
};

var draw = function() { // draw is called 60 times per second; animation goes here.
  background(100); // pay special attention to this line; what does it do?
  ball.display();
  ball.update();
};
