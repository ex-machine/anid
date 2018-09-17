const path = require('path');

describe('modules', () => {
	afterEach(() => {
		jest.resetModules()
	});

	it('has `main` package.json field', () => {
		expect(require('../package.json').main).toBe('dist/anid.js');
		expect(require.resolve('..')).toBe(path.join(__dirname, '..', 'dist/anid.js'));
	});

	it('exports a function', () => {
		const Anid = require('..');
		expect(Anid).toEqual(expect.any(Function));
	});
});
