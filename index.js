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
    this.run();
  };
  stop() {
    this.running = false;
  };
  run() {
    var working = this.front;
    var i = 1;
    while (i < this.position) {
      working += this.emptyCharacter;
      i++;
    };
    working += this.character;
    i++;
    while (i <= this.length) {
      working += this.emptyCharacter;
      i++;
    };
    working += this.back;
    process.stdout.write(`${working}\r`);
    if (this.forwardMotion) {
      this.position++;
      if (this.position == this.length) this.forwardMotion = false;
    } else {
      this.position--;
      if (this.position == 1) this.forwardMotion = true;
    };
    setTimeout((instance) => {
      if (this.running) {
        this.run();
      } else {
        let i = 1;
        var replacement = '';
        while (i <= this.length + stringLength(this.front) + stringLength(this.back)) {
          replacement += ' ';
          i++;
        };
        process.stdout.write(`${replacement}\r`);
      };
    }, this.interval);
  };
};
