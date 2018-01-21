let Working = require('./');

let working = new Working();
working.length = 80;
// working.front = 'heyooooooooooooooaasldkjflaksjdlfoo [';
working.start();
setTimeout(() => {
  working.setFront('heyooooooooooooooaasldkjflaksjdlfoo [');
  // working.start();
}, 3500);
// setTimeout(() => {
//   working.setFront('[');
//   // working.start();
// }, 3500);
