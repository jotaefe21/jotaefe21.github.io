
let estado = 0;
let attractor;
let circulos = [];
let cuadrados = [];
let rectangulos = [];
let tamanioX;
let tamanioY;
let m;
let bottomLayer;

//let triangulosList = [];

function setup() {
  createCanvas(800 , 800);
  tamanioX = 50;
  tamanioY = 25;

  bottomLayer = createGraphics (800,800);
  for (let i = 0; i < circulos.length; i++) {
    circulos[i] = new Circulo(x, y, tamanioX, m);
  }

  
  attractor = new Attractor(width / 2, height / 2, 5);

}

function draw() {  
    background(233);
    m = random(50, 1000);

      // Doble bucle para verificar colisiones entre los círculos
    for (let i = 0; i < circulos.length; i++) {
    for (let j = i+1; j < circulos.length; j++) {
    if (circulos[i].checkCollision(circulos[j])) {
      
      // Manejar la colisión aquí, por ejemplo cambiar el color de los círculos
      circulos[i].changeDir();
      circulos[j].changeDir();
    }
  }
  
}
for (let i = 0; i < cuadrados.length; i++) {
  for (let j = i+1; j < cuadrados.length; j++) {
  if (cuadrados[i].checkCollision(cuadrados[j])) {
    
    // Manejar la colisión aquí, por ejemplo cambiar el color de los círculos
    cuadrados[i].changeDir();
    cuadrados[j].changeDir();
    }
  } 

}
for (let i = 0; i < rectangulos.length; i++) {
  for (let j = i+1; j < rectangulos.length; j++) {
  if (rectangulos[i].checkCollision(rectangulos[j])) {
    
    // Manejar la colisión aquí, por ejemplo cambiar el color de los círculos
  rectangulos[i].changeDir();
  rectangulos[j].changeDir();
    }
  } 

}
// Colisiones entre círculos y rectángulos
for (let i = 0; i < circulos.length; i++) {
  for (let j = 0; j < rectangulos.length; j++) {
    if (circulos[i].checkCollision(rectangulos[j])) {
      // Manejar la colisión aquí
      circulos[i].changeDir();
      rectangulos[j].changeDir();
    }
  }
}


// Colisiones entre círculos y cuadrados
for (let i = 0; i < circulos.length; i++) {
  for (let j = 0; j < cuadrados.length; j++) {
    if (circulos[i].checkCollision(cuadrados[j])) {
      // Manejar la colisión aquí
      circulos[i].changeDir();
      cuadrados[j].changeDir();
    }
  }
}



// Colisiones entre cuadrados y rectángulos
for (let i = 0; i < cuadrados.length; i++) {
  for (let j = 0; j < rectangulos.length; j++) {
    if (cuadrados[i].checkCollision(rectangulos[j])) {
      // Manejar la colisión aquí
      cuadrados[i].changeDir();
      rectangulos[j].changeDir();
    }
  }
}


    // BOTTOM LAYER
    bottomLayer.push();
    for (let circulo of circulos) {
      circulo.update();
      circulo.bottomShow();
      attractor.attract(circulo);
    }
  for (let cuadrado of cuadrados) {
      cuadrado.update();
      cuadrado.bottomShow();
      attractor.attract(cuadrado);
   }
   for (let rectangulo of rectangulos) {
    rectangulo.update();
    rectangulo.bottomShow();
    attractor.attract(rectangulo);
 }

    bottomLayer.pop();
   
    // TOP LAYER
    for (let circulo of circulos) {
        circulo.update();
        circulo.show();
        attractor.attract(circulo);
      }
    for (let cuadrado of cuadrados) {
        cuadrado.update();
        cuadrado.show();
        attractor.attract(cuadrado);
     }
     for (let rectangulo of rectangulos) {
      rectangulo.update();
      rectangulo.show();
      attractor.attract(rectangulo);
   }
    
   if (estado === 0) { //PREVIEW RECTANGULOS
    stroke(0,0,0,30);
    fill(180,180,165,33);
    rect(mouseX - tamanioX/2, mouseY - tamanioY/2, tamanioX, tamanioY);
    }

    if (estado === 1) { //PREVIEW CIRCULOS
    stroke(0,0,0,30);
    fill(228,185,33,33);
    ellipse(mouseX, mouseY, tamanioX);
    }
    if (estado === 2) { //PREVIEW CUADRADOS
    stroke(0,0,0,30);
    fill(100,100, 255,33);
    square (mouseX - tamanioX/2 , mouseY - tamanioX/2, tamanioX);
    }
}


function mouseClicked() {
  if (estado === 0 ) { //DIBUJA RECTANGULOS
    let rectangulo = new Rectangulo(mouseX - tamanioX/2, mouseY - tamanioY/2, tamanioX, tamanioY);
    rectangulos.push(rectangulo);
  }
  if (estado === 1 ) { //DIBUJA CIRCULOS
    // Add a new circle to the list
    let circulo = new Circulo(mouseX, mouseY, tamanioX);
    circulos.push(circulo);
  }
  if (estado === 2) { //DIBUJA CUADRADOS
    let cuadrado = new Cuadrado(mouseX - tamanioX/2, mouseY-tamanioX/2, tamanioX);
    cuadrados.push(cuadrado);
  }
  
  console.log ("cant circulos " + circulos.length);
  console.log ("cant cuadrados " + cuadrados.length);
  console.log(m);
    }

function keyPressed() {

  if (keyCode === ENTER) {
    rectangulos.pop();
    circulos.pop();
    cuadrados.pop();
    background(233);
  }
  

  if (keyCode === UP_ARROW) {
    tamanioX=tamanioX+10;
    console.log("tamanioX= " + tamanioX);
    console.log("tamanioY= " + tamanioY);
  }
  if (keyCode === DOWN_ARROW) {
    tamanioX=tamanioX-10;
    console.log("tamanioX= " + tamanioX);
    console.log("tamanioY= " + tamanioY);
  }
  if (keyCode === LEFT_ARROW) {
    tamanioY=tamanioY-10;
    console.log("tamanioX= " + tamanioX);
    console.log("tamanioY= " + tamanioY);
  }
  if (keyCode === RIGHT_ARROW) {
    tamanioY=tamanioY+10;
    console.log("tamanioX= " + tamanioX);
    console.log("tamanioY= " + tamanioY);
  }

}



function mouseWheel(event) {
  if (event.deltaY > 0) {
    estado++;
  } else {
    estado--;
  }
  limitar();
}

function limitar() {
  if (estado > 2) {
    estado = 0;
  }
  else if (estado <0 ){
    estado = 2;
  }
  console.log (estado);
}