const fs = require('fs');

console.log("init микротаск");
setTimeout(() => {
	console.log(performance.now(), "Timer 10");
}, 10);


fs.readFile((__filename), () => {
	console.log("File Readed -> poll");
});

setTimeout(() => {
	for (let i = 0; i < 1000; i++) {

	}
	Promise.resolve().then(() => {
		console.log("promise inside timeout микротаск");
	});
	console.log("Цикл завершен микротаск");
	process.nextTick(() => { console.log("tick inside timeout тик"); });

}, 0);

setImmediate(() => {
	console.log("Immediate ->check");
});

process.nextTick(() => { console.log("tick тик"); });

console.log("final микротаск");


Promise.resolve().then(() => {
	console.log("promise 1 микротаск");
})
	.then(() => {
		console.log("promise 2 микротаск");
	});

