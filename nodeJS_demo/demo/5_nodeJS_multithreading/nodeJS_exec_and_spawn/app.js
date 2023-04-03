const { exec, spawn } = require('child_process');

const childProcessExec = exec("ls", (err, stdout, stderr) => {
	if (err) {
		console.error(err.message);
	}
	console.log(`stdout: ${stdout}`);
	console.log(`stderr: ${stderr}`);
});
// const childProcessSpawn = exec("ls");

// childProcessSpawn.stdout.on("data", (code) => {
// 	console.log("Stdout: " + code);

// });

// childProcessSpawn.stderr.on("data", (code) => {
// 	console.log("Stderr: " + code);

// });

// childProcessSpawn.on("exit", (code) => {
// 	console.log("Код выхода: " + code);

// });

childProcessExec.on('exit', (code) => {
	console.log("Код выхода: " + code);
});