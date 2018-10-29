let paddle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  paddle = new Paddle();
}

function draw() {
  background(0);
  paddle.display();
  paddle.update(20);
  paddle.checkEdges();
}

function keyPressed() {
  if (key.toLowerCase() === 'a' || keyCode === LEFT_ARROW) {
    paddle.isMovingLeft = true;
  }
  if (key.toLowerCase() === 'd' || keyCode === RIGHT_ARROW) {
    paddle.isMovingRight = true;
  }
}

function keyReleased() {
  paddle.isMovingLeft = false;
  paddle.isMovingRight = false;
}
