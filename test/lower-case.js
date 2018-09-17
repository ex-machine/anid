const Anid = require('..');

describe('lower case', () => {
	const RANDOM_FRACTION_1 = 0.57721566490153286060651209008240243104215933593992; // 'ks2knzf4im' in V8
	const RANDOM_FRACTION_2 = 0.60606512090082402431042159335939925772156649015328; // 'ltgko9n4tzg' in V8
	const RANDOM_FRACTION_3 = 0.10421593359399257721566490153286060651209008240243; // '3r2aqzdksem' in V8

	beforeEach(() => {
		jest.spyOn(Math, 'random')
		.mockImplementationOnce(() => RANDOM_FRACTION_1)
		.mockImplementationOnce(() => RANDOM_FRACTION_2)
		.mockImplementationOnce(() => RANDOM_FRACTION_3);
	});

	it('creates a function', () => {
		expect(Anid(null, true)).toEqual(expect.any(Function));
	});

	it('generates truncated string 24 in length', () => {
		expect(Anid(26, true)()).toBe('ks2knzf4im' + 'ltgko9n4tzg' + '3r2');
		expect(Math.random).toHaveBeenCalledTimes(3);
	});

	it('generates a string 24 in length', () => {
		expect(Anid(24, true)()).toBe('ks2knzf4im' + 'ltgko9n4tzg' + '3r2');
		expect(Math.random).toHaveBeenCalledTimes(3);
	});

	it('generates a string 12 in length', () => {
		expect(Anid(12, true)()).toBe('ks2knzf4im' + 'lt');
		expect(Math.random).toHaveBeenCalledTimes(2);
	});

	it('generates a string 1 in length', () => {
		expect(Anid(1, true)()).toBe('k');
		expect(Math.random).toHaveBeenCalledTimes(1);
	});

	it('generates a string 8 in length by default, undefined length', () => {
		expect(Anid(undefined, true)()).toBe('ks2knzf4');
		expect(Math.random).toHaveBeenCalledTimes(1);
	});

	it('generates a string 8 in length by default, null length', () => {
		expect(Anid(null, true)()).toBe('ks2knzf4');
		expect(Math.random).toHaveBeenCalledTimes(1);
	});

	it('generates a string 8 in length by default, 0 length', () => {
		expect(Anid(0, true)()).toBe('ks2knzf4');
		expect(Math.random).toHaveBeenCalledTimes(1);
	});
});
