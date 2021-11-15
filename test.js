const isLeap = require('./index');

console.log(isLeap(2000));//Is Leap year.

console.log(isLeap(2400));//Is leap year.

console.log(isLeap(1900));//Isn't leap year.

console.log(isLeap(2100));//Isn't leap year.

console.log(isLeap(2200));//Isn't leap year.

console.log(isLeap(2300));//Isn't leap year.

console.log(isLeap(2500));//Isn't leap year.
