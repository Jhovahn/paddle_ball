function Ball() {
  this.pos = createVector(width / 2, height / 2);
  this.r = 30;
  this.direction = createVector(1, 1);
  this.factor = 8;
  this.vel = createVector(1, 1).mult(this.factor);
  this.accel = createVector(1.1, 1.1);
  this.score = 0;

  this.display = function() {
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    console.log(this.score);
    let c = color(255, 204, 0);
    fill(c);
    noStroke();
  };

  this.update = function() {
    this.pos.x += this.vel.x * this.direction.x * this.accel.x;
    this.pos.y += this.vel.y * this.direction.y * this.accel.y;
  };

  this.checkEdges = function() {
    if (this.pos.y < this.r && this.direction.y < 0) this.direction.y *= -1;
    // if (this.pos.y > height - this.r && this.direction.y > 0)
    //   this.direction.y *= -1;
    if (this.pos.x < this.r && this.direction.x < 0) this.direction.x *= -1;
    if (this.pos.x > width - this.r && this.direction.x > 0)
      this.direction.x *= -1;
  };

  this.meets = function(paddle) {
    if (
      this.pos.y < paddle.pos.y &&
      this.pos.y > paddle.pos.y - this.r &&
      this.pos.x > paddle.pos.x - this.r &&
      this.pos.x < paddle.pos.x + paddle.w + this.r
    ) {
      this.accel.x += 0.1;
      this.accel.y += 0.1;
      this.score++;

      return true;
    } else return false;
  };
}
