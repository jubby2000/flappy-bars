# Flappy Bars

[Live Demo](https://jubby2000.github.io/flappy-bars/)

![Demo](assets/flappy-bars-demo.gif)

Flappy Bars is a twist on the classic challenging game Flappy Bird. It plays music and visualizes that music with colored bars. When those bars appear, they serve as the bounds of how high or low the bird can fly. It maintains the challenging nature of the original game - beat my high score of 64!

This project was designed and built in a week, with additional features to come.

## Technologies

JavaScript ES6 was used for this project: Canvas, Web Audio API, and eventually decided on no third-party libraries.

## Current Features
  * Audio visualizer created using the Web Audio API
  * Users can start and restart the game simple with the spacebar, no other controls complications
  * Images are drawn using canvas, with an infinitely looping background regardless of the state of the game
  * High scores persist for the user across multiple sessions using localStorage

### Audio Visualizer

Drawing on Canvas is not a very straightforward process - luckily obtaining the audio and visualizer data through the Web Audio API is a little more straightforward.
```js
  // The simple part is passing in an HTML audio object
  // Connecting as many audio functions as necessary
  // But eventually connecting to the destination (your speakers)
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  
  // The fbcArray contains all of the information that we 
  // would need for the audio, and is iterated over to draw bars
  fbcArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbcArray);
  
  // After iterating through the bars and determining their height,
  // width, and space between themselves, flip them vertically to
  // create matching bars on the bottom of the canvas.
  ctx.fillRect(barX, canvas.height, barWidth, barHeight);
  ctx.fillRect(barX, 0, barWidth, -(barHeight));
```

### Detecting Collisions

Detecting collisions for multiple moving bars against another moving object was a difficult task to handle, but I was able to separate concerns for the bird into a separate class to more easily compare its top level and bottom level (and left and right) to that of the current location of the bars.

```js
  // The bird can't actually move left or right (by design)
  // but if it could, the detection adjusts to only trigger
  // if the bird is within their vertical hit zone
  if (barX - barWidth > (bird.getLeft() - bird.getWidth()) 
      && barX - barWidth <= bird.getRight() - bird.getWidth()) {
      if (bird.getTop() - 20 < Math.abs(barHeight) || 
      bird.getBottom() - 20 > canvas.height - Math.abs(barHeight)) {
        gameOver = true;
      }
    }
```

## Project Design

Infinotes was designed to be simple in terms of visuals, instructions, and gameplay. I wanted to maintain a nostalgic feel, with pixelated graphics, and also maintain the challenge of the original game.

### Additional Resources
  * [Wireframes and Proposal][wireframes]

[wireframes]: https://github.com/jubby2000/flappy-bars/wiki/Proposal-and-Wireframes

## Future features

In the future I would like to add:
  * Difficulty options
  * Bird animations, rotation
  * Music options/Enable mic audio
  * Leaderboard (initials), database backend
  * More sound effects
