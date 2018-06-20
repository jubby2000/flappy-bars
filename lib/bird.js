const Sprite = require('./sprite');

class Bird {
  constructor(img) {
    this.x = 500;
    this.y = 200;
    this.velocity = 0;
    this.frame = 0;
    this.animation = [0, 1, 2, 1];
    this.rotation = 0;
    this.gravity = 0.25;
    this._flap = 4.6;
    
    this.sBird = [
      new Sprite(img, 200, 200, 17*10, 12*10)
    ];
  }

  flap() {
    this.velocity = -this._flap;
  }

  update() {

  }

  draw(ctx) {
    // ctx.beginPath();
    // ctx.arc(200, 100, 60, 0, Math.PI);
    // ctx.closePath();
    // ctx.stroke();
    ctx.save();
    // ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    // let n = this.animation[this.frame];
    // debugger;
    this.sBird[0].draw(ctx, (this.sBird[0].width/2), (this.sBird[0].height/2));
    ctx.restore();
  }
}

module.exports = Bird;