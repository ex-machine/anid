const Anid = require('..');

describe('mixed case', () => {
	const RANDOM_FRACTION = 0.57721566490153286060651209008240243104215933593992; // 'xOKlb0BPOqa6eEIkQWaCss2K' in V8

	beforeEach(() => {
		jest.spyOn(Math, 'random').mockImplementationOnce(() => RANDOM_FRACTION);
	});

	it('creates a function', () => {
		expect(Anid(null)).toEqual(expect.any(Function));
	});

	it('generates trimmed string 24 in length', () => {
		expect(Anid(26)()).toBe('xOKlb0BPOqa6eEIkQWaCss2K');
		expect(Math.random).toHaveBeenCalledTimes(1);
	});

	it('generates a string 24 in length', () => {
		expect(Anid(26)()).toBe('xOKlb0BPOqa6eEIkQWaCss2K');
		expect(Math.random).toHaveBeenCalledTimes(1);
	});

	it('generates a string 1 in length', () => {
		expect(Anid(1)()).toBe('j');
		expect(Math.random).toHaveBeenCalledTimes(1);
	});

	it('generates a string 8 in length by default, undefined length', () => {
		expect(Anid()()).toBe('r43omWlP');
		expect(Math.random).toHaveBeenCalledTimes(1);
	});

	it('generates a string 8 in length by default, null length', () => {
		expect(Anid(null)()).toBe('r43omWlP');
		expect(Math.random).toHaveBeenCalledTimes(1);
	});

	it('generates a string 8 in length by default, 0 length', () => {
		expect(Anid(0)()).toBe('r43omWlP');
		expect(Math.random).toHaveBeenCalledTimes(1);
	});
});
