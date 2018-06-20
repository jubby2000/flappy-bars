const Bird = require('./bird');

let audio = new Audio();
audio.src = 'assets/bensound-dubstep.mp3';
audio.controls = true;
audio.loop = true;
audio.autoplay = true;
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
for (let i = 0; i < 250; i++) {
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
  
  let sprites = new Image();
  sprites.src = 'assets/test.png';
  sprites.onload = function () {
    frameLooper(sprites);
  };
  bird = new Bird(sprites);
});

const frameLooper = sprites => {
  fbcArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbcArray);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.drawImage(sprites, 0, 0);
  // if (sprites.loaded) {
  // let bird = new Bird(sprites);
  bird.draw(ctx);
  bars = 250;
  for (let i = 0; i < bars; i++) {
    ctx.fillStyle = colorCollection[i];
    barX = i * 20;
    barWidth = 20;
    barHeight = -(fbcArray[i] / 1.1);
    ctx.fillRect(barX, canvas.height, barWidth, barHeight);
    ctx.fillRect(barX, 0, barWidth, -(barHeight));
  }
  window.requestAnimationFrame(() => {
    frameLooper(sprites);
  });
};