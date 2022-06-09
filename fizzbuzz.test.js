//  npm run test

const fizzBuzzCalculation = require("./fizzbuzz");

test("Return 'Fizz' for number 33", () => {
    expect(fizzBuzzCalculation(33)).toBe("Fizz");
});

test("Return 'Buzz' for number 50", () => {
    expect(fizzBuzzCalculation(50)).toBe("Buzz");
});

test("Return 'Fizz' for number 15", () => {
    expect(fizzBuzzCalculation(15)).toBe("FizzBuzz");
});

test("Return '' for number 7", () => {
    expect(fizzBuzzCalculation(7)).toBe("");
});
