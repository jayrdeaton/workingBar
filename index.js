var stringLength = require('string-length');

let Working = class Working {
  constructor(data) {
    this.running = false;
    Object.defineProperty(this, 'running', {
      enumerable: false,
      writable: true
    });
    this.forwardMotion = true;
    Object.defineProperty(this, 'forwardMotion', {
      enumerable: false,
      writable: true
    });
    this.length = 40;
    this.frontString = '[';
    this.backString = ']';
    this.character = '-';
    this.emptyCharacter = ' ';
    this.position = 1;
    Object.defineProperty(this, 'position', {
      enumerable: false,
      writable: true
    });
    this.interval = 35;
    if (data) {
      if (data.length) this.length = data.length;
      if (data.front) this.frontString = data.front;
      if (data.back) this.backString = data.back;
      if (data.character) this.character = data.character;
      if (data.emptyCharacter) this.emptyCharacter = data.emptyCharacter;
      if (data.position) this.position = data.position;
      if (data.interval) this.interval = data.interval;
    };
  };
  set front(string) {
    if (stringLength(string) > stringLength(this.frontString)) {
      this.position -= stringLength(string) - 1;
      if (this.position < 1) this.position = 1;
    } else {
      this.position += stringLength(this.frontString) - 1;
    };
    this.frontString = string;
  };
  set back(string) {
    if (stringLength(string) > stringLength(this.backString)) {
      let length = this.length - stringLength(this.frontString) - stringLength(this.character) - stringLength(string)
      if (this.position > length) {
        this.position = length;
        if (this.forwardMotion) this.forwardMotion = false;
      };
    };
    this.backString = string;
  };
  set empty(string) {
    this.emptyCharacter = string.charAt(0);
  };
  start() {
    this.running = true;
    this.run();
  };
  stop(message) {
    this.running = false;
    this.clear();
    if (message) this.message(message);
  };
  run() {
    let length = this.length - stringLength(this.frontString) - stringLength(this.character) - stringLength(this.backString);
    if (this.position > length) {
      this.position = 1;
      this.forwardMotion = true;
    };
    var working = this.frontString;
    var i = 1;
    while (i < this.position) {
      working += this.emptyCharacter;
      i++;
    };
    working += this.character;
    i++;
    while (i <= length) {
      working += this.emptyCharacter;
      i++;
    };
    working += this.backString;
    process.stdout.write(`${working}\r`);
    if (this.forwardMotion) {
      this.position++;
      if (this.position >= length) this.forwardMotion = false;
    } else {
      this.position--;
      if (this.position <= 1) this.forwardMotion = true;
    };
    setTimeout((instance) => {
      if (this.running) {
        this.run();
      };
    }, this.interval);
  };
  clear() {
    process.stdout.clearLine();
  };
  message(string) {
    this.position = 1;
    this.forwardMotion = true;
    this.clear();
    process.stdout.write(`${string}\n`);
  };
};

module.exports = Working;
