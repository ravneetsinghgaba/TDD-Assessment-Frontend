import add from "./stringCalculator";

test('return 0 for and empty string', ()=> {
    expect(add('')).toBe(0);
});