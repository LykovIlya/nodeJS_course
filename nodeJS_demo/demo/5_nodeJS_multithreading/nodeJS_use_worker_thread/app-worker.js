const { Worker } = require('worker_threads');


const compute = (array) => {
	return new Promise((resolve, reject) => {
		let worker = new Worker(`${__dirname}/worker.js`, {
			workerData: {
				array
			}
		});
		console.log("Вход в worker:" + worker.threadId);
		worker.on("message", (message) => {
			console.log("message event:" + worker.threadId);
			resolve(message);
		});
		worker.on("error", (err) => {
			reject(err);
		});

		worker.on("online", () => {
			console.log("online event:" + worker.threadId);
		});

		worker.on("exit", () => {
			console.log("exit event: worker" + " Завершил работу");
		});
	});
};

const main = async () => {
	console.log("main started");
	try {
		performance.mark("start");
		const result = await Promise.all([
			compute([25, 20, 19, 48, 30, 50]),
			compute([25, 20, 19, 48, 30, 50]),
			compute([25, 20, 19, 48, 30, 50]),
			compute([25, 20, 19, 48, 30, 50])
		]);
		console.log("return Promise.all");

		console.log(result);
		performance.mark("end");
		performance.measure("main", "start", "end");
		console.log(performance.getEntriesByName("main").pop());
	} catch (err) {
		console.log(err.stack);
	}
};
main();