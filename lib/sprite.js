class Sprite {
  constructor(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // this.birdImg = new Image();
    // birdImg.onload = () => {
    //   Sprite.initSprites(birdImg);
    // };
    // this.birdImg.src = 'assets/sprites.png';
    // this.test = new Image();
    // this.test.src = 'assets/test.png';
  }

  draw(ctx, x, y) {
    // ctx.beginPath();
    // ctx.arc(200, 100, 60, 0, Math.PI);
    // ctx.closePath();
    // ctx.stroke();
    // console.log(this.test);
    // ctx.drawImage(this.img, 200, 200, 500, 200);
    // if (this.img.loaded) {
      // debugger;
      
      // ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
      //   x, y, this.width, this.height);
      ctx.drawImage(this.img, x, y, this.width, this.height);
    //   console.log("x:", x, "y: ", y);
    // }
  }

}

module.exports = Sprite;