let clearSkyImg;
let cloudImgs = [];
let clouds = [];
let scale;
let brightness = 0;

function preload() {
  clearSkyImg = loadImage("rainbowVillage.png");
  for (let i = 1; i <= 3; i++) {
    cloudImgs.push(loadImage(`cloud-${i}.png`));
  }
}

class Cloud {
  constructor(img, x, y, left) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.hovered = false;
    this.left = left;
  }

  display(borderLeft, borderRight) {
    // Only display if the cloud hasn't moved off-screen
    if (
      (this.left && this.x + this.img.width * scale > borderLeft) ||
      (!this.left && this.x < borderRight)
    ) {
      image(
        this.img,
        this.x,
        this.y,
        this.img.width * scale,
        this.img.height * scale,
      );
    }
  }
  checkHover() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.img.width &&
      mouseY > this.y &&
      mouseY < this.y + this.img.height
    ) {
      this.hovered = true;
    } else {
      this.hovered = false;
    }
  }

  move() {
    if (this.hovered) {
      this.x += this.left ? -3 : 3; // Move the cloud to the right / left when hovered
      if (brightness < 155) brightness += 0.5;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scale = min(width / clearSkyImg.width, height / clearSkyImg.height);
  let scaledWidth = clearSkyImg.width * scale;
  let scaledHeight = clearSkyImg.height * scale;
  let x = (width - scaledWidth) / 2;
  let y = (height - scaledHeight) / 2;
  // Initialize cloud objects at different positions
  clouds.push(new Cloud(cloudImgs[0], x, y, true));
  clouds.push(new Cloud(cloudImgs[1], x, y + 150, true));
  clouds.push(new Cloud(cloudImgs[2], x + 278, y, false));
}

function draw() {
  clear(); // Clear the canvas every time.
  // Apply brightness effect
  push();
  tint(100 + brightness, 100 + brightness, 100 + brightness); // Use the brightness variable to adjust the tint

  // Calculate the scale factor to fit the image within the window while maintaining aspect ratio
  scale = min(width / clearSkyImg.width, height / clearSkyImg.height);
  let scaledWidth = clearSkyImg.width * scale;
  let scaledHeight = clearSkyImg.height * scale;

  // Calculate position to center the image
  let x = (width - scaledWidth) / 2;
  let y = (height - scaledHeight) / 2;

  // Draw the background image with the calculated scale and position
  image(clearSkyImg, x, y, scaledWidth, scaledHeight);
  pop(); // Restore original drawing styles

  // Process each cloud
  clouds.forEach((cloud) => {
    cloud.checkHover();
    cloud.move();
    cloud.display(x, x + scaledWidth);
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
