let raindrops = [];
let lightningFrame = 0; // Frame when the last lightning happened
const lightningInterval = 60 * 5; // Minimum interval between lightnings, in frames (e.g., 5 seconds at 60 fps)

let rainSound, thunderSound;

function preload() {
  rainSound = loadSound("rainSound.mp3");
  thunderSound = loadSound("thunderSound.mp3");
}

class Raindrop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 6, 10);
  }

  fall() {
    this.y += this.yspeed;
    let grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed += grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  show() {
    let thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke("#787878");
    line(this.x, this.y, this.x, this.y + this.len);
  }
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("p5-canvas");
  cnv.style("background-color", "transparent"); // Make the canvas background transparent
  cnv.style("display", "block"); // Ensures the canvas fills the entire screen without any default margins
  rainSound.loop(0, 1, 0.5); // Start playing the rain sound in a loop at half volume

  for (let i = 0; i < 500; i++) {
    raindrops.push(new Raindrop());
  }
}

function draw() {
  clear();

  // Raindrops animation
  for (let drop of raindrops) {
    drop.fall();
    drop.show();
  }
  // Thunder logic with frame count
  if (frameCount - lightningFrame > lightningInterval && random(1) < 0.03) {
    thunderSound.play(); // Play the thunder sound once at full volume

    // Trigger lightning effect
    document.getElementById("dim-overlay").style.display = "block";
    document.getElementById("thunder-gif1").style.display = "block";
    document.getElementById("thunder-gif2").style.display = "block";
    document.getElementById("thunder-gif3").style.display = "block";

    lightningFrame = frameCount; // Update the frame count when lightning happens

    setTimeout(() => {
      document.getElementById("dim-overlay").style.display = "none";
      document.getElementById("thunder-gif1").style.display = "none";
      document.getElementById("thunder-gif2").style.display = "none";
      document.getElementById("thunder-gif3").style.display = "none";
    }, 1000);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
