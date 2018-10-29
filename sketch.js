let paddle;
let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  paddle = new Paddle();
  ball = new Ball();
}

function draw() {
  background(0);
  paddle.display();
  paddle.update(20);
  paddle.checkEdges();
  ball.display();
  ball.update();
  ball.checkEdges();
  if (ball.meets(paddle) && ball.direction.y > 0) ball.direction.y *= -1;
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
