function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
  textSize(25);
createA('https://gtecom/ValentinaOchoa09', 'Mis avances sesión 1', '_blank').id('Valentina');
  frameRate(6);
  background(150, 100, 200);
}

function draw() {
  text("🍡", mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed () {  
      background('green');  
  }

