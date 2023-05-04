function calculateBinomial() {
	let n = parseInt(document.getElementById("binomialN").value);
	let p = parseFloat(document.getElementById("binomialP").value);
	let x = parseInt(document.getElementById("binomialX").value);

	if (isNaN(n) || isNaN(p) || isNaN(x)) {
		document.getElementById("binomialResult").innerHTML = "Invalid input.";
		return;
	}

	if (p < 0 || p > 1 || x < 0 || x > n) {
		document.getElementById("binomialResult").innerHTML = "Invalid input.";
		return;
	}

	let result = binomialProbability(n, p, x);

	document.getElementById("binomialResult").innerHTML = result.toFixed(4);
}

function binomialProbability(n, p, x) {
	let q = 1 - p;
	let choose = factorial(n) / (factorial(x) * factorial(n - x));
	let probability = choose * Math.pow(p,	x) * Math.pow(q, n - x);
	return probability;
}

function calculatePoisson() {
	let lambda = parseFloat(document.getElementById("poissonLambda").value);
	let x = parseInt(document.getElementById("poissonX").value);

	if (isNaN(lambda) || isNaN(x)) {
		document.getElementById("poissonResult").innerHTML = "Invalid input.";
		return;
	}

	if (lambda < 0 || x < 0) {
		document.getElementById("poissonResult").innerHTML = "Invalid input.";
		return;
	}

	let result = poissonProbability(lambda, x);

	document.getElementById("poissonResult").innerHTML = result.toFixed(4);
}

function poissonProbability(lambda, x) {
	let numerator = Math.pow(lambda, x) * Math.exp(-lambda);
	let denominator = factorial(x);
	let probability = numerator / denominator;
	return probability;
}

function calculateNormal() {
	let mean = parseFloat(document.getElementById("normalMean").value);
	let stdDev = parseFloat(document.getElementById("normalStdDev").value);
	let x = parseFloat(document.getElementById("normalX").value);

	if (isNaN(mean) || isNaN(stdDev) || isNaN(x)) {
		document.getElementById("normalResult").innerHTML = "Invalid input.";
		return;
	}

	let result = normalProbability(mean, stdDev, x);

	document.getElementById("normalResult").innerHTML = result.toFixed(4);
}

function normalProbability(mean, stdDev, x) {
	let numerator = Math.exp(-Math.pow(x - mean, 2) / (2 * Math.pow(stdDev, 2)));
	let denominator = stdDev * Math.sqrt(2 * Math.PI);
	let probability = numerator / denominator;
	return probability;
}

function factorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
