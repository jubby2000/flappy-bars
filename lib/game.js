const Bird = require("./bird");
const Music = require("./audio");

const COLORS = ["#D5FFDD", "#295E71", "#F4BA40", "#F18738", "#978C83"];

const IMAGES = [
  "assets/flappy-bird-background.png",
  "assets/game-over.png",
  "assets/spacebar-instruction.png",
  "assets/get-ready.png",
  "assets/wings-up.png",
];

window.AudioContext = (function(){
  return window.webkitAudioContext || window.AudioContext || window.mozAudioContext;
})();

class Game {
  constructor() {
    this.audioSetup = false;
    this.audioContext;
    this.analyser;
    this.images = [];
    this.music = new Music();
    this.gameOver = false;
    this.gameStarted = false;
    this.gameStartImg;
    this.instructionImg;
    this.gameOverImg;
    this.birdImg;
    this.score = 0;
    this.highscore =
      localStorage.getItem("highscore") === null
        ? 0
        : localStorage.getItem("highscore");
    this.canvas = document.getElementById("analyser-render");
    this.ctx = this.canvas.getContext("2d");
    this.colorCollection = [];
    this.trackSelect = document.getElementById('trackSelect');
  }

  initAudio() {
    try {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        } else {
            this.audioContext = new AudioContext();
        }
    } catch (e) {
        alert('Web Audio API is not supported in this browser');
    }
    this.analyser = this.audioContext.createAnalyser();
    let source = this.audioContext.createMediaElementSource(this.music.audio);
    source.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);
    this.audioSetup = true;
}

  async init() {
    for (let i = 0; i < 50; i++) {
      this.colorCollection.push(
        COLORS[Math.floor(Math.random() * COLORS.length)]
      );
    }
    const images = await this.preloadImages();
    this.images = images;
    this.images.sort((a, b) => a.index - b.index); // Sort by index
    this.gameStartImg = new Image();
    this.gameStartImg.src = this.images[3].path;
    this.instructionImg = new Image();
    this.instructionImg.src = this.images[2].path;
    this.gameOverImg = new Image();
    this.gameOverImg.src = this.images[1].path;
    this.birdImg = new Image();
    this.birdImg.src = this.images[4].path;
    this.start();
  }

  preloadImages() {
    return Promise.all(
      IMAGES.map((src, index) => {
        // Create a mapping between image path and index
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = src;
          image.onload = () => {
            resolve({ path: src, index }); // Pass path and index
          };
          image.onerror = reject;
        });
      })
    );
  }

  start() {

    let bird = new Bird(this.birdImg);
    let scoreEl = document.getElementById("score");
    let highScoreEl = document.getElementById("high-score");
    scoreEl.innerHTML = this.score.toString();
    highScoreEl.innerHTML = localStorage.getItem("highscore");
    const canvas = document.getElementById('canvas-container');

    ['click', 'keydown'].forEach((action) => {
      (action === 'click' ? canvas : document).addEventListener(action, (e) => {
        this.trackSelect.disabled = true;
        if(!this.audioSetup) {
          this.initAudio();
        }
        switch (e.which || e.keyCode) {
          case 1:
          case 32:
            if (e.target === document.body) {
              e.preventDefault();
            }
            if (this.gameOver === false) {
              this.music.play(this.audioContext);
              bird.flap();
              this.score++;
              if (this.score > this.highscore) {
                localStorage.setItem('highscore', this.score);
              }
              scoreEl.innerHTML = this.score.toString();
              highScoreEl.innerHTML = localStorage.getItem('highscore');
              this.gameStarted = true;
            } else {
              this.gameOver = false;
              bird.x = 500;
              bird.y = 300;
              this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
              bird.draw(this.ctx);
              this.music.play(this.audioContext);
              bird.flap();
              this.gameStarted = true;
              scoreEl.innerHtml = this.score;
              highScoreEl.innerHtml = localStorage.getItem('highscore');
              this.frameLooper(this.birdImg, bird);
            }
            break;
          default:
            return;
        }
      });
    });
    this.frameLooper(this.birdImg, bird);
  }

  frameLooper(birdImg, bird) {
    let fbcArray;

    if(this.audioSetup) {
      fbcArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteFrequencyData(fbcArray);
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.gameStarted === false) {
      this.ctx.imageSmoothingEnabled = false;
      this.ctx.drawImage(
        this.gameStartImg,
        this.canvas.width / 2 - 325 / 2,
        50,
        325,
        81
      );
      this.ctx.drawImage(
        this.instructionImg,
        this.canvas.width / 2 - 364 / 2,
        400,
        364,
        106
      );
    }

    bird.draw(this.ctx);
    bird.update(this.gameStarted, this.canvas);
    let bars = 50;
    if(this.audioSetup) {
      for (let i = 0; i < bars; i++) {
        this.ctx.fillStyle = this.colorCollection[i];
        let barX = i * 20;
        let barWidth = 20;
        let barHeight = -fbcArray[i];

        if (
          barX - barWidth > bird.getLeft() - bird.getWidth() &&
          barX - barWidth <= bird.getRight() - bird.getWidth()
        ) {
          if (
            bird.getTop() - 20 < Math.abs(barHeight) ||
            bird.getBottom() - 20 > this.canvas.height - Math.abs(barHeight)
          ) {
            this.gameOver = true;
          }
        }

        this.ctx.fillRect(barX, this.canvas.height, barWidth, barHeight);
        this.ctx.fillRect(barX, 0, barWidth, -barHeight);
      }
    }
    window.requestAnimationFrame(() => {
      if (this.gameOver === false) {
        this.frameLooper(birdImg, bird);
      } else {
        this.handleGameOver();
      }
    });
  }

  handleGameOver() {
    this.music.reset();
    this.trackSelect.disabled = false;
    this.score = 0;
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(
      this.gameOverImg,
      this.canvas.width / 2 - 325 / 2,
      50,
      325,
      81
    );
    this.ctx.drawImage(
      this.instructionImg,
      this.canvas.width / 2 - 364 / 2,
      400,
      364,
      106
    );
  }
}

module.exports = Game;
