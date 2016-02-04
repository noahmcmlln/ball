var ball = {
  x: 300,
  y: 200,
  size: 15,
  xspeed: 3,
  yspeed: 3,

  display: function () {
    fill('#ff99ff');
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounceX();
    this.checkForBounceY();
    this.x += this.xspeed;
    this.y += this.yspeed;
  },

  checkForBounceX: function () {
    if (this.x > width - this.size / 2) {
      this.xspeed *= -1;
    }
    if (this.x < 0 + this.size / 2) {
      this.xspeed*= -1;
    }
  },

  checkForBounceY: function () {
    if (this.y > height - this.size / 2) {
      this.yspeed *= -1;
    }
    if (this.y < 0 + this.size / 2) {
      this.yspeed*= -1;
    }
  },
};

var setup = function() {
  createCanvas(600, 400);
};

var draw = function() { // draw is called 60 times per second; animation goes here.
  background(0); // pay special attention to this line; what does it do?
  ball.display();
  ball.update();
};
