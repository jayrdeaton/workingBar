let Working = require('./');

let working = new Working();
working.length = 80;
working.character = "-------"
// working.front = 'heyooooooooooooooaasldkjflaksjdlfoo [';
working.start();

setTimeout(() => {
  working.setFront('heyooooooooooooooaasldkjflaksjdlfoo [');
  // working.start();
}, 1000);
setTimeout(() => {
  working.stop();
  // working.start();
}, 1500);
// setTimeout(() => {
//   working.setFront('[');
//   // working.start();
// }, 3500);
