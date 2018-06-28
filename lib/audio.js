class Music {
  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/bensound-dubstep.mp3';
    this.audio.load();
    this.audio.controls = false;
    this.audio.loop = true;
    this.audio.autoplay = false;
    this.init();
  }

  init() {
    document.getElementById('audio-box').appendChild(this.audio);
  }

  getAudio() {
    return this.audio;
  }

  reset() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  play() {
    this.audio.play();
  }


}

module.exports = Music;