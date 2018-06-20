const Bird = require('./bird');

let audio = new Audio();
audio.src = 'assets/bensound-dubstep.mp3';
audio.controls = false;
audio.loop = true;
audio.autoplay = false;
const COLORS = [
  '#024059',
  '#03658C',
  '#04B2D9',
  '#F2DDB6',
  '#D9BB96'
];

let canvas, ctx, source, context, analyser, fbcArray, bars, barX, barWidth, barHeight, bird;
let img = new Image();
img.src = 'assets/flappy-bird-background.png';


// sprites.loaded = false;
// sprites.onload = function() {
  // this.loaded = true;
// };

let colorCollection = [];
for (let i = 0; i < 50; i++) {
  colorCollection.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('audio-box').appendChild(audio);
  context = new AudioContext();
  analyser = context.createAnalyser();
  canvas = document.getElementById('analyser-render');
  ctx = canvas.getContext('2d');

  // let game = new Game(ctx);
  
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  
  let birdImg = new Image();
  birdImg.src = 'assets/wings-up.png';
  bird = new Bird(birdImg);
  birdImg.onload = function () {
    document.onkeydown = (e) => {
      e = e || window.event;
      switch(e.which || e.keyCode) {
        case 32:
          audio.play();
          bird.update(ctx);
          break;
        default:
          return;
      }
    };
    frameLooper(birdImg);
  };
});

const frameLooper = birdImg => {
  fbcArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbcArray);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.drawImage(birdImg, 0, 0);
  // if (birdImg.loaded) {
  // let bird = new Bird(birdImg);
  bird.draw(ctx);
  bars = 50;
  for (let i = 0; i < bars; i++) {
    ctx.fillStyle = colorCollection[i];
    barX = i * 20;
    barWidth = 20;
    barHeight = -(fbcArray[i] / 1.5);
    ctx.fillRect(barX, canvas.height, barWidth, barHeight);
    ctx.fillRect(barX, 0, barWidth, -(barHeight));
  }
  window.requestAnimationFrame(() => {
    frameLooper(birdImg);
  });
};