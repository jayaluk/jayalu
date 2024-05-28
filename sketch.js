let cor;
let circulex; // x
let circuley; // y

function setup() {
  createCanvas(400, 400);
  background ("#3F51B5");
  cor = color (random(0, 255), random(0, 255), random(0, 255) );
  circulex = [0, 0, 0];
  circuley = [random(height), random (height), random (height)];
}

function draw() {
  fill (cor);
  
  //console.log (circulex.length);
  for(let contador in circulex) {
  //console.log(contador);
  circle (circulex[contador], circuley[contador], 50);
  circulex[contador] += random(0, 3);
  circuley[contador] += random(-3, 3);
  
  if(circulex[contador] >= width ) {
    circulex[contador] = 0;
    circuley[contador] = random (height);
    }
  }
  
  if(mouseIsPressed) {
  cor = color (random(0, 255), random(0, 255), random(0, 255), random (0,100) );
  }
}