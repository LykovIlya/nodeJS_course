// const start = performance.now();

// setTimeout(() => {
// 	console.log(performance.now() - start);
// 	console.log('Прошла секунда');
// }, 1000);

// function myFunc(arg) {
// 	console.log(`Агрумент: ${arg}`);
// }

// setTimeout(myFunc, 1500, "Классный");

// const timerId = setTimeout(() => {
// 	console.log('Boom!');
// }, 5000);

// setTimeout(() => {
// 	clearTimeout(timerId);
// 	console.log("Очищено");
// }, 1000);

// const intervalId = setInterval(() => {
// 	console.log(performance.now());
// }, 1000);

// setTimeout(() => {
// 	clearInterval(intervalId);
// }, 5000);

// console.log("Перед ");
// setImmediate(() => {
// 	console.log("После всего ");

// });
// console.log("После ");

// const timerId = setTimeout(() => {
// 	console.log('Boom!');
// }, 5000);

// timerId.unref();

// setImmediate(() => {
// 	timerId.ref();
// });