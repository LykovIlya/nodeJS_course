const { greet, users } = require('./users.js');

for (const user of users) {
	greet(user);
}