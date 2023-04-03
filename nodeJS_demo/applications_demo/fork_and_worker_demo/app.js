const { Worker } = require("worker_threads");
const { fork } = require("child_process");
const { performance, PerformanceObserver } = require("perf_hooks");
const { readFileSync } = require("fs");

// const file = readFileSync('C:\\Users\\Brux\\Desktop\\[freekurses.com] Node.js - с нуля, основы и построение архитектуры приложений (2021)\\05 Многопоточность\\026 Упражнение - Производительность потоков.mp4');

const perfomanceObserver = new PerformanceObserver((items) => {
	items.getEntries().forEach((entry) => {
		console.log(`${entry.name}: ${entry.duration}`);
	});

});
perfomanceObserver.observe({ entryTypes: ['measure'] });


const workerFunction = (array) => {
	return new Promise((resolve, reject) => {
		performance.mark('worker start');
		let worker = new Worker(`${__dirname}/worker.js`, {
			workerData: {
				array
			}
		});

		worker.on("message", (msg) => {
			// console.log(`worker: message event: ${worker.threadId}`);
			// console.log(`worker: message: ${msg}`);
			performance.mark("worker end");
			performance.measure("worker", "worker start", "worker end");
			resolve(msg);

		});
		worker.on("online", () => {
			// console.log("worker: online event worker");
		});

		worker.on("exit", () => {
			// console.log("worker: worker завершил работу");
		});

		worker.on("error", (err) => {
			reject(err);
		});
	});
};

const forkFunction = (array) => {
	return new Promise((resolve, reject) => {

		performance.mark("fork start");

		const forkProcess = fork(`${__dirname}/fork.js`);
		forkProcess.send({ array });

		forkProcess.on("message", (msg) => {
			// console.log(`fork: Получено сообщение ${msg}`);
			performance.mark("fork end");
			performance.measure("fork", "fork start", "fork end");

			resolve(msg);
		});

		forkProcess.on("close", (code) => {
			// console.log(`fork: close ${code}`);
		});

		forkProcess.on("error", (err) => {
			reject(err);
		});
	});
};


const main = async () => {
	try {
		await workerFunction([25, 19, 48, 30]);
	} catch (err) {
		console.error(`worker: ${err.message}`);
	}
	try {
		await forkFunction([25, 19, 48, 30]);
	} catch (err) {
		console.error(`fork: ${err.message}`);

	}
};

main();




