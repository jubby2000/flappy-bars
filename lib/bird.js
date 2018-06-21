const Sprite = require('./sprite');

class Bird {
  constructor(img) {
    this.x = 500;
    this.y = 300;
    this.velocity = 0;
    this.frame = 0;
    this.animation = [0, 1, 2, 1];
    this.rotation = 0;
    this.gravity = 0.25;
    this._flap = 4.6;
    this.sBird = new Sprite(img, 1000, 400, 17*4, 12*4);

    // document.onkeydown = (e) => {
    //   e = e || window.event;
    //   switch (e.which || e.keyCode) {
    //     case 32:
    //       this.update();
    //       break;
    //     default:
    //       return;
    //   }
    // };
  }

  getWidth() {
    return this.sBird.width;
  }

  getLeft() {
    return this.x;
  }

  getRight() {
    return this.getLeft() + this.sBird.width;
  }

  getTop() {
    return this.y;
  }

  getBottom() {
    return this.getTop() + this.sBird.height;
  }

  flap() {
    this.velocity = -this._flap;

  }

  update(gameStarted, canvas) {
    if (gameStarted) {
      console.log(this.getLeft(), this.getRight());
      this.velocity += this.gravity;
      this.y += this.velocity;
  
      if (this.y >= canvas.height - 10) {
        this.y = canvas.height - 10;
        this.velocity = this._flap;
      }

      // if (this.velocity >= this._flap) {
      //   this.rotation = Math.min(Math.PI/2, this.rotation + 0.3);
      // } else {
      //   this.rotation = -0.3;
      // }
    // } else {
      // console.log(frames);
      // this.y = canvas.height - 280 + 5*Math.cos(frames/2);
    }
    
  }

  draw(ctx) {
    ctx.save();
    // ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    // let n = this.animation[this.frame];
    // debugger;
    this.sBird.draw(ctx, (this.x - (this.sBird.width/2)), (this.y - (this.sBird.height/2)));
    ctx.restore();
  }
}

module.exports = Bird;