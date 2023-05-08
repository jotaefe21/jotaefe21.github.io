
      class Circulo {
        constructor(x, y, tamanioX, m) {
          this.pos = createVector(x, y);
          this.vel = p5.Vector.random2D();
          this.vel.mult(1);
          this.acc = createVector(0, 0);
          this.size = tamanioX;
          this.mass = m;
          this.r = sqrt(this.mass) * 2;
      
          this.changeDir = function (){
          
            this.vel.mult(-1);
       }
        }
      
        applyForce(force) {
          let f = p5.Vector.div(force, this.mass);
          this.acc.add(f);
        }
      
        update() {
          if (this.pos.x - this.size/2 <0 || this.pos.x + this.size/2 > width){
            this.vel.x =this.vel.x*-0.001;
          }
          if (this.pos.y - this.size/2 <0 || this.pos.y + this.size/2 > height){
            this.vel.y =this.vel.y*-0.001;
          }
          this.vel.add(this.acc);
          this.pos.add(this.vel);
          this.acc.set(0, 0);
        }
      
        checkCollision(other) {
          let distance = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
          if (distance < (this.size + other.size)) {
            return true;
          } else {
            return false;
          }
        }
      
        show() {
          strokeWeight(5)
          stroke(0, 0, 0, 255);
          fill(228, 185, 30);
          ellipse(this.pos.x, this.pos.y, this.size /*this.r * 2)*/);
        }
      
        bottomShow() {
          noStroke();
          //fill(236, 226, 214);
          fill (color('#D8CEAD'));
          let bottomSize = this.size*1.6;
          let bottomPosX = this.pos.x - this.size/2;
          let bottomPosY = this.pos.y - this.size/2;
          ellipse(this.pos.x, this.pos.y, bottomSize /*this.r * 2)*/);
        }
      }
      
      class Cuadrado{
        constructor(x, y, tamanioX, m) {
          this.pos = createVector(x, y);
          this.vel = p5.Vector.random2D();
          this.vel.mult(1);
          this.acc = createVector(0, 0);
          this.size = tamanioX;
          this.mass = m;
          this.r = sqrt(this.mass) * 2;

          this.changeDir = function (){
            this.vel.mult(-1);
       }
        }
      
        applyForce(force) {
          let f = p5.Vector.div(force, this.mass);
          this.acc.add(f);
        }
      
        update() {
          if (this.pos.x - this.size/2 <0 || this.pos.x + this.size/2 > width){
            this.vel.x =this.vel.x*-0.001;
          }
          if (this.pos.y - this.size/2 <0 || this.pos.y + this.size/2 > height){
            this.vel.y =this.vel.y*-0.001;
          }
          
          this.vel.add(this.acc);
          this.pos.add(this.vel);
          this.acc.set(0, 0);
      
              
        }
        checkCollision(other) {
          let distance = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
          if (distance < (this.size + other.size)) {
            return true;
          } else {
            return false;
          }
        }
        show() {
          rectMode(CENTER);
          strokeWeight(5)
          stroke(0,0,0,255);
          fill(100,100, 255);
          square(this.pos.x, this.pos.y, this.size );
        }
        
        bottomShow() {
          noStroke();
          fill (color('#D8CEAD'));
          let bottomSize = this.size*1.6;
          let bottomPosX = this.pos.x ;
          let bottomPosY = this.pos.y ;
          square(bottomPosX, bottomPosY, bottomSize );

        }
      
      
      }
      
      class Rectangulo{
        constructor(x, y, tamanioX, tamanioY, m) {
          this.pos = createVector(x, y);
          this.vel = p5.Vector.random2D();
          this.vel.mult(5);
          this.acc = createVector(0, 0);
          this.sizeW = tamanioX;
          this.sizeH = tamanioY;
      
          this.mass = m;
          this.r = sqrt(this.mass) * 2;

          this.changeDir = function (){
          
            this.vel.mult(-1);
       }
        }
      
        applyForce(force) {
          let f = p5.Vector.div(force, this.mass);
          this.acc.add(f);
        }
      
        update() {
          if (this.pos.x - this.sizeW/2 <0 || this.pos.x +this.sizeW/2 > width){
            this.vel.x =this.vel.x*-0.001;
          }
          if (this.pos.y - this.sizeH/2 <0 || this.pos.y + this.sizeH/2  > height){
            this.vel.y =this.vel.y*-0.001;
          }
          
          this.vel.add(this.acc);
          this.pos.add(this.vel);
          this.acc.set(0, 0);
      
              
        }
        checkCollision(other) {
          let distance = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
          if (distance < ((this.sizeW + other.sizeW) && (this.sizeH + other.sizeH))) {
            return true;
          } else {
            return false;
          }
        }
        show() {
          rectMode(CENTER);
          strokeWeight(5)
          stroke(0,0,0,255);
          fill(100,255, 100);
          rect(this.pos.x, this.pos.y, this.sizeW, this.sizeH /*this.r * 2)*/);
        }
        
        bottomShow() {
          noStroke();
          fill (color('#D8CEAD'));
          let bottomSizeW = this.sizeW*1.6;
          let bottomSizeH = this.sizeH*1.6;
          let bottomPosX = this.pos.x ;
          let bottomPosY = this.pos.y;
          rect(bottomPosX, bottomPosY, bottomSizeW, bottomSizeH /*this.r * 2)*/);
        }
      
      
      }
      
      
      
      /*
      class Triangulo {
        constructor(x1, y1, x2, y2, x3, y3) {
          this.pos1 = createVector(x1, y1);
          this.pos2 = createVector(x2, y2);
          this.pos3 = createVector(x3, y3);
          this.vel = createVector();
          this.acc = createVector();
          this.pg = createGraphics(width, height);
        }
      
        show(pg) {
          this.pg.clear();
          this.pg.strokeWeight(3);
          this.pg.stroke(0, 0, 0, 255);
          this.pg.fill(79, 133, 184);
          this.pg.triangle(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y);
          pg.image(this.pg, 0, 0);
        }
      
        applyForce(force) {
          this.acc.add(force);
        }
      
        update() {
          this.vel.add(this.acc);
          this.pos1.add(this.vel);
          this.pos2.add(this.vel);
          this.pos3.add(this.vel);
          this.acc.mult(0);
        }
        */

        //FUERZA

      class Attractor {
        constructor(x, y, m) {
          this.pos = createVector(x, y);
          this.mass = m;
          this.r = sqrt(this.mass) * 2;
        }
      
        attract(circulosList) {
          let force = p5.Vector.sub(this.pos, circulosList.pos);
          let distanceSq = constrain(force.magSq(), 1, 5);
          let G = 2;
          let strength = G * (this.mass * circulosList.mass) / distanceSq;
          force.setMag(strength);
          circulosList.applyForce(force);
        }
      }
