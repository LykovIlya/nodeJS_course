const perf_hooks = require('perf_hooks');

test = perf_hooks.performance.timerify(test);

const perfomanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
	// console.log(items.getEntries());
	const entrySlow = items.getEntriesByName("slow").pop();
	const entryTest = items.getEntriesByName("test").pop();
	console.log(`${entrySlow.name}: ${entrySlow.duration} ms`);
	console.log(`${entryTest.name}: ${entryTest.duration} ms`);

	observer.disconnect();
});

perfomanceObserver.observe({ entryTypes: ['measure', 'function'] });

function slow() {
	performance.mark("start");
	const arr = [];
	for (let i = 0; i < 10000; i++) {
		arr.push(i * i);
	}
	performance.mark("end");
	performance.measure("slow", "start", "end");
}

function test() {
	const arr = [];
	for (let i = 0; i < 10000; i++) {
		arr.push(i * i);
	}
}

slow();
test();