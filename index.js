var stringLength = require('string-length');

module.exports = class Working {
  constructor(data) {
    this.running = false;
    this.forwardMotion = true;
    this.length = 30;
    this.front = "[";
    this.back = "]";
    this.character = "-";
    this.emptyCharacter = " ";
    this.position = 1;
    if (data) {
      if (data.length) this.length = data.length;
      if (data.front) this.front = data.front;
      if (data.back) this.back = data.back;
      if (data.character) this.character = data.character;
      if (data.emptyCharacter) this.emptyCharacter = data.emptyCharacter;
      if (data.position) this.position = data.position;
    };
    var v_name = this;
  };
  start() {
    manager(this);
  }
  stop() {
    running = false;
    let i = 1;
    var replacement = "";
    while (i <= this.length + stringLength(this.front) + stringLength(this.back)) {
      replacement += " ";
      i++;
    };
    process.stdout.write(replacement + "\r");
  };
};

var running = false;
var instance = {};

let manager = (working) => {
  running = true;
  instance = working;
  run()
};
let run = () => {
  if (running) {
    tick()
  };
};
let tick = () => {
  var working = instance.front;
  var i = 1;
  while (i < instance.position) {
    working += instance.emptyCharacter;
    i++;
  };
  working += instance.character;
  i++;
  while (i <= instance.length) {
    working += instance.emptyCharacter;
    i++;
  };
  working += instance.back;
  process.stdout.write(working + "\r");
  if (instance.forwardMotion) {
    instance.position++;
    if (instance.position == instance.length) instance.forwardMotion = false;
  } else {
    instance.position--;
    if (instance.position == 1) instance.forwardMotion = true;
  };
    setTimeout(run, 35);
};
