// import log, { characters, greet as greetings } from "./characters.mjs";

async function main() {
	try {
		const { characters, greet } = await import("./characters.mjs");
		for (const character of characters) {
			greet(character);
		}
	} catch (err) {
		console.log("Ошибка");
	}
}


main();