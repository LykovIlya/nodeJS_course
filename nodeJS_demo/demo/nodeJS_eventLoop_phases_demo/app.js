const fs = require('fs');

console.log("init");


setTimeout(() => {
	console.log(performance.now(), "Timer 0");
}, 0);


fs.readFile((__filename), () => {
	console.log("File Readed");
});

setTimeout(() => {
	for (let i = 0; i < 1000; i++) {

	}
	console.log("Цикл завершен");
}, 100);
setImmediate(() => {
	console.log("Immediate");
});

console.log("final");