
// const fs = require("fs")
// const os = require("os")

const today = new Date();

// console.log(today);

// // var time = date.getHours() + ":" + date;

const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date + "," + time


// console.log('current date:', date)
// console.log('current time:', time)
console.log(dateTime)


 console.log(today.toUTCString().slice(0, 16))
// console.log(today.toTimeString().slice(0, 9))

// console.log(today.toTimeString())

// console.log(today.getHours())

// console.log('karthiktr')


// var time = new Date();

// console.log(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));

// var timestamp = Date.now();
// console.log(timestamp);

// var time = new Date().getTime();
// console.log(time)

// var timestamp = new Date().valueOf();
// console.log(timestamp);

// var timestamp = new Date()
// console.log(timestamp);


