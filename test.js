let Working = require('./');

let working = new Working();
working.length = 78;
// working.interval = 10;
working.start();

setTimeout(() => {
  working.message('here')
  // working.start();
}, 2000);
setTimeout(() => {
  working.stop();
}, 4000);
// setTimeout(() => {
//   working.start();
// }, 5010);
// setTimeout(() => {
//   working.stop();
//   // working.start();
// }, 5000);
// setTimeout(() => {
//   working.start();
// }, 200);
// setTimeout(() => {
//   working.stop();
//   // working.start();
// }, 5000);
// setTimeout(() => {
//   working.start();
// }, 200);
// setTimeout(() => {
//   working.stop();
//   working.start();
// }, 10000);
//
// setTimeout(() => {
//   working.stop();
//   working.start();
// }, 15000);
