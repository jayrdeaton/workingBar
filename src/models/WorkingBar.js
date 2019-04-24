const { stringLength } = require('../helpers');

module.exports = class WorkingBar {
  constructor(data) {
    if (!data) data = {};
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
    this.length = data.length || process.stdout.columns + 1;
    this.frontString = data.front || '[';
    this.backString = data.back || ']';
    this.character = data.character || '-';
    this.beforeEmpty = data.before || ' ';
    this.afterEmpty = data.after || ' ';
    this.position = data.position || 1;
    Object.defineProperty(this, 'position', {
      enumerable: false,
      writable: true
    });
    this.interval = data.interval || 35;
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
      const length = this.length - stringLength(this.frontString) - stringLength(this.character) - stringLength(string)
      if (this.position > length) {
        this.position = length;
        if (this.forwardMotion) this.forwardMotion = false;
      };
    };
    this.backString = string;
  };
  set before(string) {
    if (stringLength(string) > 1) {
      this.beforeEmpty = string.charAt(0);
    } else {
      this.beforeEmpty = string;
    };
  };
  set after(string) {
    if (stringLength(string) > 1) {
      this.afterEmpty = string.charAt(0);
    } else {
      this.afterEmpty = string;
    };
  };
  set empty(string) {
    if (stringLength(string) > 1) {
      this.beforeEmpty = string.charAt(0);
      this.afterEmpty = string.charAt(0);
    } else {
      this.beforeEmpty = string;
      this.afterEmpty = string;
    };
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
    const length = this.length - stringLength(this.frontString) - stringLength(this.character) - stringLength(this.backString);
    if (this.position > length) {
      this.position = 1;
      this.forwardMotion = true;
    };
    let working = this.frontString;
    let i = 1;
    while (i < this.position) {
      working += this.beforeEmpty;
      i++;
    };
    working += this.character;
    i++;
    while (i <= length) {
      working += this.afterEmpty;
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
