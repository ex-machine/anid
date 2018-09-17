var symbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var symbolsCount = 62;

return function (length, lowercase) {
	length = length > 24 ? 24 : +length || 8;

	if (lowercase) {
		return function () {
			var string = '';

			while (string.length < length) {
				// 10 to 12 characters, depending on the engine
				string += Math.random().toString(36).slice(2);
			}

			return string.slice(0, length);
		}
	} else {
		var maxDecimalString = Math.pow(symbolsCount, length) + '';
		var maxDecimalLength = +(maxDecimalString.split('e+')[1] || maxDecimalString.length) + 1;

		return function () {
			var number = +(Math.random().toFixed(maxDecimalLength)).slice(2);
			var string = '';

			do {
				string = symbols[number % symbolsCount] + string;
				number = Math.floor(number / symbolsCount);
			} while (number > 0 && string.length < length);

			return string;
		}
	}
}
