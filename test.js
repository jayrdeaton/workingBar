let WorkingBar = require('./');

let workingBar = new WorkingBar({
  character: '------',
  interval: 500
});
workingBar.start();

setTimeout(() => {
  workingBar.front = 'This is an incredibly long front: [';
}, 2000);

setTimeout(() => {
  workingBar.character = `\x1b[36m${workingBar.character}\x1b[0m`;
}, 4000);

setTimeout(() => {
  workingBar.front = '[';
  workingBar.back = '] This is an incredibly long back';
}, 6000);

setTimeout(() => {
  workingBar.back = ']';
  workingBar.before = '\x1b[36m-';
  workingBar.character = '-\x1b[0m';
}, 8000);

setTimeout(() => {
  workingBar.back = '\x1b[0m]';
  workingBar.before = '|';
  workingBar.character = '\x1b[36m-';
  workingBar.after = '-';
}, 15000);

// setTimeout(() => {
//   workingBar.stop();
// }, 12000);
