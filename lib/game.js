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
let gameOverImg = new Image();
let gameOverImgReady = false;
gameOverImg.src = 'assets/game-over.png';
gameOverImg.onload = () => {
  gameOverImgReady = true;
};

let instructionImg = new Image();
let instructionImgReady = false;
instructionImg.src = 'assets/spacebar-instruction.png';
instructionImg.onload = () => {
  instructionImgReady = true;
};

let gameStartImg = new Image();
let gameStartImgReady = false;
gameStartImg.src = 'assets/get-ready.png';
gameStartImg.onload = () => {
  gameStartImgReady = true;
};

let colorCollection = [];
for (let i = 0; i < 50; i++) {
  colorCollection.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
}

let score = 0;
let highscore = localStorage.getItem("highscore") === null ? 0 :
  localStorage.getItem("highscore");

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('audio-box').appendChild(audio);
  let scoreEl = document.getElementById('score');
  let highScoreEl = document.getElementById('high-score');
  scoreEl.innerHTML = score.toString();
  highScoreEl.innerHTML = localStorage.getItem("highscore");
  context = new AudioContext();
  analyser = context.createAnalyser();
  canvas = document.getElementById('analyser-render');
  ctx = canvas.getContext('2d');

  // let logo = new Image();
  // logo.src = 'assets/flappy-bars-logo.png';
  // logo.onload = function() {
  //   ctx.drawImage(logo, 0, 0, 200, 50);
  // };
  
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  
  let birdImg = new Image();
  birdImg.src = 'assets/wings-up.png';
  bird = new Bird(birdImg);
  
  birdImg.onload = function () {
    document.addEventListener('keydown', (e) => {
      switch(e.which || e.keyCode) {
        case 32:
          if (e.target === document.body) {
            e.preventDefault();
          }
          if (gameOver === false) {
            audio.play();
            bird.flap();
            score++;
            if (score > highscore) {
              localStorage.setItem("highscore", score);
            }
            scoreEl.innerHTML = score.toString();
            highScoreEl.innerHTML = localStorage.getItem("highscore");
            gameStarted = true;
          } else {
            gameOver = false;
            bird.x = 500;
            bird.y = 300;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            bird.draw(ctx);
            audio.play();
            bird.flap();
            gameStarted = true;
            scoreEl.innerHtml = score;
            highScoreEl.innerHtml = localStorage.getItem("highscore");
            frameLooper(birdImg);
          }
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
  
  if (gameStartImgReady && instructionImgReady && gameStarted === false) {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(gameStartImg, canvas.width / 2 - (325/2), 50, 325, 81);
    ctx.drawImage(instructionImg, canvas.width / 2 - (325/2), 400, 325, 81);
  }

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
  }
  window.requestAnimationFrame(() => {
    if (gameOver === false) {
      frameLooper(birdImg);
    } else {
      handleGameOver();
    }
  });
};

const handleGameOver = () => {
  audio.pause();
  audio.currentTime = 0;
  score = 0;
  if (gameOverImgReady && instructionImgReady) {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(gameOverImg, canvas.width/2 - (325/2), 50, 325, 81);
    ctx.drawImage(instructionImg, canvas.width / 2 - (325/2), 400, 325, 81);
  }
};
