class Sprite {
  constructor(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx, x, y) {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.img, x, y, this.width, this.height);
  }

}

module.exports = Sprite;