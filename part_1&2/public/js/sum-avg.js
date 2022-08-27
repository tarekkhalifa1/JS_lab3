var countOfNumbers = 0;
var numbers = [];
var arr = [];
var totalSum = 0;
var avg = 0;

function collectNumbers() {
    countOfNumbers = Number(prompt("Enter count of number"));
    for (i = 1; i <= countOfNumbers; i++) {
        let number = Number(prompt(`enter number ${i}`));
        numbers.push(number);
    }
    arr = [numbers, countOfNumbers];
    return arr;
} // end of collect function

function sum() {
    collectNumbers();
    for (const n of arr[0]) {
        totalSum += n;
    }
    return totalSum;
} // end of sum function

function avg() {
    avg = totalSum / countOfNumbers;
    return avg;
} // end of average function


let sumAndAvg = () => `<div> The Sum of numbers is: ${sum()} <br> The Average of numbers is: ${avg()}`;

document.write(sumAndAvg());