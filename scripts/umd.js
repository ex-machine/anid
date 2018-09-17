const fse = require('fs-extra');

const [name, input, output] = process.argv.slice(2);
const script = fse.readFileSync(input);

const wrappedScript = `(function (root, factory) {
	/* istanbul ignore next */
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.${name} = factory();
	}
})(this, function () {

${script}

});`

fse.ensureFileSync(output);
fse.writeFileSync(output, wrappedScript);
