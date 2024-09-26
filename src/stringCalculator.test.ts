import add from "./stringCalculator";

test('return 0 for and empty string', ()=> {
    expect(add('')).toBe(0);
});

test('return the number for a single input', () => {
    expect(add('2')).toBe(2);
});

test('return the sum of the two numbers', () => {
    expect(add('2,5')).toBe(7);
});

test('return the sum of multiple numbers', () => {
    expect(add('1, 3, 5, 7')).toBe(16);
});