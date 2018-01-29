let Working = require('./');

let working = new Working();
working.length = 80;
working.character = '------';
working.start();

setTimeout(() => {
  working.character = `\x1b[36m${working.character}\x1b[0m`;
  // working.start();
}, 5000);
setTimeout(() => {
  working.stop();
  // working.start();
}, 6500);
// setTimeout(() => {
//   working.setFront('[');
//   // working.start();
// }, 3500);
