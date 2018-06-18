const context = new (window.AudioContext || window.webkitAudioContext)();

let audioBuffer;
let sourceNode;
let analyser;
// load the sound


const setupAudioNodes = () => {
  // create a buffer source node
  sourceNode = context.createBufferSource();
  analyser = context.createAnalyser();
  // and connect to destination
  sourceNode.connect(analyser);
  sourceNode.connect(context.destination);
};

// load the specified sound
const loadSound = (url) => {
  let request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // When loaded decode the data
  request.onload = () => {

    // decode the data
    context.decodeAudioData(request.response, (buffer) => {
      // when the audio is decoded play the sound
      playSound(buffer);
    }, onError);
  };
  request.send();
};


const playSound = (buffer) => {
  sourceNode.buffer = buffer;
  sourceNode.start(0);
  debugger;
};

// log if an error occurs
const onError = (e) => {
  console.log(e);
};

setupAudioNodes();
loadSound("bensound-dubstep.mp3");

// const createGainNode = () => {
//   const gainNode = ctx.createGain();
//   gainNode.gain.value = 0;
//   gainNode.connect(ctx.destination);
//   return gainNode;
// };

// const createVisualizer = () => {
//   const vis = ctx.createVisualizer();
// };

// class Note {
//   constructor(freq) {
//     this.gainNode = createGainNode();
//     this.oscillatorNode.connect(this.gainNode);
//   }

//   start() {
//     this.gainNode.gain.value = 0.3;
//   }

//   stop() {
//     this.gainNode.gain.value = 0;
//   }
// }

// export default Note;