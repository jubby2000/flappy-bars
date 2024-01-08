/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/audio.js":
/*!**********************!*\
  !*** ./lib/audio.js ***!
  \**********************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Music = /*#__PURE__*/function () {
  function Music() {
    _classCallCheck(this, Music);
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
  _createClass(Music, [{
    key: "init",
    value: function init() {
      var track;
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
  }, {
    key: "setTrackListener",
    value: function setTrackListener() {
      var _this = this;
      var trackSelect = document.getElementById('trackSelect');
      trackSelect.addEventListener('change', function (_ref) {
        var target = _ref.target;
        _this.selectedTrack = target.value;
        document.getElementById("audio-box").removeChild(_this.audio);
        _this.init();
      });
    }
  }, {
    key: "getAudio",
    value: function getAudio() {
      return this.audio;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }, {
    key: "play",
    value: function play(context) {
      this.audio.play();
    }
  }]);
  return Music;
}();
module.exports = Music;

/***/ }),

/***/ "./lib/bird.js":
/*!*********************!*\
  !*** ./lib/bird.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Sprite = __webpack_require__(/*! ./sprite */ "./lib/sprite.js");
var Bird = /*#__PURE__*/function () {
  function Bird(img) {
    _classCallCheck(this, Bird);
    this.x = 500;
    this.y = 300;
    this.velocity = 0;
    this.frame = 0;
    this.animation = [0, 1, 2, 1];
    this.rotation = 0;
    this.gravity = 0.25;
    this._flap = 4.6;
    this.sBird = new Sprite(img, 1000, 400, 17 * 4, 12 * 4);
  }
  _createClass(Bird, [{
    key: "getWidth",
    value: function getWidth() {
      return this.sBird.width;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.x;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.getLeft() + this.sBird.width;
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this.y;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.getTop() + this.sBird.height;
    }
  }, {
    key: "flap",
    value: function flap() {
      this.velocity = -this._flap;
    }
  }, {
    key: "update",
    value: function update(gameStarted, canvas) {
      if (gameStarted) {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y >= canvas.height - 10) {
          this.y = canvas.height - 10;
          this.velocity = this._flap;
        }

        // if (this.velocity >= this._flap) {
        //   this.rotation = Math.min(Math.PI/2, this.rotation + 0.3);
        // } else {
        //   this.rotation = -0.3;
        // }
        // } else {
        // this.y = canvas.height - 280 + 5*Math.cos(frames/2);
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.save();
      // ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      // let n = this.animation[this.frame];
      // debugger;
      this.sBird.draw(ctx, this.x - this.sBird.width / 2, this.y - this.sBird.height / 2);
      ctx.restore();
    }
  }]);
  return Bird;
}();
module.exports = Bird;

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Bird = __webpack_require__(/*! ./bird */ "./lib/bird.js");
var Music = __webpack_require__(/*! ./audio */ "./lib/audio.js");
var COLORS = ["#D5FFDD", "#295E71", "#F4BA40", "#F18738", "#978C83"];
var IMAGES = ["assets/flappy-bird-background.png", "assets/game-over.png", "assets/spacebar-instruction.png", "assets/get-ready.png", "assets/wings-up.png"];
window.AudioContext = function () {
  return window.webkitAudioContext || window.AudioContext || window.mozAudioContext;
}();
var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
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
    this.highscore = localStorage.getItem("highscore") === null ? 0 : localStorage.getItem("highscore");
    this.canvas = document.getElementById("analyser-render");
    this.ctx = this.canvas.getContext("2d");
    this.colorCollection = [];
    this.trackSelect = document.getElementById('trackSelect');
  }
  _createClass(Game, [{
    key: "initAudio",
    value: function initAudio() {
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
      var source = this.audioContext.createMediaElementSource(this.music.audio);
      source.connect(this.analyser);
      this.analyser.connect(this.audioContext.destination);
      this.audioSetup = true;
    }
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var i, images;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              for (i = 0; i < 50; i++) {
                this.colorCollection.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
              }
              _context.next = 3;
              return this.preloadImages();
            case 3:
              images = _context.sent;
              this.images = images;
              this.images.sort(function (a, b) {
                return a.index - b.index;
              }); // Sort by index
              this.gameStartImg = new Image();
              this.gameStartImg.src = this.images[3].path;
              this.instructionImg = new Image();
              this.instructionImg.src = this.images[2].path;
              this.gameOverImg = new Image();
              this.gameOverImg.src = this.images[1].path;
              this.birdImg = new Image();
              this.birdImg.src = this.images[4].path;
              this.start();
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "preloadImages",
    value: function preloadImages() {
      return Promise.all(IMAGES.map(function (src, index) {
        // Create a mapping between image path and index
        return new Promise(function (resolve, reject) {
          var image = new Image();
          image.src = src;
          image.onload = function () {
            resolve({
              path: src,
              index: index
            }); // Pass path and index
          };
          image.onerror = reject;
        });
      }));
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;
      var bird = new Bird(this.birdImg);
      var scoreEl = document.getElementById("score");
      var highScoreEl = document.getElementById("high-score");
      scoreEl.innerHTML = this.score.toString();
      highScoreEl.innerHTML = localStorage.getItem("highscore");
      var canvas = document.getElementById('canvas-container');
      ['click', 'keydown'].forEach(function (action) {
        (action === 'click' ? canvas : document).addEventListener(action, function (e) {
          _this.trackSelect.disabled = true;
          if (!_this.audioSetup) {
            _this.initAudio();
          }
          switch (e.which || e.keyCode) {
            case 1:
            case 32:
              if (e.target === document.body) {
                e.preventDefault();
              }
              if (_this.gameOver === false) {
                _this.music.play(_this.audioContext);
                bird.flap();
                _this.score++;
                if (_this.score > _this.highscore) {
                  localStorage.setItem('highscore', _this.score);
                }
                scoreEl.innerHTML = _this.score.toString();
                highScoreEl.innerHTML = localStorage.getItem('highscore');
                _this.gameStarted = true;
              } else {
                _this.gameOver = false;
                bird.x = 500;
                bird.y = 300;
                _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                bird.draw(_this.ctx);
                _this.music.play(_this.audioContext);
                bird.flap();
                _this.gameStarted = true;
                scoreEl.innerHtml = _this.score;
                highScoreEl.innerHtml = localStorage.getItem('highscore');
                _this.frameLooper(_this.birdImg, bird);
              }
              break;
            default:
              return;
          }
        });
      });
      this.frameLooper(this.birdImg, bird);
    }
  }, {
    key: "frameLooper",
    value: function frameLooper(birdImg, bird) {
      var _this2 = this;
      var fbcArray;
      if (this.audioSetup) {
        fbcArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(fbcArray);
      }
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (this.gameStarted === false) {
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(this.gameStartImg, this.canvas.width / 2 - 325 / 2, 50, 325, 81);
        this.ctx.drawImage(this.instructionImg, this.canvas.width / 2 - 364 / 2, 400, 364, 106);
      }
      bird.draw(this.ctx);
      bird.update(this.gameStarted, this.canvas);
      var bars = 50;
      if (this.audioSetup) {
        for (var i = 0; i < bars; i++) {
          this.ctx.fillStyle = this.colorCollection[i];
          var barX = i * 20;
          var barWidth = 20;
          var barHeight = -fbcArray[i];
          if (barX - barWidth > bird.getLeft() - bird.getWidth() && barX - barWidth <= bird.getRight() - bird.getWidth()) {
            if (bird.getTop() - 20 < Math.abs(barHeight) || bird.getBottom() - 20 > this.canvas.height - Math.abs(barHeight)) {
              this.gameOver = true;
            }
          }
          this.ctx.fillRect(barX, this.canvas.height, barWidth, barHeight);
          this.ctx.fillRect(barX, 0, barWidth, -barHeight);
        }
      }
      window.requestAnimationFrame(function () {
        if (_this2.gameOver === false) {
          _this2.frameLooper(birdImg, bird);
        } else {
          _this2.handleGameOver();
        }
      });
    }
  }, {
    key: "handleGameOver",
    value: function handleGameOver() {
      this.music.reset();
      this.trackSelect.disabled = false;
      this.score = 0;
      this.ctx.imageSmoothingEnabled = false;
      this.ctx.drawImage(this.gameOverImg, this.canvas.width / 2 - 325 / 2, 50, 325, 81);
      this.ctx.drawImage(this.instructionImg, this.canvas.width / 2 - 364 / 2, 400, 364, 106);
    }
  }]);
  return Game;
}();
module.exports = Game;

/***/ }),

/***/ "./lib/sprite.js":
/*!***********************!*\
  !*** ./lib/sprite.js ***!
  \***********************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Sprite = /*#__PURE__*/function () {
  function Sprite(img, x, y, width, height) {
    _classCallCheck(this, Sprite);
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  _createClass(Sprite, [{
    key: "draw",
    value: function draw(ctx, x, y) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(this.img, x, y, this.width, this.height);
    }
  }]);
  return Sprite;
}();
module.exports = Sprite;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./lib/flappy-bars.js ***!
  \****************************/
var Game = __webpack_require__(/*! ./game */ "./lib/game.js");
document.addEventListener('DOMContentLoaded', function () {
  var game = new Game();
  game.init();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map