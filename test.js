let WorkingBar = require('./');

let workingBar = new WorkingBar();
workingBar.length = 80;
workingBar.character = '------';
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
  workingBar.stop('Ending message');
}, 8000);
