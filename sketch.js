let regDim = 20;
let Hexes = [];
let hexNum = 15;
let maxDist;
let angle = 0;
let hexPrism;
let checkBox;
let gotVars = false;

function setup() {
  hexPrism = loadModel("assets/tinker.obj");
  createCanvas(720, 720, WEBGL);
  for (let i = 0; i < hexNum; i++) {
    Hexes[i] = [];
    for (let j = 0; j < hexNum; j++) {
      let a = i - floor(hexNum / 2);
      let b = j - floor(hexNum / 2);
      if (a + b < ceil(hexNum / 2) && a + b > -1 * ceil(hexNum / 2)) {
        Hexes[i][j] = new Hex(i - floor(hexNum / 2), j - floor(hexNum / 2), regDim);
      }
    }
  }
  for (let i = Hexes.length - 1; i >= 0; i--) {
    for (let j = Hexes[i].length - 1; j >= 0; j--) {
      if (Hexes[i][j] == null) {
        Hexes[i].splice(j, 1);
      }
    }
  }
  maxDist = dist(0, 0, width / 3, width / 3);
  frameRate(30);

  checkBox = createCheckbox("Wireframe");
  checkBox.position(24, height + 24);

  ambientLight(120);
  pointLight(255, 255, 255, -width / 4, -height / 2, -width / 4)
  scale(1, 1.5, 1);
  translate(0, 20, 0);
  stroke(255);
}

function draw() {
  background(0);
  rotateX(-atan(1 / sqrt(2)));
  rotateY(PI / 4);
  for (let c of Hexes) {
    for (let obj of c) {

      push();
      let b = 4;
      let d = dist(obj.w * obj.q * 0.75, (obj.h * obj.r) - (-0.5 * obj.h * obj.q), 0, 0);
      let offset = map(d, 0, maxDist, -b, b + b / 5);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 1, 6);
      translate(obj.w * obj.q * 0.75, (h * 100) / 4.5, (obj.h * obj.r) - (-0.5 * obj.h * obj.q));
      scale(2, h, 2);
      strokeWeight(checkBox.checked() ? 1 : 0);
      rotateX(HALF_PI);
      rotateZ(HALF_PI);
      ambientMaterial(80, 20, 255);
      model(hexPrism);

      pop();
    }
  }
  angle -= 0.1;
}