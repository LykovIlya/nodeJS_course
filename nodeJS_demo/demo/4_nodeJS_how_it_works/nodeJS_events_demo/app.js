newFunction();
function newFunction() {
	const EventEmitter = require('events');

	const myEventEmitter = new EventEmitter();

	const logDbConnection = () => {
		console.log('DB connected');
	};

	myEventEmitter.addListener('connected', logDbConnection);

	myEventEmitter.emit('connected');

	myEventEmitter.removeListener('connected', logDbConnection);
	// myEventEmitter.off('connected');
	// myEventEmitter.removeAllListeners('connected');
	myEventEmitter.emit('connected');

	myEventEmitter.on("msg", (data) => {
		console.log(`Получил ${data}`);
	});

	myEventEmitter.prependListener("msg", (data) => {
		console.log(`prepend`);
	});

	myEventEmitter.emit('msg', "Привет! Получил мое сообщение.");

	myEventEmitter.once("off", () => {
		console.log("Я родился и умер.");
	});

	myEventEmitter.emit("off");
	myEventEmitter.emit("off");

	console.log(myEventEmitter.getMaxListeners());

	myEventEmitter.setMaxListeners(1);
	// console.log(myEventEmitter.getMaxListeners());
	console.log(myEventEmitter.listenerCount("msg"));
	console.log(myEventEmitter.listenerCount("off"));


	console.log(myEventEmitter.eventNames());

	myEventEmitter.on("error", (err) => {
		console.log(`Произошла ошибка: ${err.message}`);
	});

	myEventEmitter.emit("error", new Error("BOOM"));
}

const target = new EventTarget();

const logTarget = () => {
	console.log("Conneted to target");
};

target.addEventListener("connected", logTarget);
target.dispatchEvent(new Event("connected"));