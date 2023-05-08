// Gravitational Attraction
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/EpgB3cNhKPM
// https://thecodingtrain.com/learning/nature-of-code/2.5-gravitational-attraction.html
// https://editor.p5js.org/codingtrain/sketches/MkLraatd

class Attractor {
  
    constructor(x,y,m) {
      this.pos = createVector(x,y);
      this.mass = m;
      this.r = sqrt(this.mass)*25;
    }
    
    attract(circulos) {
      let force = p5.Vector.sub(this.pos, circulos.pos);
      let distanceSq = constrain(force.magSq(), 1, 5000);
      let G = 100;
      let strength = G * (this.mass * circulos.mass) / distanceSq;
      force.setMag(strength);
      circulos.applyForce(force);
    }
    
    attract(cuadrados) {
      let force = p5.Vector.sub(this.pos, cuadrados.pos);
      let distanceSq = constrain(force.magSq(), 1, 5);
      let G = 0;
      let strength = G * (this.mass * cuadrados.mass) / distanceSq;
      force.setMag(strength);
      cuadrados.applyForce(force);
    }

  }