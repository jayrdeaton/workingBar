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
  working.message('here');
  working.front = ('test [')
  // working.start();
}, 4000);
setTimeout(() => {
  working.message('here');
  working.front = ('hi my name is a secret [')
  // working.start();
}, 6000);
setTimeout(() => {
  working.stop();
}, 10000);
