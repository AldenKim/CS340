
// 1. What is the biggest design principle violation in the code below.
/*Answer 1: I think the biggest design principle violation is the single responsibility principle.
The code below gets the interval, duration, and departure variables in a single function. We can separate these
into different functions. */
// 2. Refactor the code to improve its design.

type Dictionary = {
	[index: string]: string
}

type Times = {
	interval: number;
	duration: number;
	departure: number;
};

function checkString(valueString: string, key: string) {
	if (!valueString) {
		throw new Error(`missing ${key}`);
	}
}

function checkValue(value: number, valueString: string) {
	if (value <= 0) {
		throw new Error(`${valueString} must be > 0`);
	}
}

function checkWithInterval(value: number, valueString: string, interval: number) {
	if ((value % interval) != 0) {
		throw new Error(`${valueString} % interval != 0`);
	}
}

function getValidatedValue(valueString: string, key: string, interval?: number) {
	checkString(valueString, key);
	let value = parseInt(valueString);
	checkValue(value, key);
	if (interval !== undefined) {
		checkWithInterval(value, key, interval);
	}
	return value;
}

function getTimes(props: Dictionary): Times {
	let interval = getValidatedValue(props["interval"], "interval");

	let duration = getValidatedValue(props["duration"], "duration", interval);

	let departure = getValidatedValue(props["departure"],"departure", interval);

	return { interval, duration, departure };
}
