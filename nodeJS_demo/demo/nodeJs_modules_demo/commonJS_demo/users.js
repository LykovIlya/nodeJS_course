const users = ["Aнтон", "Василий"];

function greet(name) {
	console.log(`Привет %c${name}`, 'color: red');
}
module.exports = { users, greet };