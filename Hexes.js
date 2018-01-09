class Hex {
  constructor(q, r, dim) {
    this.q = q;
    this.r = r;
    this.dim = dim;
    this.w = dim * 2;
    this.h = (sqrt(3) / 2) * this.w;
  }

  static Display(obj) {
    translate(obj.w * obj.q * 0.75, (obj.h * obj.r) + (-0.5 * obj.h * obj.q));
    let x = -1 * (obj.dim / 2);
    let y = obj.dim;
    let half = obj.h / 2;
    fill(180, 40, 40);
    stroke(255);
    strokeWeight(2);

    beginShape();
    vertex(x, y);
    x += obj.dim;
    vertex(x, y);
    x += obj.dim / 2;
    y -= half;
    vertex(x, y);
    x -= obj.dim / 2;
    y -= half;
    vertex(x, y);
    x -= obj.dim;
    vertex(x, y);
    x -= obj.dim / 2;
    y += half;
    endShape(CLOSE);
  }
}