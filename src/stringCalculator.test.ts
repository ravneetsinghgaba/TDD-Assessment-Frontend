import add from "./stringCalculator";

test('return 0 for and empty string', ()=> {
    expect(add('')).toBe(0);
});

test('return the number for a single input', () => {
    expect(add('2')).toBe(2);
});