let result = document.getElementById('result');

function addNumber(num) {
	if (result.value == '0' || result.value == 'Error') {
		result.value = num;
	} else {
		result.value += num;
	}
}

function calculate(sign) {
	let expression = result.value;
	if (sign === '=') {
		try {
			result.value = eval(expression);
		} catch (error) {
			result.value = 'Error';
		}
	} else {
		result.value += sign;
	}
}

function clearResult() {
	result.value = '0';
}

function deleteNumber() {
	result.value = result.value.slice(0, -1);
	if (!result.value) {
		result.value = '0';
	}
}