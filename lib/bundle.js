/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/bird.js":
/*!*********************!*\
  !*** ./lib/bird.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sprite = __webpack_require__(/*! ./sprite */ \"./lib/sprite.js\");\n\nvar Bird = function () {\n  function Bird(img) {\n    _classCallCheck(this, Bird);\n\n    this.x = 500;\n    this.y = 300;\n    this.velocity = 0;\n    this.frame = 0;\n    this.animation = [0, 1, 2, 1];\n    this.rotation = 0;\n    this.gravity = 0.25;\n    this._flap = 4.6;\n    this.sBird = new Sprite(img, 1000, 400, 17 * 4, 12 * 4);\n\n    // document.onkeydown = (e) => {\n    //   e = e || window.event;\n    //   switch (e.which || e.keyCode) {\n    //     case 32:\n    //       this.update();\n    //       break;\n    //     default:\n    //       return;\n    //   }\n    // };\n  }\n\n  _createClass(Bird, [{\n    key: 'getWidth',\n    value: function getWidth() {\n      return this.sBird.width;\n    }\n  }, {\n    key: 'getLeft',\n    value: function getLeft() {\n      return this.x;\n    }\n  }, {\n    key: 'getRight',\n    value: function getRight() {\n      return this.getLeft() + this.sBird.width;\n    }\n  }, {\n    key: 'getTop',\n    value: function getTop() {\n      return this.y;\n    }\n  }, {\n    key: 'getBottom',\n    value: function getBottom() {\n      return this.getTop() + this.sBird.height;\n    }\n  }, {\n    key: 'flap',\n    value: function flap() {\n      this.velocity = -this._flap;\n    }\n  }, {\n    key: 'update',\n    value: function update(gameStarted, canvas) {\n      if (gameStarted) {\n        this.velocity += this.gravity;\n        this.y += this.velocity;\n\n        if (this.y >= canvas.height - 10) {\n          this.y = canvas.height - 10;\n          this.velocity = this._flap;\n        }\n\n        // if (this.velocity >= this._flap) {\n        //   this.rotation = Math.min(Math.PI/2, this.rotation + 0.3);\n        // } else {\n        //   this.rotation = -0.3;\n        // }\n        // } else {\n        // console.log(frames);\n        // this.y = canvas.height - 280 + 5*Math.cos(frames/2);\n      }\n    }\n  }, {\n    key: 'draw',\n    value: function draw(ctx) {\n      ctx.save();\n      // ctx.translate(this.x, this.y);\n      ctx.rotate(this.rotation);\n      // let n = this.animation[this.frame];\n      // debugger;\n      this.sBird.draw(ctx, this.x - this.sBird.width / 2, this.y - this.sBird.height / 2);\n      ctx.restore();\n    }\n  }]);\n\n  return Bird;\n}();\n\nmodule.exports = Bird;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYmlyZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvYmlyZC5qcz83MGJkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNwcml0ZSA9IHJlcXVpcmUoJy4vc3ByaXRlJyk7XG5cbmNsYXNzIEJpcmQge1xuICBjb25zdHJ1Y3RvcihpbWcpIHtcbiAgICB0aGlzLnggPSA1MDA7XG4gICAgdGhpcy55ID0gMzAwO1xuICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gWzAsIDEsIDIsIDFdO1xuICAgIHRoaXMucm90YXRpb24gPSAwO1xuICAgIHRoaXMuZ3Jhdml0eSA9IDAuMjU7XG4gICAgdGhpcy5fZmxhcCA9IDQuNjtcbiAgICB0aGlzLnNCaXJkID0gbmV3IFNwcml0ZShpbWcsIDEwMDAsIDQwMCwgMTcqNCwgMTIqNCk7XG5cbiAgICAvLyBkb2N1bWVudC5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgIC8vICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIC8vICAgc3dpdGNoIChlLndoaWNoIHx8IGUua2V5Q29kZSkge1xuICAgIC8vICAgICBjYXNlIDMyOlxuICAgIC8vICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgLy8gICAgICAgYnJlYWs7XG4gICAgLy8gICAgIGRlZmF1bHQ6XG4gICAgLy8gICAgICAgcmV0dXJuO1xuICAgIC8vICAgfVxuICAgIC8vIH07XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zQmlyZC53aWR0aDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmdldExlZnQoKSArIHRoaXMuc0JpcmQud2lkdGg7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuXG4gIGdldEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb3AoKSArIHRoaXMuc0JpcmQuaGVpZ2h0O1xuICB9XG5cbiAgZmxhcCgpIHtcbiAgICB0aGlzLnZlbG9jaXR5ID0gLXRoaXMuX2ZsYXA7XG5cbiAgfVxuXG4gIHVwZGF0ZShnYW1lU3RhcnRlZCwgY2FudmFzKSB7XG4gICAgaWYgKGdhbWVTdGFydGVkKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5ICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5O1xuICBcbiAgICAgIGlmICh0aGlzLnkgPj0gY2FudmFzLmhlaWdodCAtIDEwKSB7XG4gICAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSAxMDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMuX2ZsYXA7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmICh0aGlzLnZlbG9jaXR5ID49IHRoaXMuX2ZsYXApIHtcbiAgICAgIC8vICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgubWluKE1hdGguUEkvMiwgdGhpcy5yb3RhdGlvbiArIDAuMyk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICB0aGlzLnJvdGF0aW9uID0gLTAuMztcbiAgICAgIC8vIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coZnJhbWVzKTtcbiAgICAgIC8vIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLSAyODAgKyA1Kk1hdGguY29zKGZyYW1lcy8yKTtcbiAgICB9XG4gICAgXG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5zYXZlKCk7XG4gICAgLy8gY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLnJvdGF0aW9uKTtcbiAgICAvLyBsZXQgbiA9IHRoaXMuYW5pbWF0aW9uW3RoaXMuZnJhbWVdO1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIHRoaXMuc0JpcmQuZHJhdyhjdHgsICh0aGlzLnggLSAodGhpcy5zQmlyZC53aWR0aC8yKSksICh0aGlzLnkgLSAodGhpcy5zQmlyZC5oZWlnaHQvMikpKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmlyZDsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/bird.js\n");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Bird = __webpack_require__(/*! ./bird */ \"./lib/bird.js\");\n\nvar audio = new Audio();\naudio.src = 'assets/bensound-dubstep.mp3';\naudio.controls = false;\naudio.loop = true;\naudio.autoplay = false;\nvar COLORS = ['#D5FFDD', '#295E71', '#F4BA40', '#F18738', '#978C83'];\n\nvar canvas = void 0,\n    ctx = void 0,\n    source = void 0,\n    context = void 0,\n    analyser = void 0,\n    fbcArray = void 0,\n    bars = void 0,\n    barX = void 0,\n    barWidth = void 0,\n    barHeight = void 0,\n    bird = void 0,\n    gameStarted = false,\n    gameOver = false;\nvar img = new Image();\nimg.src = 'assets/flappy-bird-background.png';\n\n// sprites.loaded = false;\n// sprites.onload = function() {\n// this.loaded = true;\n// };\n\nvar colorCollection = [];\nfor (var i = 0; i < 50; i++) {\n  colorCollection.push(COLORS[Math.floor(Math.random() * COLORS.length)]);\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  document.getElementById('audio-box').appendChild(audio);\n  context = new AudioContext();\n  analyser = context.createAnalyser();\n  canvas = document.getElementById('analyser-render');\n  ctx = canvas.getContext('2d');\n\n  var logo = new Image();\n  logo.src = 'assets/flappy-bars-logo.png';\n  logo.onload = function () {\n    console.log(\"loaded\");\n    ctx.drawImage(logo, 0, 0, 200, 50);\n  };\n  // let game = new Game(ctx);\n\n  source = context.createMediaElementSource(audio);\n  source.connect(analyser);\n  analyser.connect(context.destination);\n\n  var birdImg = new Image();\n  birdImg.src = 'assets/wings-up.png';\n  bird = new Bird(birdImg);\n  birdImg.onload = function () {\n    // document.onkeydown = (e) => {\n    //   e = e || window.event;\n    //   switch(e.which || e.keyCode) {\n    //     case 32:\n    //       audio.play();\n    //       bird.flap();\n    //       gameStarted = true;\n    //       break;\n    //     default:\n    //       return;\n    //   }\n    // };\n    document.addEventListener('keydown', function (e) {\n      switch (e.which || e.keyCode) {\n        case 32:\n          audio.play();\n          bird.flap();\n          gameStarted = true;\n          break;\n        default:\n          return;\n      }\n    });\n    frameLooper(birdImg);\n  };\n});\n\nvar frameLooper = function frameLooper(birdImg) {\n  fbcArray = new Uint8Array(analyser.frequencyBinCount);\n  analyser.getByteFrequencyData(fbcArray);\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  // ctx.drawImage(birdImg, 0, 0);\n  // if (birdImg.loaded) {\n  // let bird = new Bird(birdImg);\n  bird.draw(ctx);\n  bird.update(gameStarted, canvas);\n  bars = 50;\n  for (var _i = 0; _i < bars; _i++) {\n    ctx.fillStyle = colorCollection[_i];\n    barX = _i * 20;\n    barWidth = 20;\n    barHeight = -fbcArray[_i];\n\n    if (barX - barWidth > bird.getLeft() - bird.getWidth() && barX - barWidth <= bird.getRight() - bird.getWidth()) {\n      if (bird.getTop() - 20 < Math.abs(barHeight) || bird.getBottom() - 20 > canvas.height - Math.abs(barHeight)) {\n        gameOver = true;\n      }\n    }\n\n    ctx.fillRect(barX, canvas.height, barWidth, barHeight);\n    ctx.fillRect(barX, 0, barWidth, -barHeight);\n\n    if (_i === bars - 1 && gameOver) {\n      handleGameOver();\n    }\n  }\n  window.requestAnimationFrame(function () {\n    frameLooper(birdImg);\n  });\n};\n\nvar handleGameOver = function handleGameOver() {\n  audio.pause();\n  audio.currentTime = 0;\n  document.removeEventListener('keydown');\n  // document.addEventListener('keydown', (e) => {\n  // switch (e.which || e.keyCode) {\n  //   case 32:\n  //     audio.play();\n  //     bird.flap();\n  //     gameStarted = true;\n  //     break;\n  //   default:\n  //     return;\n  // }\n  // });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2FtZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvZ2FtZS5qcz8xMmQyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJpcmQgPSByZXF1aXJlKCcuL2JpcmQnKTtcblxubGV0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7XG5hdWRpby5zcmMgPSAnYXNzZXRzL2JlbnNvdW5kLWR1YnN0ZXAubXAzJztcbmF1ZGlvLmNvbnRyb2xzID0gZmFsc2U7XG5hdWRpby5sb29wID0gdHJ1ZTtcbmF1ZGlvLmF1dG9wbGF5ID0gZmFsc2U7XG5jb25zdCBDT0xPUlMgPSBbXG4gICcjRDVGRkREJyxcbiAgJyMyOTVFNzEnLFxuICAnI0Y0QkE0MCcsXG4gICcjRjE4NzM4JyxcbiAgJyM5NzhDODMnXG5dO1xuXG5sZXQgY2FudmFzLCBjdHgsIHNvdXJjZSwgY29udGV4dCwgYW5hbHlzZXIsIGZiY0FycmF5LCBiYXJzLCBiYXJYLCBiYXJXaWR0aCwgYmFySGVpZ2h0LCBiaXJkLCBnYW1lU3RhcnRlZCA9IGZhbHNlLCBnYW1lT3ZlciA9IGZhbHNlO1xubGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuaW1nLnNyYyA9ICdhc3NldHMvZmxhcHB5LWJpcmQtYmFja2dyb3VuZC5wbmcnO1xuXG5cbi8vIHNwcml0ZXMubG9hZGVkID0gZmFsc2U7XG4vLyBzcHJpdGVzLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAvLyB0aGlzLmxvYWRlZCA9IHRydWU7XG4vLyB9O1xuXG5sZXQgY29sb3JDb2xsZWN0aW9uID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgY29sb3JDb2xsZWN0aW9uLnB1c2goQ09MT1JTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENPTE9SUy5sZW5ndGgpXSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdWRpby1ib3gnKS5hcHBlbmRDaGlsZChhdWRpbyk7XG4gIGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gIGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5hbHlzZXItcmVuZGVyJyk7XG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGxldCBsb2dvID0gbmV3IEltYWdlKCk7XG4gIGxvZ28uc3JjID0gJ2Fzc2V0cy9mbGFwcHktYmFycy1sb2dvLnBuZyc7XG4gIGxvZ28ub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJsb2FkZWRcIik7XG4gICAgY3R4LmRyYXdJbWFnZShsb2dvLCAwLCAwLCAyMDAsIDUwKTtcbiAgfTtcbiAgLy8gbGV0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICBcbiAgc291cmNlID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICBzb3VyY2UuY29ubmVjdChhbmFseXNlcik7XG4gIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gIFxuICBsZXQgYmlyZEltZyA9IG5ldyBJbWFnZSgpO1xuICBiaXJkSW1nLnNyYyA9ICdhc3NldHMvd2luZ3MtdXAucG5nJztcbiAgYmlyZCA9IG5ldyBCaXJkKGJpcmRJbWcpO1xuICBiaXJkSW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBkb2N1bWVudC5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgLy8gICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAvLyAgIHN3aXRjaChlLndoaWNoIHx8IGUua2V5Q29kZSkge1xuICAgICAgICAvLyAgICAgY2FzZSAzMjpcbiAgICAgICAgLy8gICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAvLyAgICAgICBiaXJkLmZsYXAoKTtcbiAgICAgICAgLy8gICAgICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgIHN3aXRjaChlLndoaWNoIHx8IGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIGJpcmQuZmxhcCgpO1xuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuOyAgXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZnJhbWVMb29wZXIoYmlyZEltZyk7XG4gIH07XG59KTtcblxuY29uc3QgZnJhbWVMb29wZXIgPSBiaXJkSW1nID0+IHtcbiAgZmJjQXJyYXkgPSBuZXcgVWludDhBcnJheShhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCk7XG4gIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZiY0FycmF5KTtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAvLyBjdHguZHJhd0ltYWdlKGJpcmRJbWcsIDAsIDApO1xuICAvLyBpZiAoYmlyZEltZy5sb2FkZWQpIHtcbiAgLy8gbGV0IGJpcmQgPSBuZXcgQmlyZChiaXJkSW1nKTtcbiAgYmlyZC5kcmF3KGN0eCk7XG4gIGJpcmQudXBkYXRlKGdhbWVTdGFydGVkLCBjYW52YXMpO1xuICBiYXJzID0gNTA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmFyczsgaSsrKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yQ29sbGVjdGlvbltpXTtcbiAgICBiYXJYID0gaSAqIDIwO1xuICAgIGJhcldpZHRoID0gMjA7XG4gICAgYmFySGVpZ2h0ID0gLShmYmNBcnJheVtpXSk7XG5cbiAgICBpZiAoYmFyWCAtIGJhcldpZHRoID4gKGJpcmQuZ2V0TGVmdCgpIC0gYmlyZC5nZXRXaWR0aCgpKSBcbiAgICAgICYmIGJhclggLSBiYXJXaWR0aCA8PSBiaXJkLmdldFJpZ2h0KCkgLSBiaXJkLmdldFdpZHRoKCkpIHtcbiAgICAgIGlmIChiaXJkLmdldFRvcCgpIC0gMjAgPCBNYXRoLmFicyhiYXJIZWlnaHQpIHx8IGJpcmQuZ2V0Qm90dG9tKCkgLSAyMCA+IGNhbnZhcy5oZWlnaHQgLSBNYXRoLmFicyhiYXJIZWlnaHQpKSB7XG4gICAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjdHguZmlsbFJlY3QoYmFyWCwgY2FudmFzLmhlaWdodCwgYmFyV2lkdGgsIGJhckhlaWdodCk7XG4gICAgY3R4LmZpbGxSZWN0KGJhclgsIDAsIGJhcldpZHRoLCAtKGJhckhlaWdodCkpO1xuICAgIFxuICAgIGlmIChpID09PSBiYXJzIC0gMSAmJiBnYW1lT3Zlcikge1xuICAgICAgaGFuZGxlR2FtZU92ZXIoKTtcbiAgICB9XG4gIH1cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgZnJhbWVMb29wZXIoYmlyZEltZyk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlR2FtZU92ZXIgPSAoKSA9PiB7XG4gIGF1ZGlvLnBhdXNlKCk7XG4gIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicpO1xuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgLy8gc3dpdGNoIChlLndoaWNoIHx8IGUua2V5Q29kZSkge1xuICAvLyAgIGNhc2UgMzI6XG4gIC8vICAgICBhdWRpby5wbGF5KCk7XG4gIC8vICAgICBiaXJkLmZsYXAoKTtcbiAgLy8gICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgLy8gICAgIGJyZWFrO1xuICAvLyAgIGRlZmF1bHQ6XG4gIC8vICAgICByZXR1cm47XG4gIC8vIH1cbiAgLy8gfSk7XG59OyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/game.js\n");

/***/ }),

/***/ "./lib/sprite.js":
/*!***********************!*\
  !*** ./lib/sprite.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sprite = function () {\n  function Sprite(img, x, y, width, height) {\n    _classCallCheck(this, Sprite);\n\n    this.img = img;\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n  }\n\n  _createClass(Sprite, [{\n    key: \"draw\",\n    value: function draw(ctx, x, y) {\n\n      ctx.imageSmoothingEnabled = false;\n      ctx.drawImage(this.img, x, y, this.width, this.height);\n    }\n  }]);\n\n  return Sprite;\n}();\n\nmodule.exports = Sprite;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3ByaXRlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2xpYi9zcHJpdGUuanM/MjJkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTcHJpdGUge1xuICBjb25zdHJ1Y3RvcihpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmltZyA9IGltZztcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgZHJhdyhjdHgsIHgsIHkpIHtcbiAgIFxuICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGU7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/sprite.js\n");

/***/ })

/******/ });