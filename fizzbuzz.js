function fizzBuzzCalculation(number) {
    a = "";
    if ((number % 3) == 0) {
        a = "Fizz";
    }
    if ((number % 5) == 0) {
        a = a + "Buzz";
    }
    return a;
}

module.exports = fizzBuzzCalculation;