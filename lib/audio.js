class Music {
  constructor() {
    this.audio = new Audio();
    this.audio.crossOrigin = "anonymous";
    this.audio.load();
    this.audio.controls = false;
    this.audio.loop = true;
    this.audio.autoplay = false;
    this.selectedTrack = 'pbr';
    this.setTrackListener();
    this.init();
  }

  init() {
    let track;
    switch (this.selectedTrack) {
      case 'pbr':
        track = 'assets/pbr.mp3';
        break;
      case 'bsd':
        track = 'assets/bensound-dubstep.mp3';
        break;
      case 'bsm':
        track = 'assets/bensound-moose.mp3';
        break;
      default:
        track = 'assets/pbr.mp3';
        break;
    }
    this.audio.src = track;
    document.getElementById("audio-box").appendChild(this.audio);
  }

  setTrackListener() {
    const trackSelect = document.getElementById('trackSelect');
    trackSelect.addEventListener('change', ({ target }) => {
      this.selectedTrack = target.value;
      document.getElementById("audio-box").removeChild(this.audio);
      this.init();
    })
  }

  getAudio() {
    return this.audio;
  }

  reset() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  play(context) {
    this.audio.play();
  }
}

module.exports = Music;
