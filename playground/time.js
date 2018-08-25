let moment = require('moment');

// Jan 1st 1970 00:00:00 am

// let date = new Date();
// let months = ['Jan', 'Feb']
// console.log(date.getMonth());

// let date = moment();
// date.add(27, 'y').subtract(9, 'M');
// console.log(date.format('MMM Do YYYY'))

// 10:35 am
// 6:01 am

let someTimestamp = moment().valueOf();
console.log(someTimestamp)

let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));