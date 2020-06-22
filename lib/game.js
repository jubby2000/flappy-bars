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

class Game {
  constructor() {
    this.context = new AudioContext();
    this.analyser = this.context.createAnalyser();
    this.images = [];
    this.music = new Music();
    this.gameOver = false;
    this.gameStarted = false;
    this.score = 0;
    this.highscore =
      localStorage.getItem("highscore") === null
        ? 0
        : localStorage.getItem("highscore");
    this.canvas = document.getElementById("analyser-render");
    this.ctx = this.canvas.getContext("2d");
    this.colorCollection = [];
  }

  init() {
    for (let i = 0; i < 50; i++) {
      this.colorCollection.push(
        COLORS[Math.floor(Math.random() * COLORS.length)]
      );
    }
    this.preloadImages().then((res) => {
      res.forEach((r) => {
        this.images.push(r.path[0]);
      });
      this.start();
    });
  }

  preloadImages() {
    return Promise.all(
      IMAGES.map((src) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = src;
          image.onload = resolve;
          image.onerror = reject;
        });
      })
    );
  }

  start() {
    let bird = new Bird(this.images[4]);

    let scoreEl = document.getElementById("score");
    let highScoreEl = document.getElementById("high-score");
    scoreEl.innerHTML = this.score.toString();
    highScoreEl.innerHTML = localStorage.getItem("highscore");

    let source = this.context.createMediaElementSource(this.music.audio);
    source.connect(this.analyser);
    this.analyser.connect(this.context.destination);

    ["click", "keydown"].forEach((action) => {
      document.addEventListener(action, (e) => {
        switch (e.which || e.keyCode) {
          case 1:
          case 32:
            if (e.target === document.body) {
              e.preventDefault();
            }
            if (this.gameOver === false) {
              this.music.play();
              bird.flap();
              this.score++;
              if (this.score > this.highscore) {
                localStorage.setItem("highscore", this.score);
              }
              scoreEl.innerHTML = this.score.toString();
              highScoreEl.innerHTML = localStorage.getItem("highscore");
              this.gameStarted = true;
            } else {
              this.gameOver = false;
              bird.x = 500;
              bird.y = 300;
              this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
              bird.draw(this.ctx);
              this.music.play();
              bird.flap();
              this.gameStarted = true;
              scoreEl.innerHtml = this.score;
              highScoreEl.innerHtml = localStorage.getItem("highscore");
              this.frameLooper(this.images[4], bird);
            }
            break;
          default:
            return;
        }
      });
    });
    this.frameLooper(this.images[4], bird);
  }

  frameLooper(birdImg, bird) {
    let gameStartImg = this.images[3];
    let instructionImg = this.images[2];

    let fbcArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(fbcArray);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.gameStarted === false) {
      this.ctx.imageSmoothingEnabled = false;
      this.ctx.drawImage(
        gameStartImg,
        this.canvas.width / 2 - 325 / 2,
        50,
        325,
        81
      );
      this.ctx.drawImage(
        instructionImg,
        this.canvas.width / 2 - 364 / 2,
        400,
        364,
        106
      );
    }

    bird.draw(this.ctx);
    bird.update(this.gameStarted, this.canvas);
    let bars = 50;
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
    let gameOverImg = this.images[1];
    let instructionImg = this.images[2];
    this.score = 0;
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.drawImage(
      gameOverImg,
      this.canvas.width / 2 - 325 / 2,
      50,
      325,
      81
    );
    this.ctx.drawImage(
      instructionImg,
      this.canvas.width / 2 - 364 / 2,
      400,
      364,
      106
    );
  }
}

module.exports = Game;
