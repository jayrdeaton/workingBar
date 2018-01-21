let Working = require('./');

let working = new Working();
working.length = 78;
working.start();

setTimeout(() => {
  working.message('here');
  working.front = ('heyoooooooooooooooo [')
  // working.start();
}, 2000);
setTimeout(() => {
  working.stop();
}, 2500);
setTimeout(() => {
  working.start();
}, 3000)
