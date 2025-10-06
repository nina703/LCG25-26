let beeX, beeY;

function setup() {
  createCanvas(600, 400);
  beeX = width / 2;
  beeY = height / 2;
  noStroke();
}

function draw() {
  background(135, 206, 250); // cielo azzurro

  drawCloud(100, 80);
  drawCloud(400, 60);
  drawCloud(250, 130);

  // prato
  fill(0, 200, 0);
  rect(0, height - 100, width, 100);

  // triangolini per bordo del prato
  fill(0, 200, 0);
  triangle(20, height - 100, 30, height - 120, 40, height - 100);
  triangle(60, height - 100, 70, height - 115, 80, height - 100);
  triangle(100, height - 100, 110, height - 130, 120, height - 100);
  triangle(150, height - 100, 160, height - 125, 170, height - 100);
  triangle(200, height - 100, 210, height - 110, 220, height - 100);
  triangle(250, height - 100, 260, height - 118, 270, height - 100);
  triangle(300, height - 100, 310, height - 135, 320, height - 100);
  triangle(360, height - 100, 370, height - 120, 380, height - 100);
  triangle(420, height - 100, 430, height - 115, 440, height - 100);
  triangle(480, height - 100, 490, height - 130, 500, height - 100);
  triangle(540, height - 100, 550, height - 120, 560, height - 100);

  // effetto "inseguimento"
  beeX = lerp(beeX, mouseX, 0.05); //(start, stop, velocità di inseguimento)
  beeY = lerp(beeY, mouseY, 0.05);

  // limita l’ape all’interno della tela
  beeX = constrain(beeX, 40, width - 40); //(limita tra 40 e width - 40 la variabile beeX)
  beeY = constrain(beeY, 40, height - 40);

  drawBee(beeX, beeY); //richiama la funzione per il disegno dell'ape che viene definita dopo
}

function drawBee(x, y) {
  push();
  //sposta l'origine al centro dell'ape, di defaoult  è in alto a sinistra, tutto quello che è disegnato dopo avrà centro diverso
  translate(x, y); 

  //CORPO
  fill(255, 204, 0);
  ellipse(0, 0, 60, 40);

  //STRISCE NERE 
  fill(0);
  rect(-15, -20, 5, 40, 3);
  rect(0, -20, 5, 40, 3);
  rect(15, -20, 5, 40, 3);

  //TESTA
  fill(0);
  ellipse(-38, 0, 28, 28);

  //OCCHIO
  fill(255);
  ellipse(-42, -5, 10, 10);
  fill(0);
  ellipse(-43, -5, 5, 5);

  //ALI (animate)
  fill(255, 255, 255, 150); //bianco semi-trasparente

  // Calcola l'angolo di rotazione per l'animazione delle ali
  let wingAngle = radians(7) * sin(frameCount * 0.3);
  // Ala sinistra
  push();
  translate(5, -25);
  rotate(-wingAngle); //variabile definita sopra
  ellipse(0, 0, 40, 20);
  pop();
  // Ala destra
  push();
  translate(25, -25);
  rotate(wingAngle);
  ellipse(0, 0, 40, 20);
  pop();

//ANTENNE
//bordi neri per le linee
push();
stroke(0);
strokeWeight(2); //spessore 2 pixel
line(-38, -14, -42, -22); // Antenna sinistra
line(-38, -14, -34, -22); // Antenna destra
//no bordi
noStroke();

//cerchi neri alle estremità 
fill(0);
circle(-42, -22, 4); //a sinistra
circle(-34, -22, 4); //destra

//PUNGIGLIONE
fill(50);
//triangolo sulla destra del corpo
triangle(28, -5, 28, 5, 35, 0);

  pop();
}

// funzione per disegnare una nuvola
function drawCloud(x, y) {
  fill(255);
  noStroke();
  ellipse(x, y, 60, 40);
  ellipse(x + 30, y + 10, 60, 40);
  ellipse(x - 30, y + 10, 60, 40);
  ellipse(x, y + 15, 80, 40);
}