// Calculate some simple maths!

function Calculate(X, Y, Operand) {
	switch(Operand) {
		case "*":
			return X * Y;
			break;
		case "X":
			return X * Y;
			break;
	}
}

module.exports = {
	Calculate: Calculate,
	Fibonacci: Fibonacci
}
