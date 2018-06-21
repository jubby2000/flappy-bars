const Bird = require('./bird');

let audio = new Audio();
audio.src = 'assets/bensound-dubstep.mp3';
audio.controls = false;
audio.loop = true;
audio.autoplay = false;
const COLORS = [
  '#D5FFDD',
  '#295E71',
  '#F4BA40',
  '#F18738',
  '#978C83'
];

let canvas, ctx, source, context, analyser, fbcArray, bars, barX, barWidth, barHeight, bird, gameStarted = false, gameOver = false;
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

  let logo = new Image();
  logo.src = 'assets/flappy-bars-logo.png';
  logo.onload = function() {
    console.log("loaded");
    ctx.drawImage(logo, 0, 0, 200, 50);
  };
  // let game = new Game(ctx);
  
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  
  let birdImg = new Image();
  birdImg.src = 'assets/wings-up.png';
  bird = new Bird(birdImg);
  birdImg.onload = function () {
    // document.onkeydown = (e) => {
      //   e = e || window.event;
      //   switch(e.which || e.keyCode) {
        //     case 32:
        //       audio.play();
        //       bird.flap();
        //       gameStarted = true;
        //       break;
        //     default:
        //       return;
        //   }
        // };
        document.addEventListener('keydown', (e) => {
          switch(e.which || e.keyCode) {
            case 32:
            audio.play();
            bird.flap();
            gameStarted = true;
            break;
            default:
            return;  
          }
        });
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
  bird.update(gameStarted, canvas);
  bars = 50;
  for (let i = 0; i < bars; i++) {
    ctx.fillStyle = colorCollection[i];
    barX = i * 20;
    barWidth = 20;
    barHeight = -(fbcArray[i]);

    if (barX - barWidth > (bird.getLeft() - bird.getWidth()) 
      && barX - barWidth <= bird.getRight() - bird.getWidth()) {
      if (bird.getTop() - 20 < Math.abs(barHeight) || bird.getBottom() - 20 > canvas.height - Math.abs(barHeight)) {
        gameOver = true;
      }
    }

    ctx.fillRect(barX, canvas.height, barWidth, barHeight);
    ctx.fillRect(barX, 0, barWidth, -(barHeight));
    
    if (i === bars - 1 && gameOver) {
      handleGameOver();
    }
  }
  window.requestAnimationFrame(() => {
    frameLooper(birdImg);
  });
};

const handleGameOver = () => {
  audio.pause();
  audio.currentTime = 0;
  document.removeEventListener('keydown');
  // document.addEventListener('keydown', (e) => {
  // switch (e.which || e.keyCode) {
  //   case 32:
  //     audio.play();
  //     bird.flap();
  //     gameStarted = true;
  //     break;
  //   default:
  //     return;
  // }
  // });
};