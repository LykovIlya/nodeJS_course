import { users, greet } from './users.mjs';

for (const user of users) {
	greet(user);
}