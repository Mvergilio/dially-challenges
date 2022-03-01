const numPrimorial = require("./index");

test("Primorial of 3 should be 30", () => {
    expect(numPrimorial(3)).toBe(30)
});

test("Primorial of 4 should be 210", () => {
    expect(numPrimorial(4)).toBe(210)
});

test("Primorial of 5 should be 2310", () => {
    expect(numPrimorial(5)).toBe(2310)
});

test("Primorial of 8 should be 9699690", () => {
    expect(numPrimorial(8)).toBe(9699690)
});
test("Primorial of 9 should be 223092870", () => {
    expect(numPrimorial(9)).toBe(223092870)
});