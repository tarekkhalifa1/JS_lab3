var result;
var answer = false;

function calculator() {
    alert("Calculator");
    let firstNum = prompt("please enter first number");
    let operator = prompt('Enter operator ( +, -, x, / or % ): ');
    let secondNum = prompt("please enter second number");
    // check if user doesn't enter any number
    if (!firstNum || !secondNum || !operator) {
        alert("please try again");
        location.reload();
    }
    // check if user enter invalid number
    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert("please enter valid number");
        location.reload();
    }

    if (firstNum && secondNum && isNaN(firstNum) == false && isNaN(secondNum) == false) {
        switch (operator) {
            case '+':
                result = Number(firstNum) + Number(secondNum);
                // document.write(`<div>${firstNum} + ${secondNum} = ${result} </div>`);
                alert(`${firstNum} + ${secondNum} = ${result}`);
                break;

            case '-':
                result = Number(firstNum) - Number(secondNum);
                // document.write(`<div>${firstNum} - ${secondNum} = ${result} </div>`)
                alert(`${firstNum} - ${secondNum} = ${result}`);

                break;

            case 'x':
                result = Number(firstNum) * Number(secondNum);
                // document.write(`<div>${firstNum} x ${secondNum} = ${result} </div>`)
                alert(`${firstNum} x ${secondNum} = ${result}`);
                break;

            case '*':
                result = Number(firstNum) * Number(secondNum);
                // document.write(`<div>${firstNum} * ${secondNum} = ${result} </div>`)
                alert(`${firstNum} * ${secondNum} = ${result}`);

                break;

            case '/':
                result = Number(firstNum) / Number(secondNum);
                // document.write(`<div>${firstNum} / ${secondNum} = ${result} </div>`)
                alert(`${firstNum} / ${secondNum} = ${result}`);
                break;

            case '%':
                result = Number(firstNum) % Number(secondNum);
                // document.write(`<div>${firstNum} / ${secondNum} = ${result} </div>`)
                alert(`${firstNum} % ${secondNum} = ${result}`);
                break;

            default:
                alert('sorry you entered invalid operator please try again');
                location.reload();
                break;
        }
        answer = confirm("Do you want make new operation on last result?");
        if (answer) {
            new_operation();
        }

        return alert(`the final result is: ${result}`);

    }
} // end of advCalculator

calculator();

function new_operation() {
    while (answer) {
        let operator = prompt('Enter operator ( +, -, x, / or % ): ');
        let number = Number(prompt("enter number"));
        switch (operator) {
            case '+':
                result += number;
                alert(result);
                answer = confirm("Do you want make new operation?");
                break;

            case '-':
                result -= number;
                alert(result);
                answer = confirm("Do you want make new operation?");
                break;

            case 'x':
                result *= number;
                alert(result);
                answer = confirm("Do you want make new operation?");
                break;

            case '*':
                result *= number;
                alert(result);
                answer = confirm("Do you want make new operation?");
                break;

            case '/':
                result /= number;
                alert(result);
                answer = confirm("Do you want make new operation?");
                break;

            case '%':
                result %= number;
                alert(result);
                answer = confirm("Do you want make new operation?");
                break;

            default:
                alert('sorry you entered invalid operator please try again');
                location.reload();
                break;
        }
    }

    return alert(`the final result is: ${result}`);

} // end of new operation function