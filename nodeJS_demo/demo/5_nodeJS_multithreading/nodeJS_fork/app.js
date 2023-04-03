const { fork } = require("child_process");

const forkProcess = fork(`${__dirname}/fork.js`);

forkProcess.on('message', (message) => {
	console.log("Получено сообщение: " + message);
});

forkProcess.on('close', (code) => {
	console.log("Close: " + code);
});

forkProcess.send("Ping");
forkProcess.send("disconnect");
