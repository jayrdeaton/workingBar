var stringLength = require('string-length');

module.exports = class Working {
  constructor(data) {
    this.running = false;
    this.forwardMotion = true;
    this.length = 30;
    this.front = '[';
    this.back = ']';
    this.character = '-';
    this.emptyCharacter = ' ';
    this.position = 1;
    this.interval = 35;
    if (data) {
      if (data.length) this.length = data.length;
      if (data.front) this.front = data.front;
      if (data.back) this.back = data.back;
      if (data.character) this.character = data.character;
      if (data.emptyCharacter) this.emptyCharacter = data.emptyCharacter;
      if (data.position) this.position = data.position;
      if (data.interval) this.interval = data.interval;
    };
    var v_name = this;
  };
  start() {
    this.running = true;
    tick(this);
  };
  stop() {
    this.running = false;
  };
};

let tick = (instance) => {
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
  process.stdout.write(`${working}\r`);
  if (instance.forwardMotion) {
    instance.position++;
    if (instance.position == instance.length) instance.forwardMotion = false;
  } else {
    instance.position--;
    if (instance.position == 1) instance.forwardMotion = true;
  };
  setTimeout((instance) => {
    if (instance.running) {
      tick(instance);
    } else {
      let i = 1;
      var replacement = '';
      while (i <= instance.length + stringLength(instance.front) + stringLength(instance.back)) {
        replacement += ' ';
        i++;
      };
      process.stdout.write(`${replacement}\r`);
    };
  }, instance.interval, instance);
};
